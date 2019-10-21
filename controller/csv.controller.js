const http = require('http-status')
const csv = require('csv-parser');
const fs = require('fs');
const ASCD = require('../util/sortes/ascd');
// const DESC = require('../util/sortes/desc');
var results = []
var sorted = []
var information = []

exports.read = async (req, res, next) => {
    console.log('CREATE');
    fs.createReadStream('question2.csv')
        .pipe(csv())
        .on('data', (data) => {
            results.push(data)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            sorted = ASCD(results, 'string', 'LastName')
            for (var i in sorted) {
                information.push(sorted[i].FirstName + " " + sorted[i].LastName)
            }
            res.status(http.OK)
            res.json({ success: true, message: 'Success', data: information })
        });

};
