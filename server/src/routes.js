const cachingController = require('./controllers/caching-controller');
const cityController = require('./controllers/city-controller');
const provController = require('./controllers/prov-controller');

const router = require('express-promise-router')();

//Prov Route
router.route('/prov/page').get(provController.provPage); //Get Total Page of Province
router
  .route('/prov')
  .get(cachingController.cacheProvByPage, provController.getProvByPage); //Get Province Data using query page number
router.route('/prov/isle/page').get(provController.getProvOnIsland); //Get Total Page of Province on Island using query island name
router
  .route('/prov/isle')
  .get(cachingController.cacheProvByIsland, provController.getProvByIsland); //Get Province Data using query Island name and page number
router.route('/prov/:id/map').get(provController.getProvMap); //Get Province Map using Id Province params

//City Route
router.route('/city/page').get(cityController.cityPage); //Get Total Page of City
router
  .route('/city')
  .get(cachingController.cacheCityByPage, cityController.getCityByPage); //Get City Data using query page number
router.route('/city/prov/page').get(cityController.getCityOnProv); //Get Total Page of City on Province using query Province Id
router
  .route('/city/prov')
  .get(cachingController.cacheCityByProv, cityController.getCityByProv); //Get City Data using query Province Id and page number
router.route('/city/isle/page').get(cityController.getCityOnIsland); //Get Total Page of City on Island using query island name
router
  .route('/city/isle')
  .get(cachingController.cacheCityByIsland, cityController.getCityByIsland); //Get City Data using query Island name and page number
router.route('/city/:id/map').get(cityController.getCityMap); //Get City Map using Id City params
router.route('/city/:id/destiny').get(cityController.getCityDestiny); //Get City Destiny using Id City params

module.exports = router;
