const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller')
const jobController = require('../controllers/job-controllerr')

router.get('/users', userController.getUsers);
router.get('/jobs', jobController.getJobs);

module.exports = router;