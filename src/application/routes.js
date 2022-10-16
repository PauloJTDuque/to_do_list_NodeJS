import Router from "express";

import usersRouters from "../routes/UsersRoutes.js";

const routes = Router();

routes.use(usersRouters);

export default routes;