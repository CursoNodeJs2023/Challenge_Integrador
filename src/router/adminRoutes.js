const expresss = require('express');
const router = expresss.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.admin);
router.get('/create', adminController.create);
router.post('/create', adminController.createItem);
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id', adminController.editItem);
router.delete('/delete/:id', adminController.delete);
router.get('/login', adminController.login);
router.post('/login', adminController.loginUser);
router.get('/register', adminController.register);
router.post('/register', adminController.registerUser);

module.exports = router;