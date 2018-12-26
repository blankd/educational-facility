const express = require('express');
const router = express.Router();
const TheSize = require('../models/the-size');

/* GET home page. */
router.get('/data', function(req, res) {
  TheSize.find({}, function (err, data) {
    const retData = {}
    data.forEach(function(stuff) {
      retData[stuff._id] = stuff
    });
    res.json(retData);
  })
});

router.get('/entry/:id', function(req, res){
  TheSize.findById(req.params.id, function(err, data) {
    if (err != null) {
      res.status(500).json({message: err.message});
    } else if (data == null) {
      res.status(404).json({message: "Nothing was found"});
    } else {
      res.json(data);
    }
  })
});

module.exports = router;
