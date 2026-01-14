const prisma = require('../prismaClient');

async function listProjects(req, res) {
  try {
    const projects = await prisma.projetCollectif.findMany({ where: { OR: [{ ownerId: req.user.id }, { participants: { some: { userId: req.user.id } } }] } });
    res.json(projects);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function createProject(req, res) {
  const { name, description } = req.body;
  try {
    const p = await prisma.projetCollectif.create({ data: { name, description, ownerId: req.user.id } });
    res.json(p);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function getProject(req, res) {
  try {
    const p = await prisma.projetCollectif.findUnique({ where: { id: req.params.id }, include: { participants: true, repartitions: true, incomes: true } });
    if (!p) return res.status(404).json({ error: 'Not found' });
    res.json(p);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function addParticipant(req, res) {
  const { userId, role } = req.body;
  try {
    const part = await prisma.participantprojet.create({ data: { userId, projectId: req.params.id, role } });
    res.json(part);
  } catch (err) { res.status(500).json({ error: 'Server error' }); }
}

async function addRepartition(req, res) {
  const { userId, amount, entreeArgentId, objectifId, categoryId } = req.body;
  if (!entreeArgentId) return res.status(400).json({ error: 'entreeArgentId required' });
  try {
    const data = {
      projectId: req.params.id,
      userId,
      amount: parseFloat(amount),
      entreeArgentId,
    };
    if (objectifId) data.objectifId = objectifId;
    if (categoryId) data.categoryId = categoryId;
    const r = await prisma.repartition.create({ data });
    res.json(r);
  } catch (err) { console.error('addRepartition error:', err); res.status(500).json({ error: 'Server error', detail: err.message }); }

}

module.exports = { listProjects, createProject, getProject, addParticipant, addRepartition };
