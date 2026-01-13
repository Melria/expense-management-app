const express = require('express');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/projectsController');

const router = express.Router();
router.use(auth);

router.get('/', ctrl.listProjects);
router.post('/', ctrl.createProject);
router.get('/:id', ctrl.getProject);
router.post('/:id/participants', ctrl.addParticipant);
router.post('/:id/repartitions', ctrl.addRepartition);

module.exports = router;
