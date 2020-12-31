const express = require ("express");

var router = express.Router();
const workersController = require ('./workers.controller');

router.get('/find', workersController.getWorkers);
router.get('/:id', workersController.getWorker);
router.post('/', workersController.createWorker);
router.put('/:id', workersController.updateWorker);
router.delete('/:id', workersController.deleteWorker);

module.exports = router;


