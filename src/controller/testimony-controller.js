var testimonyModel = require('../models/testimony');

const uploadTestimony = async(req,res)=>{
    try{
        testimony={
            name:req.body.name,
            description:req.body.description,
            date:req.body.date
        }
        result=await testimonyModel.create(testimony);
        res.send({status:200, success:true , data:result});
    }
    catch(e)
    {
        res.send({status:400, success:false, msg:"testimony upload failed"});
    }
}

const getTestimony = async(req,res)=>{
    try{
        result=await testimonyModel.find();
        res.send({status:200, success:true, data:result});
    }
    catch(e)
    {
        res.send({status:400, success:false, msg:"testimony upload failed"});
    }
}

module.exports={getTestimony,uploadTestimony}