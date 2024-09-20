const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

//Get all quiz questions
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//here we will add a new quiz question
router.post("/",async(req,res)=>{
    const quiz=new Quiz({
        question:req.body.question,
        options:req.body.options,
        answer:req.body.answer
    })
    //here we have created a new quiz now we will save it
    try{
        const newquiz=await quiz.save()
        res.status(201).json(newquiz)
    }
    catch(err){
        res.status(500).json({message:err.message})
        
    }
})
module.exports=router


