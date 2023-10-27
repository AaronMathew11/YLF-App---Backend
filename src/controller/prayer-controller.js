var prayerModel= require('../models/prayer')

const uploadPrayer = async(req,res)=>{

    try{
        prayer={
            name:req.body.name,
            description:req.body.description,
            date:req.body.date,
        }

        await prayerModel.create(prayer);
        res.send({status:200, success:true, msg:prayer});
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