import { AdminService } from "../service/admin.services";

export class AdminController {
   constructor(private service: AdminService) {}

   async loginAdmin(req: Request, res: Response) {
      const { email, password } = req.body;
   }
}