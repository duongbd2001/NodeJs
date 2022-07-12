 
const express = require('express');
const searchController = require('../app/controller/SearchController');
const router = express.Router();

router.use('/:slug', searchController.search);
router.use('/', searchController.searchDetail);



module.exports = router;
