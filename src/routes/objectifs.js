const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/objectifsController');

const router = express.Router();
router.use(auth);

router.get('/', ctrl.listObjectifs);
router.post('/', ctrl.createObjectif);
router.put('/:id', ctrl.updateObjectif);

module.exports = router;
