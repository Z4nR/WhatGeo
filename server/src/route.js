const cityController = require("./controllers/city-controller");
const provController = require("./controllers/prov-controller");

const router = require("express-promise-router")();

router.route("/province/page").get(provController.provPage); //Get Total Page of Province
router.route("/province").get(provController.getProvByPage); //Get Province Data using query page number
router.route("/province/island/page").get(provController.getProvOnIsland); //Get Total Page of Province on Island using query island name
router.route("/province/island").get(provController.getProvByIsland); //Get Province Data using query Island name and page number

router.route("/province/:id/detail/new").post(provController.addProvDetail); //Add Province Detail using Province Id parameter
router
  .route("/province/:id/detail/update")
  .patch(provController.updateProvDetail); //Update Province Detail using Province Detail Id parameter

router.route("/city/page").get(cityController.cityPage); //Get Total Page of City
router.route("/city").get(cityController.getCityByPage); //Get City Data using query page number
router.route("/city/prov/page").get(cityController.getCityOnProv); //Get Total Page of City on Province using query island name
router.route("/city/province").get(cityController.getCityByProv); //Get City Data using query Province name and page number
router.route("/city/island/page").get(cityController.getCityOnIsland); //Get Total Page of City on Island using query island name
router.route("/city/island").get(cityController.getCityByIsland); //Get City Data using query Island name and page number

router.route("/city/:id/destiny/new").post(cityController.addCityDestiny); //Add City Destination using City Id parameter
router
  .route("/city/:id/destiny/update")
  .patch(cityController.updateCityDestiny); //Update City Destination using City Destination Id parameter

module.exports = router;
