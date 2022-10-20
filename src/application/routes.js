import Router from "express";

import usersRouters from "../routes/UsersRoutes.js";
import todosRoutes from "../routes/TodosRoutes.js";

const routes = Router();

routes.use(usersRouters);
routes.use(todosRoutes);

export default routes;