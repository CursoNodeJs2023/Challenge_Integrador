const express = require('express');
const router = express.Router();

const {
  homeView,
  contactView,
  aboutView,
  faqsView,
} = require('../controllers/mainController');
const mainController = require('../controllers/mainController');

router.get('/', (req, res, next) => {

  req.session.logs = req.session.logs ? ++req.session.logs : 1;
  console.log(req.session.logs);

  next();
}, homeView);
router.get('/contact',mainController.contactView);
router.get('/about', mainController.aboutView);
router.get('/faqs', mainController.faqsView);

module.exports = router;