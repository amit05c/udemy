

 const tourdata= require("../dev-data/tourdata.json");
const Tour = require("../models/tourModel");
const APIFeatures = require("../utils/apiFeatures");

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
    // console.log(req.requestTime);
  
    try {
      // EXECUTE QUERY
      // const features = new APIFeatures(Tour.find(), req.query)
      //   .filter()
      //   .sort()
      //   .limitFields()
      //   .paginate();
      // const tours = await features.query;

      let queryObj= {...req.query}
      let excludedFields= ['sort','page','limit']
      excludedFields.forEach(el=>delete queryObj[el])
      // console.log(queryObj)
      let queryStr= JSON.stringify(queryObj)
     queryStr= queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match=> `$${match}`)

    let query=  Tour.find(JSON.parse(queryStr))

    if(req.query.sort){
      console.log("amit")
      console.log(req.query)
      // console.log(await query)
    query=query.sort(req.query.sort)
    }
    let tours= await query
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
  