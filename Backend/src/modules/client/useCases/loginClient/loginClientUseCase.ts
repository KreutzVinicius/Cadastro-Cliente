import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ILoginClient {
    password: string;
    email: string;
}

export class LoginClientUseCase {
    async execute({ password ,email}: ILoginClient) {

        const client = await prisma.client.findUnique({
            where: {
                email: email,
            },
            select:{
                email: true,
                password: true,
                id: true
            }
        });

        if (client){
            const hashPassword = await hash(password, 10);
            if (client.password = hashPassword){
                return client
            }else {
            throw new Error ("Email or Password Invalid!")
            }
        }
        else{
            throw new Error ("Email or Password Invalid!")
        }

    }
}