const parse = require("csv-parse");
require("should");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const axios = require("axios");
const xml2json = require("xml2json");

const stateCodes = require("./stateCodes.json");
const siteTypes = require("./siteParams").siteTypes;
const siteParams = require("./siteParams").siteParams;
const output = [];

const xml2jsonOptions = {
  object: true,
  reversible: false,
  coerce: false,
  sanitize: true,
  trim: true,
  arrayNotation: false,
  alternateTextNode: false
};

MongoClient.connect(
  "mongodb://localhost:27017",
  function (err, client) {
    if (err) {
      return console.dir(err);
    }
    const db = client.db("streamflow");

    db.createCollection("sites", function (err, collection) {
      Object.keys(stateCodes).forEach(async function (value) {
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
            jsonResponse.usgs_nwis.site.forEach(function (siteData) {
              const site = {
                "agencyCode": siteData[siteParams.agency_cd],
                "externalId": siteData[siteParams.site_no],
                "location": { type: "Point", coordinates: [Number.parseFloat(siteData[siteParams.dec_long_va]), Number.parseFloat(siteData[siteParams.dec_lat_va])] },
                "name": siteData[siteParams.station_nm],
                "timezone": siteData[siteParams.tz_cd],
                "county": siteData[siteParams.county_cd],
                "state": siteData[siteParams.state_cd],
                "country": siteData[siteParams.country_cd]
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
        }
      });

      //   fs.readFile("inventory2.csv", "utf8", function(err, data) {
      //     // parser(data, { comment: '#' }, function (err, output) {
      //     //     console.log("This is a test", output);
      //     // });
      //     console.log("This");
      //     const parser = parse({ comment: "#", delimiter: ",", columns: true });
      //     parser.on("readable", function() {
      //       while ((record = parser.read())) {
      //         output.push(record);
      //         console.log("parting output", output.length);
      //       }
      //     });
      //     parser.on("error", function(err) {
      //       console.error(err.message);
      //     });
      //     parser.on("end", function() {
      //       console.log("total length", output.length);
      //       collection.insertMany(output, function(err, result) {
      //         if (err) {
      //           console.error("Error db: ", err);
      //         }
      //         console.log(result);
      //       });
      //     });
      //     parser.write(data);
      //     parser.end();
      //   });
    });
  }
);
