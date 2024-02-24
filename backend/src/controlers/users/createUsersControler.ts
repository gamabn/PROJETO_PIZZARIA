import {Request, response,Response} from 'express';
import {CreateUsersService} from '../../services/users/createUsersService'


class CreateUserControler{
    async handler(req: Request, res:Response){
      // console.log(req.body);

     const {name, email, password} = req.body;

      const creatService = new CreateUsersService();

     const user = await   creatService.execute({name,email,password})
   // const user = await createUsersService.execute({
       // name,
       // email,
       // password
   // });

        return res.json(user)
    }
}
export { CreateUserControler }
