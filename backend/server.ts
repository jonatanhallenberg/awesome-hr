import express, { Request, Response, json } from 'express';

const app = express();
app.use(json());

const port = 4000

app.get('/', (req: Request, res: Response) => res.send('Hello world!'));

app.listen(port, () => console.log('listing'));