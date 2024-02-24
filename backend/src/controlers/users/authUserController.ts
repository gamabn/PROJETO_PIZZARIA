 import {Request, Response} from 'express'
 import {authUserService} from '../../services/users/authUserService'

 class AuthUserController{
    async handler(req: Request, res: Response){
   const {email, password} = req.body;

   const authUserSer = new authUserService();

   const auth = await authUserSer.execute({
    email,
    password
   })
   return res.json(auth)
    }

 }
 export {AuthUserController}