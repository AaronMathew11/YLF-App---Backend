const pastEvent = require("../models/pastEvents");
const upcomingEvent = require("../models/upcomingEvents");
const currentEvent = require("../models/currentEvent");

const uploadPastEvent = async (req, res) => {
  try {
    const event = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      img: req.body.img,
      testimony1Name: req.body.testimony1Name,
      testimony2Name: req.body.testimony2Name,
      testimony3Name: req.body.testimony3Name,
      testimony1Description: req.body.testimony1Description,
      testimony2Description: req.body.testimony2Description,
      testimony3Description: req.body.testimony3Description,
    };

    const createdEvent1 = await pastEvent.create(event);
    if (createdEvent1) {
      res.send({ status: 200, success: true, msg: "Event Uploaded" });
    } else {
      // If not created (due to schema validation or other reasons), send a status 400 response
      res.status(400).send({ success: false, msg: "Event not uploaded" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Event not Uploaded" });
  }
};

const uploadUpcomingEvent = async (req, res) => {
  try {
    const event = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      img: req.body.img,
      venue: req.body.venue,
      studentsCost: req.body.studentsCost,
      adultsCost: req.body.adultsCost,
      kidsCost: req.body.kidsCost,
      regLink: req.body.regLink,
    };
    const createdEvent2 = await upcomingEvent.create(event);
    if (createdEvent2) {
      res.send({ status: 200, success: true, msg: "Event Uploaded" });
    } else {
      // If not created (due to schema validation or other reasons), send a status 400 response
      res.status(400).send({ success: false, msg: "Event not uploaded" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Event not uploaded" });
  }
};

const uploadCurrentEvent = async (req, res) => {
  try {
    const event = {
      title: req.body.title,
      description: req.body.description,
      img: req.body.img,
      schedule: req.body.schedule,
      material: req.body.material,
    };
    const createdEvent3 = await currentEvent.create(event);
    if (createdEvent3) {
      res.send({ status: 200, success: true, msg: "Event Uploaded" });
      console.log(event);
    } else {
      // If not created (due to schema validation or other reasons), send a status 400 response
      res.status(400).send({ success: false, msg: "Event not uploaded" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Event not uploaded" });
  }
};

const deletePastEvent = async (req, res) => {
  try {
    const result = await pastEvent.deleteOne({
      title: req.body.title,
      description: req.body.description,
    });

    if (result.deletedCount === 1) {
      res.send({ status: 200, success: true, msg: "Event Deleted" });
    } else {
      res.send({ status: 404, success: false, msg: "Event not found" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Event delete failed" });
  }
};

const deleteCurrentEvent = async (req, res) => {
  try {
    const result = await currentEvent.deleteOne({
      title: req.body.title,
      description: req.body.description,
    });

    if (result.deletedCount === 1) {
      res.send({ status: 200, success: true, msg: "Event Deleted" });
    } else {
      res.send({ status: 404, success: false, msg: "Event not found" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Event delete failed" });
  }
};

const deleteUpcomingEvent = async (req, res) => {
  try {
    const result = await upcomingEvent.deleteOne({
      title: req.body.title,
      description: req.body.description,
    });

    if (result.deletedCount === 1) {
      res.send({ status: 200, success: true, msg: "Event Deleted" });
    } else {
      res.send({ status: 404, success: false, msg: "Event not found" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Event delete failed" });
  }
};

const getUpcomingEvents = async (req, res) => {
  try {
    const result = await upcomingEvent.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, mst: "couldnt get events" });
  }
};

const getPreviousEvent = async (req, res) => {
  try {
    const result = await pastEvent.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, mst: "couldnt get events" });
  }
};

const getCurrentEvent = async (req, res) => {
  try {
    const result = await currentEvent.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, mst: "couldnt get events" });
  }
};

module.exports = {
  uploadPastEvent,
  getCurrentEvent,
  uploadUpcomingEvent,
  uploadCurrentEvent,
  deletePastEvent,
  deleteCurrentEvent,
  deleteUpcomingEvent,
  getUpcomingEvents,
  getPreviousEvent,
};
