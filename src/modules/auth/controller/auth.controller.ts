import { AuthService } from "../service/auth.services";
import { Request, Response } from "express";
import { IAuthController } from "./auth.controller.interface";
import { authBodyValidator } from "../utils/auth-body.validator";
import { ErrorsResponse } from "../../../utils/errors/errors.response";

export class AuthController implements IAuthController {
  constructor(private service: AuthService) {}

  async userLogin(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;

      const result = await this.service.userLogin(body);

      if (!result) {
        await ErrorsResponse.invalidCredentials();
      }

      await authBodyValidator(body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({
        error: true,
        message: error.message,
        status: 500,
      });
    }
  }

  async adminLogin(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;

      const result = await this.service.adminLogin(body);

      if (!result) {
        await ErrorsResponse.invalidCredentials();
      }

      await authBodyValidator(body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({
        error: true,
        message: error.message,
        status: 500,
      });
    }
  }
}