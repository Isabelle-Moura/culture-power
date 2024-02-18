import { Request, Response } from "express";
import { IAdminController } from "./admin.controller.interface";
import { StatusCode } from "../../../utils/status-code/all-status-code";
import { throwError } from "../../../utils/error/error-response";
import { IAdminService } from "../service/admin.services.interface";

export class AdminController implements IAdminController {
  constructor(private service: IAdminService) {}

  async sendJewelsToUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      if (!id) {
        throwError("Id not found.", StatusCode.NOT_FOUND);
      }

      if (!amount) {
        throwError("Please give an amount of jewels.", StatusCode.BAD_REQUEST);
      }

      const result = await this.service.sendJewelsToUser(id, amount);

      res
        .status(StatusCode.OK)
        .json({
          success: true,
          message: "Jewels sent to user successfully!",
          data: result,
        });
    } catch (error: any) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        error: true,
        message: error.message,
      });
    }
  }
}
