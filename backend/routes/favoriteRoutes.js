const express=require("express")
const router=express.Router()

const Favorite=require("../models/Favorite")

//here get all the favorite design pattern songs
router.get("/",async(req,res)=>{
    try{
        const favorites=await Favorite.find();
        res.json(favorites)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    const favorite=new Favorite({
        pattern:req.body.pattern
    })
    //now saving it to the database
    try{
        const newfavorite=await favorite.save()
        res.status(201).json(newfavorite)

    }
    catch(err){
        res.status(500).json({message:err.message})


    }
})
module.exports=router