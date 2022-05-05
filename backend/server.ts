import express, { Request, Response, json } from 'express';
import { connect } from 'mongoose';

const app = express();
app.use(json());

const port = 4000

app.get('/', (req: Request, res: Response) => res.send('Hello world!'));

connect('mongodb://localhost:27017/awesomehr').then(() => {
    app.listen(port, () => console.log('listing'));
})