import express, { application } from 'express';
import config from 'config';
import log from './logger/index'

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.listen(port,host,()=>{
    log.info(`listening at port ${port} on ${host}:${port}`);
});