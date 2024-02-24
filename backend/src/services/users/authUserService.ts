import prismaClient, {} from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'

interface authRequest{
    email: string;
    password: string;
}

class authUserService{
    async execute({email, password}:authRequest){

        //===VERIFICAND SE O USUARIO EXISTE==============//
    const user = await prismaClient.user.findFirst({
        where:{
           email: email 
        }
    })
    if(!user){
        throw new Error('User/password incorrect')
    }
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch){

        throw new Error('User/password incorrect')
    }
   // console.log(email);
   //==SE DE TUDO CERTOVAMOS GERAR UM TOKEN==========//
   const token = sign(
    {
    name: user.name,
    email: user.email
   },
   process.env.JWT_SECRET,
   {
    subject: user.id,
    expiresIn: '30d'
   }
   )

    return {
        name:user.name,
        id: user.id,
        email: user.email,
        token: token
    };
    }
}
export { authUserService };