import { Request, Response } from "express" 
import { CreateCategoryService } from "../../services/Category/CreateCategoryService"

class CreateCategoryControler{
    async handle(req:Request, res:Response){
        const { name } = req.body

        const CategoryService = new CreateCategoryService();

        const category = await CategoryService.execute({
            name: name
        })

        return res.json(category);
    }

}
export { CreateCategoryControler }