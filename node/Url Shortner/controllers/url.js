const {nanoid}=require('nanoid');
const URL = require('../models/url');

async function genereateShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'});
    const shortId=nanoid(8);
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[],
    });


    return res.json({id:shortId});

}
async function getAnalytics(req,res){
    const shortId=req.params.shortId;
    const reuslt = await URL.findOne({shortId});
    return res.json({totalClicks:reuslt.visitHistory.length,
        analytics:reuslt.visitHistory
    })


}

module.exports={genereateShortURL,getAnalytics};