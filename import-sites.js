const parse = require("csv-parse");
require("should");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

const output = [];
const parser = parse({ comment: "#", delimiter: "\t", columns: true });


MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        return console.dir(err);
    }
    const db = client.db("streamflow");

    db.createCollection("sites", function (err, collection) {
        fs.readFile("inventory.txt", "utf8", function (err, data) {
            // parser(data, { comment: '#' }, function (err, output) {
            //     console.log("This is a test", output);
            // });
            console.log("This");

            parser.on("readable", function () {
                while (record = parser.read()) {
                    output.push(record);
                    console.log("parting output", output.length);
                }
            })

            parser.on("error", function (err) {
                console.error(err.message);
            })

            parser.on("end", function () {
                console.log("total length", output.length);
                collection.insert(output, { w: 1 }, function (err, result) { });
            });

            parser.write(data);

            parser.end();
        });
    })


})

