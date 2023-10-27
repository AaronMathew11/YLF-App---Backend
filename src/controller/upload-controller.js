var excel = require("../models/excel");
var teachingExcel = require('../models/teachingExcel');
var WorshipExcel = require('../models/WorshipSchedule');
var csv = require("csvtojson");

const uploadFile = async (req, res) => {
  try {
    var excelData = [];
    await excel.deleteMany({});
    
    csv()
      .fromFile(req.file.path)
      .then(async (res) => {
        for (var x = 0; x < res.length; x++) {
          excelData.push({
            name: res[x].Name,
            leadConnectors: res[x].Lead_Connectors,
            followupConnecter: res[x].Followup_Connector_Name,
            cellConnecter: res[x].Cell_connectors,
            followupPastoral: res[x].Followup_Pastoral_Team_member,
            daysPresent: res[x].Number_of_days_present,
            instruments: res[x].Interest_in_Instruments,
            attendance: res[x].Attendence,
            contact: res[x].Contact_No,
            attendanceComment: res[x].Attended_more_than_1_in_last_3_months,
            followupOwner: res[x].Owner_for_Followup,
            analysisPeriod: res[x].Period_of_Analysis,
            potentialCellMember: res[x].Potential_cell_member,
            growthStage: res[x].Stage_of_growth,
            currentCellGroup: res[x].Current_Cell_Group,
            proposedPrimaryCell: res[x].Proposed_Primary_Cell_Group,
            proposed2ndCell: res[x].Proposed_2nd_Cell_Group,
            proposed3rdCell: res[x].Proposed_3rd_Cell_Group,
            teacher: res[x].Teacher,
            cellLeader: res[x].Cell_Leader,
            remarks: res[x].Remarks,
          });
        }

        await excel.insertMany(excelData);
      });

    res.send({ status: 200, success: true, msg: "CSV Imported" });
  } catch (e) {
    res.send({ status: 400, success: false, msg: "CSV not Imported" });
  }
};


const getExcel= async(req,res)=>{
  try{
      result= await excel.find();
      res.send({status:200, success:true, data:result});
  }
  catch(e)
  {
    res.send({status:400, success:false, msg:"could not get excel"})
  }
}


const teachingExcelUpload = async(req,res)=>{
  try{
    var teachingData = [];
    await teachingExcel.deleteMany({});

    csv().fromFile(req.file.path).then(async(res)=>{
      for(var x=0; x<res.length;x++)
      {
        teachingData.push({
          stage1a : res[x].Stage_1a,
          stage1b : res[x].Stage_1b,
          stage2 : res[x].Stage_2,
          stage3 : res[x].Stage_3,
          stage4 : res[x].Stage_4,
        })
      }
      await teachingExcel.insertMany(teachingData);
    })
    res.send({status:200, success:true, msg: "CSV Imported" })
  }
  catch(e)
  {
    res.send({status:400, success:false, msg:"CSV not Imported"});
  }
}


const getTeachingExcel = async(req,res)=>{
  try{
    result= await teachingExcel.find();
    res.send({status:200, success:true, data:result});
}
catch(e)
{
  res.send({status:400, success:false, msg:"could not get excel"})
}
}


const WorshipExcelUpload = async(req,res)=>{
  try{
    var worshipData = [];
    await WorshipExcel.deleteMany({});

    csv().fromFile(req.file.path).then(async(res)=>{
      for(var x=0; x<res.length;x++)
      {
        worshipData.push({
          date : res[x].Date,
          role : res[x].Role,
          sujitHome : res[x].Sujit_Home,
          satishHome : res[x].Satish_Home,
          ramaHome : res[x].Rama_Home,
        })
      }
      await WorshipExcel.insertMany(worshipData);
    })
    res.send({status:200, success:true, msg: "CSV Imported" })
  }
  catch(e)
  {
    res.send({status:400, success:false, msg:"CSV not Imported"});
  }
}

const getWorshipExcel = async(req,res)=>{
  try{
    result= await WorshipExcel.find();
    res.send({status:200, success:true, data:result});
}
catch(e)
{
  res.send({status:400, success:false, msg:"could not get excel"})
}
}



module.exports = { uploadFile,getExcel,getTeachingExcel,teachingExcelUpload, WorshipExcelUpload, getWorshipExcel };
