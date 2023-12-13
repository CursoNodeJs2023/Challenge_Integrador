const expresss = require('express');
const router = expresss.Router();
const shopController = require('../controllers/shopController');



router.get('/', shopController.shopView);
router.get('/item/:id', shopController.ItemView);
router.post('/item/:id/add', shopController.addItemToCart);
router.get('/cart', shopController.cartView);
router.post('/cart', shopController.checkout);

module.exports = router;