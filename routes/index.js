const express = require('express');
const router = express.Router();
const indexCtrl = require('../app/controllers/indexController');
const registerController = require('../app/controllers/cadastroController');
const homeCtrl = require('../app/controllers/homeController');

router.get('/', indexCtrl.indexHomepage);
// router.post('/cadastro', registerController.getRegisterpage);
router.get('/cadastro', registerController.getRegisterpage);
router.get('/home', homeCtrl.getHomepage);

module.exports = router;