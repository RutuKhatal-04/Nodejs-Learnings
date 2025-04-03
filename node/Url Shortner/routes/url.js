const express=require('express');
const router=express.Router();
const {genereateShortURL}=require('../controllers/url');
const{getAnalytics}=require('../controllers/url');

router.post("/",genereateShortURL);

router.get("/analytics/:shortId",getAnalytics);
module.exports=router;
