import { AdminService } from "../service/admin.services";
import { Request, Response } from "express";
import { IAdminController } from "./admin.controller.interface";

export class AdminController implements IAdminController{
   constructor(private service: AdminService) {}
}