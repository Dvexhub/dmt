import {Express, Request, Response} from 'express';
import {createUserHandler} from './controller/user.controller';
import {createUserSessionHandler} from './controller/session.controller';
import validateRequest from './middleware/validateRequest';
import {createUserSchema} from './schemas/user.schema';
import {createUserSessionSchema} from './schemas/session.schema';

export default function(app: Express){
    app.get('/healthcheck',(req : Request,res : Response) =>{
        res.status(200).json({message:"server is running"});
    })

    app.post('/api/users',validateRequest(createUserSchema),createUserHandler);
    app.post('/api/sessions',validateRequest(createUserSessionSchema),createUserSessionHandler);
}