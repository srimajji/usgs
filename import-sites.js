const parse = require("csv-parse");
require("should");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const axios = require("axios");
const xml2json = require("xml2json");

const stateCodes = require("./stateCodes.json");
const siteTypes = require("./siteParams").siteTypes;
const siteParams = require("./siteParams").siteParams;
const stateFipsCode = require("./siteParams").stateFipsCode;
const statePostalCodes = require("./siteParams").statePostalCodes;
const countyFipsCode = require("./siteParams").countyFipsCode;
const output = [];

const xml2jsonOptions = {
  object: true,
  reversible: false,
  coerce: false,
  sanitize: true,
  trim: true,
  arrayNotation: false,
  alternateTextNode: true
};

const user = encodeURIComponent('streamflow');
const password = encodeURIComponent('streamflow18');
const authMechanism = 'SCRAM-SHA-1';

// Connection URL
const url = `mongodb://${user}:${password}@ds031108.mlab.com:31108?authMechanism=${authMechanism}&authSource=streamflow`;
const localhost = "mongodb://localhost:27017"

function isXML(str) {
  return (/^\s*<[\s\S]*>/).test(str);
};

MongoClient.connect(
  localhost,
  { useNewUrlParser: true },
  function (err, client) {
    if (err) {
      return console.dir(err);
    }
    const db = client.db("streamflow");

    db.createCollection("site", function (err, collection) {
      Object.keys(statePostalCodes).forEach(async function (value) {
        console.log("Parsing state", value);

        const siteTypeParams = Object.keys(siteTypes).join(",");
        const params = Object.keys(siteParams).join("&column_name=");
        const restUrl = `https://waterdata.usgs.gov/nwis/inventory?state_cd=${value}&group_key=NONE&$site_tp_cd=${siteTypeParams}&format=sitefile_output&sitefile_output_format=xml&column_name=${params}&list_of_search_criteria=state_cd`;
        try {
          const response = await axios.get(restUrl);
          if (response.data) {
            const jsonResponse = xml2json.toJson(
              response.data,
              xml2jsonOptions
            );
            let formattedData = [];
            jsonResponse.usgs_nwis.site.map(function (siteData) {
              const lng = Number.parseFloat(siteData[siteParams.dec_lat_va]);
              const lat = Number.parseFloat(siteData[siteParams.dec_long_va])
              if (!lng || !lat || isNaN(lng) || isNaN(lat)) {
                return;
              }
              const countyCode = Number.parseInt(siteData[siteParams.county_cd]);
              const site = {
                "agency": siteData[siteParams.agency_cd],
                "externalId": siteData[siteParams.site_no],
                "location": { type: "Point", coordinates: [Number.parseFloat(siteData[siteParams.dec_long_va]), Number.parseFloat(siteData[siteParams.dec_lat_va])] },
                "name": siteData[siteParams.station_nm],
                "timezone": siteData[siteParams.tz_cd],
                "county": {
                  "fipsCode": countyCode,
                  "name": countyFipsCode[countyCode.toString()]
                },
                "state": {
                  name: stateFipsCode[siteData[siteParams.state_cd]],
                  fipsCode: Number.parseInt(siteData[siteParams.state_cd])
                },
                "country": siteData[siteParams.country_cd],
                "type": siteData[siteParams.site_tp_cd],
                "dateCreated": new Date(),
                "lastUpdated": new Date(),
              }
              formattedData.push(site)
            })
            collection.insertMany(formattedData, function (
              err,
              result
            ) {
              if (err) {
                console.error("Error db: ", err);
              }
              console.log(result);
              formattedData = [];
            });
          } else {
            console.error(response.status);
          }
        } catch (e) {
          console.error("Error getting usgs site", e);
          console.error("state: ", value);
        }
      });
    });
  }
);
