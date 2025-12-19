import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config ({ path: '.env'});
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/v1/api', async (req, res) => {
  try {
    // Use 'await' to wait for the axios promise to resolve
    const response = await axios.get(process.env.weather_API);
    const data = response.data;
    
    // Send the data back as a JSON response
    res.json(data); 
  } catch (error) {
    // Handle any errors that might occur during the API call
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
