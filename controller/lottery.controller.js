const http = require('http-status')

exports.winner =  (req, res, next) => {
    var data = ["000088", "000188", "000288", "502365","586588"]
    var results = []
    var twoLast = req.body.winner.substring(4, 6)
    console.log(twoLast);
    for (let i = 0; i < data.length; i++) {data[i].substring(4, 6) == twoLast ? results.push(data[i]): null}

    res.status(200).send(results)
};
