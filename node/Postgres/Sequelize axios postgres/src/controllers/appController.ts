
import { Request, Response } from "express";
import axios from 'axios';
import Weather from "../models/appModel";
import { sendWeatherEmail } from "../email";
import { Op } from "sequelize";
import sequelize from "../Database/config"; 

export const getemailData=async(req:Request,res:Response):Promise<void> =>{
    try {
        const { city, country, date, weather } = req.body;
    
        if (!city || !country || !date || !weather) {
          res.status(400).json({ error: 'Invalid data' });
          return ;
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
        sendWeatherEmail(emailContent, (error: Error | null, info: any) => {
            if (error) {
              console.error(error);
              res.status(500).json({ error: 'Failed to send email' });
            } else {
              res.status(200).json({ message: 'Email sent successfully' });
            }
          });
      
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Failed to send email' });
        }
      };