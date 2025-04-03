"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getemailData = void 0;
const email_1 = require("../email");
const getemailData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city, country, date, weather } = req.body;
        if (!city || !country || !date || !weather) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        const emailContent = `
          <html>
          <body>
              <table border="1">
                  <tr>
                      <th>City</th>
                      <th>Country</th>
                      <th>Date</th>
                      <th>Weather</th>
                  </tr>
                  <tr>
                      <td>${city}</td>
                      <td>${country}</td>
                      <td>${date}</td>
                      <td>${weather}</td>
                  </tr>
              </table>
          </body>
          </html>
        `;
        (0, email_1.sendWeatherEmail)(emailContent, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Failed to send email' });
            }
            else {
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});
exports.getemailData = getemailData;
