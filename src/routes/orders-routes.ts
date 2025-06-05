import { OrdersController } from "@/controllers/orders-controller";
import { Router } from "express";

const orderRoutes = Router();
const ordersController = new OrdersController();

orderRoutes.post("/", ordersController.create);
orderRoutes.get("/table-session/:table_session_id", ordersController.index);

export { orderRoutes };
