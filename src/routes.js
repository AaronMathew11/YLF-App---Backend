var express = require("express"),
  routes = express.Router();
var kitchenMenuController = require('./controller/kitchenMenu-controller');
var userController = require("./controller/user-controller");
var eventController = require("./controller/event-controller");
var weeklyEventController= require("./controller/weeklyEvents-controller");
var cellController = require("./controller/cell-controller");
var prayerController= require("./controller/prayer-controller");
var worshipController = require("./controller/worship-controller");
var testimonyController = require('./controller/testimony-controller');
var passport = require("passport");
var uploadController = require("./controller/upload-controller");
var multer = require("multer");
var feedback = require('./models/feedback');
var kitchenController = require('./controller/kitchen-controller');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/files");
  },
  filename: (req, file, cb) => {
    const filename = `file_${crypto.randomUUID()}`;
    cb(null, filename);
  },
});

var upload = multer({ storage: storage });



//upload excel from admin
routes.post("/uploadExcel", upload.single('file'), uploadController.uploadFile);

//get excel data
routes.get("/getExcel",uploadController.getExcel);


//upload teaching excel
routes.post("/uploadTeachingExcel",upload.single('file'),uploadController.teachingExcelUpload);

//get teaching excel data
routes.get("/getTeachingExcel",uploadController.getTeachingExcel)

//upload worship excel
routes.post("/uploadWorshipExcel",upload.single('file'),uploadController.WorshipExcelUpload);


//get worship excel data
routes.get("/getWorshipExcel",uploadController.getWorshipExcel);

//get prayers
routes.get("/getPrayerRequests",prayerController.getPrayers);


//upload kitchen menu
routes.post("/uploadKitchenMenu",kitchenMenuController.uploadKitchenMenu);

//get kitchen menu
routes.get("/getKitchenMenu",kitchenMenuController.getKitchenMenu);



//upload upcoming events
routes.post("/uploadUpcomingEvents",eventController.uploadUpcomingEvent);

//delete upcoming events
routes.delete("/deleteUpcomingEvents",eventController.deleteUpcomingEvent);

//get upcoming events
routes.get("/getUpcomingEvents",eventController.getUpcomingEvents);



//upload this week stuff
routes.post("/uploadThisWeek",upload.single('coverImage'),weeklyEventController.uploadThisWeek);

//get week stuff
routes.get("/getThisWeek",weeklyEventController.getThisWeek);


//upload current event stuff
routes.post("/uploadCurrentEvent",eventController.uploadCurrentEvent);

//delete current event
routes.delete("/deleteCurrentEvent",eventController.deleteCurrentEvent);

//get current event
routes.get("/getCurrentEvents",eventController.getCurrentEvent);


//upload previous event stuff
routes.post("/uploadPreviousEvent",eventController.uploadPastEvent);

//delete previous event
routes.delete("/deletePreviousEvent",eventController.deletePastEvent);

//get previous events
routes.get("/getPreviousEvent",eventController.getPreviousEvent);


//upload cell data
routes.post("/uploadCellData",cellController.uploadCell);



//upload Prayer point
routes.post("/uploadPrayer", prayerController.uploadPrayer);

//upload testimony
routes.post("/uploadTestimony",testimonyController.uploadTestimony);

//get testimony
routes.get("/getTestimony",testimonyController.getTestimony);


//upload open Kitchen
// routes



//upload feedback
routes.post("/uploadFeedback",async (req,res)=>{
  try{
    message={
      message:req.body.message
    }
    result=await feedback.create(message);
    res.send({status:200, success:true, data:result});
  }
  catch(e)
  {
    res.send({status:200, success:false, msg:"could not upload feedback"});
  }
})

//add worship schedule
routes.post("/uploadWorshipSchedule",worshipController.uploadWorshipSchedule);

//get worship schedule
routes.get("/getWorshipSchedule", worshipController.getWorshipSchedule);


//upload kitchen
routes.post("/uploadKitchen", kitchenController.uploadKitchen);

//get kitchens
routes.get("/getKitchens",kitchenController.getKitchens);


routes.post("/register", userController.registerUser);
routes.post("/login", userController.loginUser);

// routes.get(
//   "/special",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     return res.json({ msg: `Hey ${req.user.email}! i open at the close` });
//   }
// );

module.exports = routes;
