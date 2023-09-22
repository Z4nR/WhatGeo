const provController = require("./controllers/prov-controller");

const router = require("express-promise-router")();

router.route("/province/page").get(provController.provPage);
router.route("/province/island/page").get(provController.getProvOnIsland);
router.route("/province").get(provController.getProvByPage);
router.route("/province/island").get(provController.getProvByIsland);
router.route("/province/:id/detail").get(provController.provDetail);

module.exports = router;
