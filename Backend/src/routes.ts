import { Router } from "express";
import { CreateClientController } from "./modules/client/useCases/createClient/createClientController";
import { CreateAddressController } from "./modules/address/useCases/createAddress/createAddressController";
import { CreatePersonalController } from "./modules/personal/useCases/createPersonal/createPersonalController";
import { LoginClientController } from "./modules/client/useCases/loginClient/loginClientController";


const routes = Router();

const createClientController = new CreateClientController();
const createAddressController = new CreateAddressController();
const createPersonalController = new CreatePersonalController();

const loginClientController  = new LoginClientController();

routes.post("/client", createClientController.handle);
routes.post("/address", createAddressController.handle);
routes.post("/personal", createPersonalController.handle);

routes.post("/login", loginClientController.handle);

export { routes };