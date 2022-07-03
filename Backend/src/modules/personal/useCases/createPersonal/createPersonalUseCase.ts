import { prisma } from "../../../../database/prismaClient";

interface ICreatePersonal {
    name: string;
    lastName: string;
    CPF: string;
    promotions: boolean;
    news: boolean;
    clientId: number;
}

export class CreatePersonalUseCase {
    async execute({ name, lastName,CPF,promotions,news,clientId}: ICreatePersonal) {


        const client = await prisma.personal.create({
            data: {
                name,
                lastName,
                CPF,
                promotions,
                news,
                clientId
            },
        });

    }
}