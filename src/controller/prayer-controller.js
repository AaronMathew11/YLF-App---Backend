var prayerModel= require('../models/prayer')

const uploadPrayer = async(req,res)=>{

    try{
        prayer={
            name:req.body.name,
            description:req.body.description,
            date:req.body.date,
        }

        const createdPrayer=await prayerModel.create(prayer);
        if(createdPrayer)
        {
        res.send({status:200, success:true, msg:prayer});
        }
        else {
            // If not created (due to schema validation or other reasons), send a status 400 response
            res.status(400).send({ success: false, msg: "upload failed" });
          }
    }
    catch(e)
    {
        res.send({status:400, success:false, msg:"could not upload prayer"});
    }
}

const getPrayers = async(req,res)=>{
    try{
        result= await prayerModel.find();
        res.send({status:200, success:true, data:result});
    }
    catch(e)
    {
        res.send({status:400, success:false, msg:"could not fetch prayers"});
    }
}

module.exports={getPrayers,uploadPrayer};