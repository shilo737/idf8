const express = require("express");
const cloudinary = require('cloudinary').v2;
const router = express.Router();
const{config}=require("../config/secret")
cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.CLOUD_KEY,
  api_secret: config.CLOUD_SECRET
});

router.get("/", async(req,res) => {
  res.json({msg:"uploads work"});
})

router.post("/cloud1",async(req,res)=>{
  try{
    const myFile = req.files.myFile
    if(myFile){
      const data = await cloudinary.uploader.upload(myFile.tempFilePath,{
        unique_filename:true})
        res.json(data)
    }
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

module.exports = router;