import {Request, Response} from 'express'
import {CreateOrderService } from '../../services/Orders/CreateOrderService'

class CreateOderControler{
    async handler(req:Request, res:Response){
        const {table,name}  = req.body;

        const CreateOrder = new CreateOrderService();
        const order = await CreateOrder.execute({
            table,
            name,
        });
        return res.json(order);
    }
}

export {CreateOderControler}