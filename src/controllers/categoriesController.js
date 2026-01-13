const prisma = require('../prismaClient');

async function listCategories(req, res) {
  try {
    const categories = await prisma.category.findMany({ where: { userId: req.user.id } });
    res.json(categories);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function createCategory(req, res) {
  const { name } = req.body;
  try {
    const cat = await prisma.category.create({ data: { name, userId: req.user.id } });
    res.json(cat);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function getCategory(req, res) {
  try {
    const cat = await prisma.category.findUnique({ where: { id: req.params.id } });
    if (!cat || cat.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    res.json(cat);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function updateCategory(req, res) {
  try {
    const existing = await prisma.category.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    const updated = await prisma.category.update({ where: { id: req.params.id }, data: { name: req.body.name } });
    res.json(updated);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function deleteCategory(req, res) {
  try {
    const existing = await prisma.category.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.user.id) return res.status(404).json({ error: 'Not found' });
    await prisma.category.delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

module.exports = { listCategories, createCategory, getCategory, updateCategory, deleteCategory };
