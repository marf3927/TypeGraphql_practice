import {Arg, Mutation, Query, Resolver} from "type-graphql";
import * as bcrypt from 'bcryptjs';
import {User} from "../../entity/User";
import {RegisterInput} from "../user/register/RegisterInput";

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello() {
        return 'Hello World'
    }
    @Mutation(() => User)
    async register(
        @Arg('data') {email, userName,password} : RegisterInput,
    ): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            userName,
            email,
            password: hashedPassword
        }).save();

        return user
    }
}
