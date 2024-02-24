import prismaClient from "../../prisma"; 
 

    interface finishRequest{
   order_id: string;
 
  }

  class finishOrderService{
    async execute({order_id}:finishRequest){  

        const order = await prismaClient.order.update({
     where:{
        id: order_id
     }, 
     data:{
        status: true,
         }
      })
      return order;
    }
}
    
  export {finishOrderService}