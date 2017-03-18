"use strict";

const express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  styleFolder = require("../config").styles;

/* GET home page. */

router.get('/', function (req, res) {
  let _queries = req.query.module,
    _spreadStyle = "";

  _queries = _queries.split(",");


  _queries.forEach(file => {
     _spreadStyle += fs.readFileSync(`${styleFolder}/${file}.css`).toString();
  });
  res.writeHead(200, {"Content-Type": "text/css"});
  res.end(_spreadStyle.replace(/(\r\n|\n|\r)/gm,""));
});

module.exports = router;
