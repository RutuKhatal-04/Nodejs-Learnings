import {Router,Request,Response} from 'express';
import{getemailData} from "../controllers/appController"

import { sendWeatherEmail } from '../email';
const router=Router();

router.post('/api/SaveWeatherMapping', getemailData);
export default router;