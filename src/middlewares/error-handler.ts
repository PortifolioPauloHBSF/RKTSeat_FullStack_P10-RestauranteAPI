import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "@/utils/AppError";

export function errorHandler(error: any, request: Request, response: Response, _: NextFunction): any {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    return response.status(500).json({ message: error.message });
}
