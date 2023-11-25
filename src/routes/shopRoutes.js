const expresss = require('express');
const router = expresss.Router();
const shopController = require('../controllers/shopController');

router.get('/', shopController.shop);
router.get('/item/:id', shopController.shopItem);
router.post('/item/:id/add', shopController.addItemToCart);
router.get('/cart', shopController.cart);
router.post('/cart', shopController.checkout);

module.exports = router;