const Review = require("../models/reviewModel")

const createReview= async(req,res)=>{
    const doc = await Review.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
}

module.exports={
    createReview
}