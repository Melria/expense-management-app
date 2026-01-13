const prisma = require('../prismaClient');

async function listAlerts(req, res) {
  try { const items = await prisma.alerteIA.findMany({ where: { userId: req.user.id }, orderBy: { createdAt: 'desc' } }); res.json(items); } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function createAlert(req, res) {
  const { prompt, response, level } = req.body;
  try { const a = await prisma.alerteIA.create({ data: { prompt, response, level, userId: req.user.id } }); res.json(a); } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

module.exports = { listAlerts, createAlert };
