import { Router } from "express";
import SondaController from "../Controllers/SondaController.js"

const sondaController = new SondaController();
const routes = Router();

routes.post("/", sondaController.ingresarSonda);
routes.get("/", sondaController.listarSondas);
routes.get("/:id", sondaController.listarSondaId);


export default routes;