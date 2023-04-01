import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const port = process.env.PORT;
const url = process.env.MONGO_URL;

const app = express();
app.set('json spaces', 2);
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV  !== 'test') {
    try {
        mongoose.connect(url);
        console.log('Connected to MONGO DB');
    } catch (error) {
        console.log('Not connected', error)
    }
    app.get('/', async (req, res) => {
        res.send('<h1>Hello World! Whats new?</h1>')
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}



export default app;
