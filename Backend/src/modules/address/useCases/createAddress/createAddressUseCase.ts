import { prisma } from "../../../../database/prismaClient";

interface ICreateAddress {
    city: string,
    state: string,
    CEP: string,
    address: string,
    houseNumber: number,
    complement: string,
    clientId: number
}

export class CreateAddressUseCase {
    async execute({ city, state,CEP, address, houseNumber, complement, clientId }: ICreateAddress) {


        const addrss = await prisma.address.create({
            data: {
                city,
                state,
                CEP,
                address,
                houseNumber,
                complement,
                clientId
            },
        });

    }
}