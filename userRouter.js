const router= require ('express').Router()
const userController =require("./userController")
// const auth = require("../middleware/auth")


router.post('/assign', userController.assign)
router.put('/assign/:id',userController.updateController)
router.get('/assign',userController.showAll)
// router.post('/login',userControl.login)
// router.get('/logout',userControl.logout)
// router.get('/refresh_token',userControl.refreshToken)
// router.get('/info',auth, userControl.getUser)
// router.patch('/addcart',auth, userControl.addCart)
// router.get('/history',auth, userControl.history)
    
module.exports = router