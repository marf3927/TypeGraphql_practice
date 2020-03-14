import { Length, IsEmail } from "class-validator";
import {Field, InputType} from "type-graphql";
import {IsEmailAleadyExist} from "../register/IsEmailAleadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  userName: string;

  @Field()
  @IsEmail()
  @IsEmailAleadyExist( {message : "The Email is already exist"})
  email: string;

  @Field()
  password: string;
}