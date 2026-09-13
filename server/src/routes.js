const express = require('express');

const cachingController = require('./controllers/caching-controller');
const cityController = require('./controllers/city-controller');
const provController = require('./controllers/prov-controller');

const router = express.Router();

// ====================
// Province Route
// ====================

router.route('/prov/page').get(provController.provPage);

router
  .route('/prov')
  .get(cachingController.cacheProvByPage, provController.getProvByPage);

router.route('/prov/isle/page').get(provController.getProvOnIsland);

router
  .route('/prov/isle')
  .get(cachingController.cacheProvByIsland, provController.getProvByIsland);

router.route('/prov/:id/detail').get(provController.getProvDetail);

router.route('/prov/:id/map').get(provController.getProvMap);

// ====================
// City Route
// ====================

router.route('/city/page').get(cityController.cityPage);

router
  .route('/city')
  .get(cachingController.cacheCityByPage, cityController.getCityByPage);

router.route('/city/prov/page').get(cityController.getCityOnProv);

router
  .route('/city/prov')
  .get(cachingController.cacheCityByProv, cityController.getCityByProv);

router.route('/city/isle/page').get(cityController.getCityOnIsland);

router
  .route('/city/isle')
  .get(cachingController.cacheCityByIsland, cityController.getCityByIsland);

router.route('/city/:id/map').get(cityController.getCityMap);

router.route('/city/:id/detail').get(cityController.getCityDetail);

module.exports = router;
