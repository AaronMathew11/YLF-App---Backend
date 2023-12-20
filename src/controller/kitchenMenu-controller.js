var kitchenMenuModel = require("../models/Menu");

const uploadKitchenMenu = async (req, res) => {
  try {
    const menu = {
      address: req.body.address,
      menu: req.body.menu,
      count: req.body.count,
      purchaseItems: req.body.items,
      planner: req.body.planner,
      purchaser: req.body.purchaser,
      washFood: req.body.washFood,
      preWash: req.body.prewash,
      cutting: req.body.cutting,
      masala: req.body.masala,
      garlic: req.body.garlic,
      veggies: req.body.veggies,
      chicken: req.body.chicken,
      rice: req.body.rice,
      salad: req.body.salad,
      serving: req.body.serving,
      postWash: req.body.postwash,
      cleaning: req.body.cleaning,
    };
    const kitchenMenu = req.body; // Array of objects

    console.log(kitchenMenu);
    // const date = req[0].date;
    const address = kitchenMenu.address;

    // Delete existing records with the specified date
    await kitchenMenuModel.deleteMany({ address });
    // await kitchenMenuModel.deleteMany({});
    const createdMenu = await kitchenMenuModel.create(menu);
    if (createdMenu) {
      res.send({ status: 200, success: true, msg: menu });
    } else {
      // If not created (due to schema validation or other reasons), send a status 400 response
      res.status(400).send({ success: false, msg: "upload failed" });
    }
  } catch (e) {
    console.log(e);
    res.send({ status: 400, success: false, msg: "could not upload Menu" });
  }
};

const getKitchenMenu = async (req, res) => {
  try {
    result = await kitchenMenuModel.find();
    res.send({ status: 200, success: true, data: result });
  } catch (e) {
    res.send({ status: 400, success: false, msg: "could not fetch Menu" });
  }
};

module.exports = { getKitchenMenu, uploadKitchenMenu };
