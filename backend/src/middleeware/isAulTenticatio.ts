import { NextFunction, Request,Response } from "express";
import { verify } from 'jsonwebtoken'

interface Payload{
  sub: string
}

export function isAulTenticatio(
    req:Request, 
    res:Response,
    next:NextFunction
    ){
  //receber o token
  const authToken = req.headers.authorization;

  if(!authToken){

    return res.status(401).end();
  }
  
  const [, token] = authToken.split(" ")
  
  try{
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

//==recuperando o id do token e colocando dentro da variavel user_id denro do request
   req.user_id = sub
    //console.log(sub);
    return next();

  }catch{
    return res.status(401).end();
  }

  console.log(token);
}