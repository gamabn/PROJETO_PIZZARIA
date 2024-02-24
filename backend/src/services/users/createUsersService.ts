import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UsersRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUsersService{
  
   // async execute({name, email, password}:UsersRequest){
        async execute({name,email,password}:UsersRequest){ 

      if(!email){
         throw new Error("Email incorreto");
      }
      const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
          email: email
        }
      })
       if(userAlreadyExists){
        throw new Error("User alread exists")
       }

       const passwordHash = await hash(password, 8)

       const user = await prismaClient.user.create({
        data:{
          name: name,
          email: email,
          password: passwordHash,

        },select:{
          id: true,
          email: true,
          name: true,
        
        }
       })
        
        return {user}
    }
}
export { CreateUsersService }