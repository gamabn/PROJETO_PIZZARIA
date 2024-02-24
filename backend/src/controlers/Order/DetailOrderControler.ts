import {Request,Response} from 'express'
import {DetailOrderService} from '../../services/Orders/DetailOrderService'

class DetailOrderControler{
    async handler(req:Request, res:Response){
        const order_id = req.query.order_id as string

       const DetailService =  new DetailOrderService()
       const order = await DetailService.execute({
        order_id
       })
       return res.json(order);
    }
}
export {DetailOrderControler}
