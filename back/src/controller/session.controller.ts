import log from '../logger/index';
import {Request, Response} from 'express';
import { validatePassword} from '../service/user.service'
import { createSession, createAccessToken } from '../service/session.service';
import config from 'config';
import {sign} from '../utils/jwt.utils'

export async function createUserSessionHandler(req: Request,res: Response){
    try {
        //validate the email and password
        const user = await validatePassword(req.body);
        if(!user){
            return res.status(401).send({error: 'Invalid credentials'})
        }   
        //create a session
        const session = await createSession(user._id, req.get("user-agent") || "");
        // create a access token
        const accessToken = createAccessToken({
            user,
            session,
        });
        //create a refresh token
        const refreshToken = sign(session,{
            expiresIn: config.get("refreshTokenTtl"), // 1 year
        })
        //send refresh and access token back
        return res.send({MyAccessToken: accessToken,MyRefreshToken:refreshToken});
    } catch (error: any) {
        log.error(error)
        return res.status(409).send("This is sesion controller --"+error);
    }
}