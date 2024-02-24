import { Router} from 'express';
import multer from 'multer';
import{ CreateUserControler} from './controlers/users/createUsersControler';
import{ AuthUserController } from './controlers/users/authUserController'
import { DetailUserControle} from './controlers/users/DetailUserControle'
import { CreateCategoryControler } from './controlers/category/CreateCategoryContoler'
import{ ListCategoryControler } from './controlers/category/ListCategoryControler'
import { CreateProuctControler } from './controlers/Product/CreateProuctControler'
import { ListbyCategoryController } from './controlers/Product/ListbyCategoryController'
import { CreateOderControler } from './controlers/Order/CreateOderControler'
import { RemoveOrderControler } from './controlers/Order/RemoveOrderControler'
import{ AddItemControler}from './controlers/Order/AddItemControler'
import { RemoveItemControler } from './controlers/Order/RemoveItemControler'
import { SendOrderControer} from './controlers/Order/SendOrderControer'
import { ListOrderControler } from './controlers/Order/ListOrderControler'
import { DetailOrderControler } from './controlers/Order/DetailOrderControler'
import {finishOrderControler} from './controlers/Order/finishOrderControler'


import {isAulTenticatio } from './middleeware/isAulTenticatio'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//====Usuario =================================================//

router.post('/users', new CreateUserControler().handler)
router.post('/session', new AuthUserController().handler)
router.get('/me', isAulTenticatio, new DetailUserControle().handle)

//===Rotas Categoria ====//
router.post('/category', isAulTenticatio ,new  CreateCategoryControler().handle)
router.get('/category', isAulTenticatio, new ListCategoryControler().handle)


//==ROTAS PRODUCT============================//
router.post('/product', isAulTenticatio, upload.single('file'), new CreateProuctControler().handle)

router.get('/category/product',isAulTenticatio, new ListbyCategoryController().handle)

//===========ROTAS ORDER==========================================//

router.post('/order',isAulTenticatio, new CreateOderControler().handler)
router.delete('/order', isAulTenticatio, new RemoveOrderControler().handler)
router.post('/order/add',isAulTenticatio, new AddItemControler().handler)
router.delete('/order/remove',isAulTenticatio, new RemoveItemControler().handler)
router.put('/order/send' ,isAulTenticatio, new SendOrderControer().handler)
router.get('/order/list',isAulTenticatio, new ListOrderControler().handler)
router.get('/order/detail', isAulTenticatio, new DetailOrderControler().handler)
router.put('/order/finish', isAulTenticatio, new finishOrderControler().handler)


export {router};



