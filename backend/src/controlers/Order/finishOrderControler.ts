import {Request, Response} from 'express'
import {finishOrderService} from '../../services/Orders/finishOrderService'

class finishOrderControler{
    async handler(req:Request, res:Response){
        const {order_id } = req.body;

        const finishOrder = new finishOrderService();

        const order = await finishOrder.execute({
            order_id
        })
        return res.json(order)
         
    }
}
export {finishOrderControler}
