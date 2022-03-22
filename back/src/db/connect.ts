import mongoose from 'mongoose';
import config from 'config';
import log from '../logger/index'

function connect(){
    const dbUri = config.get('dbUri') as string;

    return mongoose
    .connect(dbUri)
    .then(()=>{
        log.info("Database Connected");
    })
    .catch((err)=>{
        log.info("db error", err);
        process.exit(1);
    });
}

export default connect;