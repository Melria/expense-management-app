const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/incomesController');

const router = express.Router();
router.use(auth);

router.get('/', ctrl.listIncomes);
router.post('/', ctrl.createIncome);

module.exports = router;
