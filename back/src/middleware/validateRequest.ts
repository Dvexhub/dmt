// import { AnySchema} from 'yup';
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod'

const validate =(schema: AnyZodObject)=> async(
    req: Request, res: Response, next: NextFunction
)=>{
    try {
        await schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        
        return next();
    } catch (error:any) {
        return res.status(400).send("This is validate error --"+error);
    }
}

export default validate;