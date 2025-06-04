import { OrdersController } from "@/controllers/orders-controller";
import { Router } from "express";

const orderRoutes = Router();
const ordersController = new OrdersController();

orderRoutes.post("/", ordersController.create);

export { orderRoutes };
