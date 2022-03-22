import log from '../logger/index';
import {Request, Response} from 'express';
import { validatePassword} from '../service/user.service'
export async function createUserSessionHandler(req: Request,res: Response){
    try {
        //validate the email and password
        const user = await validatePassword(req.body);
        //create a session
        // create a access token
        //create a refresh token
        //send refresh and access token back
    } catch (error: any) {
        log.error(error)
        return res.status(409).send(error.message);
    }
}