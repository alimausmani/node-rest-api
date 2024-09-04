const express = require('express');
const router = express.Router();

const {getAllProducts ,getAllProductsTesting,addProducts} = require('../controllers/products')


router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);
router.route('/create').get(addProducts);


module.exports = router;