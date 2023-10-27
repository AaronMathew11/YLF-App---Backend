var thisWeek= require('../models/thisWeek');

const uploadThisWeek = async(req,res)=>{
    try{
        await thisWeek.deleteMany({});
        const event ={
            announcement:req.body.announcement,
            worship:req.body.worship,
            gifts:req.body.gifts,
            pftn: req.body.pftn,
            welcome: req.body.welcome,
            message: req.body.message,
            fellowship: req.body.fellowship,
            // messagefile: req.body.messagefile,
            // songs:req.body.songs,
        }
        await thisWeek.create(event);
        res.send({status:200, success: true, msg: "Weekly stuff Uploaded"});
    }
    catch(e)
    {
        res.send({status:400, success:false,msg:"Upload failed"});
    }
}

const getThisWeek=async(req,res)=>{
    try{
        result = await thisWeek.find({});
        console.log(result);
        res.send({status:200, success:true, data:result});
    }
    catch(e)
    {
        res.send({status:400, success:false, msg:"could not get this week"})
    }
}

module.exports={uploadThisWeek,getThisWeek};