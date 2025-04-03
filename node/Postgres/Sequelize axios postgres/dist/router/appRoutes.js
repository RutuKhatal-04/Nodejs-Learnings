"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appController_1 = require("../controllers/appController");
const router = (0, express_1.Router)();
router.post('/api/SaveWeatherMapping', appController_1.getemailData);
exports.default = router;
