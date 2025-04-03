import express from 'express';
import router from './routers/index';
import './middleware/axiosIntercept';

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});