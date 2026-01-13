const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/categoriesController');

const router = express.Router();
router.use(auth);

router.get('/', controller.listCategories);
router.post('/', controller.createCategory);
router.get('/:id', controller.getCategory);
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;
