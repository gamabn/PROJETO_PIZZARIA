import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){


//===BUSCA NO BANDO DE DADOS O USUARIO COM O PRIMEIRO ID====//
      const user = await prismaClient.user.findFirst({
        where:{  

          id:user_id
          
        },select:{  //==select devolve apenas a informaçoes em true======//
          name: true,
          id: true,
          email: true
        }

      })
      return user
    }
}
 export { DetailUserService }