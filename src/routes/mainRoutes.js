const expresss = require('express');
const router = expresss.Router();
const mainController = require('../controllers/mainController');

router.get('/home', mainController.home );
router.get('/contact', mainController.contact);
router.get('/about', mainController.about);
router.get('/faqs', mainController.faqs);


module.exports = router;