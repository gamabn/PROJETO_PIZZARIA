import {Request, Response} from 'express'
import {CreateProuctService} from '../../services/Product/CreateProuctService'

class CreateProuctControler{
    async handle(req:Request, res:Response){

        const{name, price, description, category_id } = req.body;
       
        const CreateProuct = new CreateProuctService();

        if(!req.file){
            throw new Error("error upload file")
        }else{

            const {originalname,filename:banner} = req.file;

            //console.log(originalname);

            const Product = await CreateProuct.execute({
                name, 
                 price,
                 description,
                 banner,
                 category_id
            });

           return res.json(Product)
        }



    }
}
export { CreateProuctControler}