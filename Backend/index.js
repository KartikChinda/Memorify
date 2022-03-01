
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// using mongoDB
const ConnURL = 'mongodb+srv://kartik11:1517sec4@cluster0.zkeb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT|| 5000;

mongoose.connect(ConnURL, { useNewUrlParser: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);