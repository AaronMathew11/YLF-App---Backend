var worshipModel = require("../models/WorshipSchedule");

const uploadWorshipSchedule = async (req, res) => {
  try {
    const worshipSchedules = req.body; // Array of objects

    console.log(worshipSchedules);
    // const date = req[0].date;
    const date = worshipSchedules[0].date;

    // Delete existing records with the specified date
    await worshipModel.deleteMany({ date });

    const createdSchedules = await Promise.all(
      worshipSchedules.map(async (schedule) => {
        const createdSchedule = await worshipModel.create(schedule);
        return createdSchedule;
      })
    );
    res.send({ status: 200, success: true, data: createdSchedules });
  } catch (e) {
    console.error("Error:", e);
    res.send({ status: 400, success: false, msg: "Worship upload failed" });
  }
};

const getWorshipSchedule = async (req, res) => {
  try {
    result = await worshipModel.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, msg: "Schedule get failed" });
  }
};

module.exports = { getWorshipSchedule, uploadWorshipSchedule };
