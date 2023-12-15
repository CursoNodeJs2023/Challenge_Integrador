const expresss = require('express');
const router = expresss.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/login');
const adminController = require('../controllers/adminController');

router.use(isLogged);

router.get('/', adminController.adminView);
router.get('/create', adminController.createView);
router.post('/create', uploadFiles.array('images', 2), adminController.createItem);
router.post('/create/bulk', adminController.bulkCreate);
router.get('/edit/:id', adminController.editView);
router.put('/edit/:id', adminController.editItem);
router.delete('/delete/:id', adminController.deleteItem);


module.exports = router;