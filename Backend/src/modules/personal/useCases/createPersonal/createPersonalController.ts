import { Request, Response } from "express";
import { CreatePersonalUseCase } from "./createPersonalUseCase";

export class CreatePersonalController {
    async handle(request: Request, response: Response) {
        const createPersonalUseCase = new CreatePersonalUseCase();
        const {  name, lastName,CPF,promotions,news,clientId} = request.body;

        const result = await createPersonalUseCase.execute({
            name,
            lastName,
            CPF,
            promotions,
            news,
            clientId
        })
        return response.json(result)
    }
}