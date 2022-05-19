import express, { Request, Response, json } from 'express';
import { connect } from 'mongoose';
import departmentRouter from './routes/departmentRouter';
import employeeRouter from './routes/employeeRouter';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(departmentRouter);
app.use(employeeRouter);

const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('Hello world!'));

if (process.env.MONGO_DB_CONNECTION_STRING) {
    connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => console.log('listening to port: ' + port));
    })
} else {
    console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
}