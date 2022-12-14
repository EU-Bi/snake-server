const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',userController.check)
router.post('/game',userController.create)
router.get('/rating',userController.getAll)

module.exports = router