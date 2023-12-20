var testimonyModel = require("../models/testimony");

const uploadTestimony = async (req, res) => {
  try {
    testimony = {
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
    };
    result = await testimonyModel.create(testimony);
    if (result) {
      res.send({ status: 200, success: true, data: result });
    } else {
      // If not created (due to schema validation or other reasons), send a status 400 response
      res.status(400).send({ success: false, msg: "upload failed" });
    }
  } catch (e) {
    res.send({ status: 400, success: false, msg: "testimony upload failed" });
  }
};

const getTestimony = async (req, res) => {
  try {
    result = await testimonyModel.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, msg: "testimony upload failed" });
  }
};

module.exports = { getTestimony, uploadTestimony };
