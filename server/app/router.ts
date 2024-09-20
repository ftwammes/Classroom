import { Router } from "express";
import { Courses } from "./controller/courses";
import { User } from "./controller/user";

const router: Router = Router();
const coursesController = new Courses();
const userController = new User();

// Usar bind para garantir que 'this' dentro dos métodos aponte para a instância correta
router.get("/courses", coursesController.getAll.bind(coursesController));
router.get("/courses/:id", coursesController.get.bind(coursesController));

router.post("/user/checkCredential", userController.checkCredential.bind(userController));
router.post("/user/login", userController.login.bind(userController));

export { router };