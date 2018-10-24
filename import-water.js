const MongoClient = require("mongodb").MongoClient;
const axios = require("axios");


const stateCodes = require("./stateCodes.json");
const statePostalCodes = require("./siteParams").statePostalCodes;


const user = encodeURIComponent('streamflow');
const password = encodeURIComponent('streamflow18');
const authMechanism = 'SCRAM-SHA-1';

// Connection URL
const url = `mongodb://${user}:${password}@ds031108.mlab.com:31108?authMechanism=${authMechanism}&authSource=streamflow`;
const localhost = "mongodb://localhost:27017"

MongoClient.connect(
    localhost,
    { useNewUrlParser: true },
    function (err, client) {
        if (err) {
            return console.dir(err);
        }

        const db = client.db("streamflow");

        db.createCollection("siteTimeSeries", async function (err, collection) {

            Object.keys(statePostalCodes).forEach(async (value) => {
                const restUrl = `https://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=${value}&parameterCd=00060`;

                try {
                    const response = await axios.get(restUrl);
                    if (response.data && response.data.value && response.data.value.timeSeries && response.data.value.timeSeries.length >= 1) {
                        const timeSeriesValues = response.data.value.timeSeries;

                        console.log("timeSeriesValues length", timeSeriesValues.length);
                        for (let i = 0; i = i + 2; i < timeSeriesValues.length) {
                            const siteValue = timeSeriesValues[i];
                            const siteValueGuage = timeSeriesValues[i + 1];

                            if (!siteValue || !siteValue.values) {
                                console.log(siteValue);
                                return;
                            }
                            const siteExternalId = siteValue.sourceInfo.siteCode[0].value;
                            const siteTimeSeriesValues = siteValue.values[0].value;
                            const siteGuageTimeSeriesValues = siteValueGuage.values[0].value;
                            const siteVariableCode = siteValue.variable.variableCode[0].value;
                            db.collection("site").findOne({ externalId: siteExternalId }, (err, result) => {

                                if (err) {
                                    console.error("Error retreiving siteValue: ", siteValue);
                                    return;
                                }

                                if (!result) {
                                    console.error("Error retreiving siteValue: ", siteValue);
                                    return;
                                }

                                const timeSeriesValue = {
                                    siteId: result._id,
                                    streamFlow: {
                                        dateCreated: siteTimeSeriesValues[0].dateTime,
                                        quality: siteTimeSeriesValues[0].qualifiers[0],
                                        value: Number.parseFloat(siteTimeSeriesValues[0].value)
                                    },
                                    guageHeight: {
                                        dateCreated: siteGuageTimeSeriesValues[0].dateTime,
                                        quality: siteGuageTimeSeriesValues[0].qualifiers[0],
                                        value: Number.parseFloat(siteGuageTimeSeriesValues[0].value)
                                    },
                                    dateCreated: new Date()
                                };

                                collection.insertOne(timeSeriesValue, (err, result) => {
                                    if (err) {
                                        console.error("Error inserting ", timeSeriesValue, err);
                                    }

                                    //  console.log('Success', timeSeriesValue);
                                });
                            });
                        }
                    } else {
                        console.error("Response error", response.status);
                    }
                } catch (e) {
                    console.error("Error retreiving data: ", e);
                }
            });
        });
    }
)


