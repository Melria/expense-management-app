const prisma = require('../prismaClient');

async function listObjectifs(req, res) {
  try { const items = await prisma.objectif.findMany({ where: { userId: req.user.id } }); res.json(items); } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function createObjectif(req, res) {
  const { title, description, targetAmount } = req.body;
  try { const o = await prisma.objectif.create({ data: { title, description, targetAmount: targetAmount ? parseFloat(targetAmount) : undefined, userId: req.user.id } }); res.json(o); } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function updateObjectif(req, res) {
  try { const existing = await prisma.objectif.findUnique({ where: { id: req.params.id } }); if (!existing || existing.userId !== req.user.id) return res.status(404).json({ error: 'Not found' }); const updated = await prisma.objectif.update({ where: { id: req.params.id }, data: req.body }); res.json(updated); } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

module.exports = { listObjectifs, createObjectif, updateObjectif };
