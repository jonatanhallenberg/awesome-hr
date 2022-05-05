import express, { Request, Response, json } from 'express';
import { connect } from 'mongoose';
import departmentRouter from './routes/departmentRouter';
import employeeRouter from './routes/employeeRouter';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(departmentRouter);
app.use(employeeRouter);

const port = 4000

app.get('/', (req, res) => res.send('Hello world!'));

connect('mongodb://localhost:27017/awesomehr').then(() => {
    app.listen(port, () => console.log('listing'));
})