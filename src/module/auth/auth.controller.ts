import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";

const login = async (req: Request, res: Response, next: NextFunction) => {


    try {
        const result = await authService.login(req.body)
        return res.status(200).json({
            success: false,
            message: "Login successful",
            data: result

        })
    } catch (error: any) {
        console.log({ error });
        res.status(500).json({
            success: false,
            message: "Login failed",
            data: error.message

        })
    }
}


export const authController = {
    login
}