import {Request,Response} from 'express'
import { SendOrderService } from '../../services/Orders/SendOrderService'

class SendOrderControer{
    async handler(req:Request, res:Response){

 const{order_id} = req.body;

 const SendOrder = new SendOrderService();

 const order = await SendOrder.execute({
    order_id
 });
   return res.json(order);


    }
}
export { SendOrderControer}



