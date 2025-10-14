import { NextFunction, Request, Response } from "express";
import { stateService } from "./stat.service";

const getStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await stateService.getState()

        res.status(500).json({
            success: false,
            message: "Failed to create Project",
            date: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create Project",
            error: error.message,
        });
    }
}
export const statController = {
    getStat
}