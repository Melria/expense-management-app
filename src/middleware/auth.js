const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');

module.exports = async function (req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Not authorized' });
  const token = auth.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Not authorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) return res.status(401).json({ error: 'Not authorized' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
