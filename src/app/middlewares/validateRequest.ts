import { AnyZodObject } from 'zod';
import {Request, Response, NextFunction} from 'express';


const validateRequest = (schema: AnyZodObject) => {
    return async (req:Request, res:Response, next: NextFunction) => {
        try{
            //validation using zod
            await schema.parseAsync({body: req.body});

            next()
        }catch(err){
            next(err)
        }
    }
    
}


export default validateRequest;