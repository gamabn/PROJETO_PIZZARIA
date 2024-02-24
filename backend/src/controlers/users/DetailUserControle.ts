import {Request, Response} from 'express'
import { DetailUserService } from  '../../services/users/DetailUserService'

class DetailUserControle{
    async handle(req:Request, res:Response){

        const user_id = req.user_id
      
        const DetailrService = new DetailUserService();

        const user = await DetailrService.execute(user_id);
        
        res.json(user);
    }

}
export { DetailUserControle }

