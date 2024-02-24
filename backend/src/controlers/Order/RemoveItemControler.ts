import {Request,Response} from 'express'
import {RemoveItemService} from '../../services/Orders/RemoveItemService'


 class RemoveItemControler{

    async handler(req:Request, res: Response){

        const item_id = req.query.item_id as string;

        const  RemoveItem = new  RemoveItemService();

        const order = await RemoveItem.execute({
           item_id 
        })
      return res.json(order)
    }
 }
 export {RemoveItemControler}