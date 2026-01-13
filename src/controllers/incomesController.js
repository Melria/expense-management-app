const prisma = require('../prismaClient');

async function listIncomes(req, res) {
  try {
    const items = await prisma.entreeArgent.findMany({ where: { userId: req.user.id }, orderBy: { date: 'desc' } });
    res.json(items);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function createIncome(req, res) {
  const { title, amount, date, projectId } = req.body;
  try {
    const item = await prisma.entreeArgent.create({ data: { title, amount: parseFloat(amount), date: date ? new Date(date) : undefined, userId: req.user.id, projectId } });
    res.json(item);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

module.exports = { listIncomes, createIncome };
