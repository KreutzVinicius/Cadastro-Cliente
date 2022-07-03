import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        const createClientUseCase = new CreateClientUseCase();
        const { password,email } = request.body;

        const result = await createClientUseCase.execute({
            email,
            password
        })
        return response.json(result)
    }
}