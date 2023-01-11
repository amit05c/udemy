

 const tourdata= require("../dev-data/tourdata.json");
const Tour = require("../models/tourModel");

exports.createTour = async (req, res) => {
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
  }

  exports.getAllTours = async(req, res) => {
    console.log(req.requestTime);
  
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(Tour.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const tours = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
          tours
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  // module.exports={
  //   createTour
  // }
  