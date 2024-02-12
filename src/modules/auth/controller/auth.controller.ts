import { Request, Response } from "express";
import { IAuthController } from "./auth.controller.interface";
import { authBodyValidator } from "../utils/auth-body.validator";
import { IAuthService } from "../service/auth.services.interface";
import { ErrorsResponse } from "../../../utils/error/error.response";
import { StatusCode } from "../../../utils/status-code/all-status-code";

export class AuthController implements IAuthController {
   constructor(private service: IAuthService) {}

   async userLogin(req: Request, res: Response): Promise<void> {
      try {
         const { body } = req;

         const result = await this.service.userLogin(body);

         if (!result) {
            await ErrorsResponse.error("Invalid credentials.", StatusCode.BAD_REQUEST);
         }

         await authBodyValidator(body);
         res.status(StatusCode.OK).json({ success: true, message: "User's login was made successfully!", data: result });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
            error: error.message,
         });
      }
   }

   async adminLogin(req: Request, res: Response): Promise<void> {
      try {
         const { body } = req;

         const result = await this.service.adminLogin(body);

         if (!result) {
            await ErrorsResponse.error("Invalid credentials.", StatusCode.BAD_REQUEST);
         }

         await authBodyValidator(body);
         res.status(StatusCode.OK).json({ success: true, message: "Admin's login was made successfully!", data: result });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
            error: error.message,
         });
      }
   }
}
