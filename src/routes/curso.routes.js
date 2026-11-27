import cursoController from "../controller/curso.controller.js";
import { Router } from "express";

const cursoRouter = Router();

cursoRouter.post("/cursos", cursoController.createCursoController);

cursoRouter.get("/cursos", cursoController.readAllCursoController);

export default cursoRouter;