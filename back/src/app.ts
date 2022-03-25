import express, { application } from 'express';
import config from 'config';
import log from './logger/index';
import connect from './db/connect';
import routes from './routes'

const port = config.get<number>('port');
const host = config.get('host') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.listen(port,host, async()=>{
    log.info(`listening at port ${port} on ${host}:${port}`);
    await connect();
    routes(app);
});