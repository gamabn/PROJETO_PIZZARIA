import {Request,Response} from "express"

import {ListOrderService } from '../../services/Orders/ListOrderService'

class ListOrderControler{
    async handler(req:Request, res:Response){

        const ListOrder = new ListOrderService();

        const order = await ListOrder.execute();

        return res.json(order)
    }
  
}
export {ListOrderControler}
