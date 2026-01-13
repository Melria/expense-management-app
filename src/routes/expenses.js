const express = require('express');
const auth = require('../middleware/auth');
const expensesController = require('../controllers/expensesController');

const router = express.Router();

router.use(auth);

router.post('/', expensesController.createExpense);
router.get('/', expensesController.listExpenses);
router.get('/:id', expensesController.getExpense);
router.put('/:id', expensesController.updateExpense);
router.delete('/:id', expensesController.deleteExpense);

module.exports = router;
