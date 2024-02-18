import { Request, Response } from "express";
import { IUserController } from "./user.controller.interface";
import { IUserService } from "../service/user.services.interface";
import { userBodyValidator } from "../utils/user-body.validator";
import { JwtToken } from "../../../utils/jwt/jwt";
import { env } from "../../../utils/dotenv/dotenv";
import { StatusCode } from "../../../utils/status-code/all-status-code";

export class UserController implements IUserController {
  constructor(private service: IUserService) {}

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const { file } = req.body;

      if (!file) {
        res.status(StatusCode.BAD_REQUEST).json({
          error: true,
          message: "Please select a photo.",
        });
      }

      const bodyValidation = {
        name: body.name,
        email: body.email,
        password: body.password,
        photo: file?.originalname,
      };

      await userBodyValidator(bodyValidation);
      const user = await this.service.createUser(
        body,
        file?.filename as string
      );

      const imageUrl = `${env.BASE_URL}/uploads/${file?.filename}`;

      res.status(StatusCode.CREATED).json({
        success: true,
        message: "User was created successfully!",
        data: {
          user,
          imageUrl,
        },
      });
    } catch (error: any) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        error: true,
        message: error.message,
      });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.service.getAll();

      if (!users) {
        res
          .status(StatusCode.NOT_FOUND)
          .json({ error: true, message: "No user was found." });
      }

      res
        .status(StatusCode.OK)
        .json({ success: true, message: "Users found!", users });
    } catch (error: any) {
      res
        .status(StatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: true, message: error.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { authorization } = req.headers;

      const [, token] = authorization?.split(" ") || [];

      const decodeToken: any = await JwtToken.decodeToken(token);

      const userId = decodeToken?.id;

      const user = await this.service.getUserById(userId);

      res
        .status(StatusCode.OK)
        .json({ success: true, message: "User found!", userData: user });
    } catch (error: any) {
      res
        .status(StatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: true, message: error.message });
    }
  }
}
