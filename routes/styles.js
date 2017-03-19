"use strict";

const express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    styleFolder = require("../config").styles;

/* GET home page. */

router.get('/', function (req, res) {
    let _queries = req.query.module,
        _spreadStyle = "";

    if (_queries !== undefined && _queries.length > 0) {
        _queries = _queries.split(",");


        _queries.forEach(file => {
            _spreadStyle += fs.readFileSync(`${styleFolder}/${file}.css`).toString();
        });
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(_spreadStyle.replace(/(\r\n|\n|\r)/gm, ""));
    }  else {
        res.render('error', {title: 'Hürriyet', message : 'Modüller bulunamadı', error : { status: '404'}});
    }
});

module.exports = router;
