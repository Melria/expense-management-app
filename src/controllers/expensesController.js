const prisma = require('../prismaClient');

async function createExpense(req, res) {
  const { title, amount, date, category } = req.body;
  try {
    const expense = await prisma.expense.create({ data: { title, amount: parseFloat(amount), date: date ? new Date(date) : undefined, category, userId: req.user.id } });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function listExpenses(req, res) {
  try {
    const expenses = await prisma.expense.findMany({ where: { userId: req.user.id }, orderBy: { date: 'desc' } });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function getExpense(req, res) {
  try {
    const expense = await prisma.expense.findUnique({ where: { id: req.params.id } });
    if (!expense || expense.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function updateExpense(req, res) {
  try {
    const existing = await prisma.expense.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    const { title, amount, date, category } = req.body;
    const updated = await prisma.expense.update({ where: { id: req.params.id }, data: { title, amount: amount ? parseFloat(amount) : undefined, date: date ? new Date(date) : undefined, category } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function deleteExpense(req, res) {
  try {
    const existing = await prisma.expense.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    await prisma.expense.delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { createExpense, listExpenses, getExpense, updateExpense, deleteExpense };
