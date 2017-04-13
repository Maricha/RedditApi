import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();
mongoose.connect('mongodb://localhost:27017/reddit_clone', () => {
    console.log('Connected to db.');
});

//Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;