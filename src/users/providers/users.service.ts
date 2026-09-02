import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-usersParam.dto";


@Injectable()
export class UsersService{

 public findAll(getUsersParamDto: GetUsersParamDto,
  limit: number,
  page:number
 ){

  return [
   {
    firstName:"John",
    email:"john@gmail.com"
   },
   {
    firstName:"Alice",
    email:"Alice@gmail.com"
   }
  ]
 }
}