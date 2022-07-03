import { Request, Response } from "express";
import { CreateAddressUseCase } from "./createAddressUseCase";

export class CreateAddressController {
    async handle(request: Request, response: Response) {
        const createAddressUseCase = new CreateAddressUseCase();
        const { city, state,CEP, address, houseNumber, complement, clientId } = request.body;

        const result = await createAddressUseCase.execute({
            city,
            state,
            CEP,
            address,
            houseNumber,
            complement,
            clientId
        })
        return response.json(result)
    }
}