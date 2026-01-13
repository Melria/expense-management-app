const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/alerteController');

const router = express.Router();
router.use(auth);

router.get('/', ctrl.listAlerts);
router.post('/', ctrl.createAlert);

module.exports = router;
