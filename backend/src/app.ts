import express, { Request } from 'express';
import routes from './routers';
import morgan from 'morgan';
import uuid from 'node-uuid';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';

const app = express();


app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build' , 'index.html'))
})

app.use(cors());
app.use(morgan(':date[iso] :method :url :status :response-time'));
app.use(express.json());


app.use("/api", routes);
export default app;