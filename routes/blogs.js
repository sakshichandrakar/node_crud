const express = require('express');
const database = require('../utils/database');
const bodyParser = require('body-parser');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.use(bodyParser.json());

router.get('/getData',blogController.getData);

router.get('/postData',blogController.postData);

router.delete('/deleteData/:id',blogController.deleteData);

router.put('/updateData/:id',blogController.updateData);



module.exports = router;