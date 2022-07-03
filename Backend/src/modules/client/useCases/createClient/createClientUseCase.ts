import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    password: string;
    email: string;
}

export class CreateClientUseCase {
    async execute({ password ,email}: ICreateClient) {

        const hashPassword = await hash(password, 10);

        const client = await prisma.client.create({
            data: {
                email,
                password: hashPassword,

            },
        });

        return client

    }
}