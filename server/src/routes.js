import { Router } from 'express';

import {
  cacheProvByPage,
  cacheProvByIsland,
  cacheCityByPage,
  cacheCityByProv,
  cacheCityByIsland,
} from './controllers/caching-controller.js';
import {
  cityPage,
  getCityByPage,
  getCityOnProv,
  getCityByProv,
  getCityOnIsland,
  getCityByIsland,
  getCityMap,
  getCityDetail,
} from './controllers/city-controller.js';
import {
  provPage,
  getProvByPage,
  getProvOnIsland,
  getProvByIsland,
  getProvDetail,
  getProvMap,
} from './controllers/prov-controller.js';

const router = Router();

// ====================
// Province Route
// ====================

router.route('/prov/page').get(provPage);

router.route('/prov').get(cacheProvByPage, getProvByPage);

router.route('/prov/isle/page').get(getProvOnIsland);

router.route('/prov/isle').get(cacheProvByIsland, getProvByIsland);

router.route('/prov/:id/detail').get(getProvDetail);

router.route('/prov/:id/map').get(getProvMap);

// ====================
// City Route
// ====================

router.route('/city/page').get(cityPage);

router.route('/city').get(cacheCityByPage, getCityByPage);

router.route('/city/prov/page').get(getCityOnProv);

router.route('/city/prov').get(cacheCityByProv, getCityByProv);

router.route('/city/isle/page').get(getCityOnIsland);

router.route('/city/isle').get(cacheCityByIsland, getCityByIsland);

router.route('/city/:id/map').get(getCityMap);

router.route('/city/:id/detail').get(getCityDetail);

export default router;
