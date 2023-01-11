

 const tourdata= require("../dev-data/tourdata.json");
const Tour = require("../models/tourModel");

const createTour = async (req, res) => {
    try {
        console.log(req.body)
        // let {name,duration}=req.body
    //   const newTour = Tour({name,duration})
    //  await newTour.save()
  
       const newTour = await Tour.insertMany(tourdata);
    // await Tour.deleteMany()
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    } catch (err) {
      console.log(err)
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
  module.exports={
    createTour
  }
  