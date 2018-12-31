const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/the-sizes', { useNewUrlParser: true }).then(not => console.log("I connected"));
const router = express.Router();
const TheSize = require('../models/the-size');

/* GET users listing. */
router.route('/add').post(function(req, res) {
  const size = new TheSize();
  size.arm = req.body.arm;
  size.belt = req.body.belt;
  size.calf = req.body.calf;
  size.chest = req.body.chest;
  size.measureType = req.body.measureType;
  size.saveData = new Date(req.body.saveData);
  size.stomach = req.body.stomach;
  size.thigh = req.body.thigh;
  size.waist = req.body.waist;
  console.log(req.body);

  size.save(function (err) {
    if (err) {
      res.json({error: err});
    }
    res.json({message: 'Something was made I guess.'})
  })
});

module.exports = router;
