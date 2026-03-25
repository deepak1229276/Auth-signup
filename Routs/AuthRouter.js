const {signup,login}=require('../Controllers/AuthController');
const {SignupValidation,LoginValidation}=require('../Middleware/AuthValidation')


const router= require('express').Router();



router.post('/login',LoginValidation,login);
router.post('/signup',SignupValidation,signup);;

module.exports=router;