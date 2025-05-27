import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";

class ProductController {
    async index(request: Request, response: Response, next: NextFunction): Promise<any> {
        try {
            return response.json({ message: "OK" });
        } catch (error) {
            next(error);
        }
    }
}

export { ProductController };
