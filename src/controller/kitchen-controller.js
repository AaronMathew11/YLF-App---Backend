var kitchenModel = require("../models/openKitchen");

const uploadKitchen = async (req, res) => {
  try {
    kitchen = {
      name: req.body.name,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address1: req.body.address1,
    };

    const Createdkitchen = await kitchenModel.create(kitchen);
    if (Createdkitchen) {
      res.send({ status: 200, success: true, msg: kitchen });
    } else {
      // If not created (due to schema validation or other reasons), send a status 400 response
      res.status(400).send({ success: false, msg: "upload failed" });
    }
  } catch (e) {
    console.log(e);
    res.send({ status: 400, success: false, msg: "could not upload kitchen" });
  }
};

const getKitchens = async (req, res) => {
  try {
    result = await kitchenModel.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, msg: "could not fetch kitchens" });
  }
};

module.exports = { getKitchens, uploadKitchen };
