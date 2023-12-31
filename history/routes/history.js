const router = require('express').Router()
const historyController = require('../controllers/historyController')

router.get('/', historyController.get)

router.post('/', historyController.create)

module.exports = router