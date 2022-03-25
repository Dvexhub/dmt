import mongoose from 'mongoose';
import config from 'config';
import log from '../logger/index'

async function connect(){
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose
        .connect(dbUri);
        return log.info("data base connected");
    } catch (error) {
        log.info("db error", error);
        process.exit(1);
    }
}

export default connect;