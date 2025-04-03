const express=require('express');
const router = express.Router();
const {userSignup}=require('../controllers/userAuth');

router.post("/",userSignup);
module.exports=router;