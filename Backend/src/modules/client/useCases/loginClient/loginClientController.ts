import { Request, Response } from "express";
import { LoginClientUseCase } from "./loginClientUseCase";

export class LoginClientController {
    async handle(request: Request, response: Response) {
        const loginClientUseCase = new LoginClientUseCase();
        const { password,email } = request.body;

        const result = await loginClientUseCase.execute({
            email,
            password
        })
        return response.json(result)
    }
}