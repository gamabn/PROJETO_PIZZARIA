import { Request, Response} from 'express'
import { ListCategoryService } from '../../services/Category/ListCategoryService'

 class ListCategoryControler{
    async handle(req:Request, res:Response){
        const ListCategory = new ListCategoryService();

        const category = await ListCategory.execute();
       // category.map((name)=>{
           // return res.json(name.name);

       // })
    return res.json(category);

       

    }
 }
  export { ListCategoryControler }