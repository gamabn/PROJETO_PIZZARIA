import {Request, Response} from 'express'
import { AddItemService } from '../../services/Orders/AddItemService'

class AddItemControler{
    async handler(req:Request, res:Response){

        const { order_id, product_id,amount} = req.body;

        const addItem = new AddItemService();

       const order = await addItem.execute({
        amount,
        order_id,
        product_id
       })
    return res.json(order)
    }

}
export{ AddItemControler}
