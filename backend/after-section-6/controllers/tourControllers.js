

// const tourdata= require("../dev-data/tourdata.json");
const Tour = require("../models/tourModel");

exports.createTour = async (req, res) => {
    try {
        console.log(req.body)
      const newTour = new Tour(req.body)
     await newTour.save()
  
    //   const newTour = await Tour.insertMany(tourdata);
  
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
  