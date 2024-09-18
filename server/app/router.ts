import { Router } from "express";
import { Courses } from "./controller/courses";

const router: Router = Router();
const coursesController = new Courses();

// Usar bind para garantir que 'this' dentro dos métodos aponte para a instância correta
router.get("/courses", coursesController.getAll.bind(coursesController));
router.get("/courses/:id", coursesController.get.bind(coursesController));

export { router };