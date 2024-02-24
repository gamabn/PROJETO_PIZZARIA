import {Request,Response} from "express"
import {ListbyCategoryServer} from '../../services/Product/ListbyCategoryServer'

class ListbyCategoryController{
    async handle(req:Request, res: Response){

        const category_id = req.query.category_id as string;

        const listbyCategory = new ListbyCategoryServer();

        const product = await listbyCategory.execute({
            category_id
        })
        return res.json(product);


    }
}
export {ListbyCategoryController}