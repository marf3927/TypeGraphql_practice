import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity{
    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    userName: string;

    @Field()
    @Column("text", {unique:true})
    email: string;

    @Column()
    password: string;
}