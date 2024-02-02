import { IAdminRepository } from "./admin.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { Model } from "mongoose";
import { ErrorsResponse } from "../../../utils/errors/errors.response";
import { IUser } from "../../user/model/user.model.interface";

export class AdminRepository implements IAdminRepository {
   constructor(private model: Model<IAdmin>, private userModel: Model<IUser>) {}

   async findAdminEmail(email: string): Promise<IAdmin> {
      const adminEmail = await this.model.findOne({ email });
   
      if (!adminEmail) {
         return await ErrorsResponse.notFound();
      }
   
      return adminEmail;
   }

   async sendJewelsToUser(userId: string) {
      const user = await this.userModel.findById(userId);
   
      if (!user) {
         return await ErrorsResponse.notFound();
      }
   
      // Verificar se o usuário já possui um valor em jewelsAmount
      if (user.jewelsAmount && user.jewelsAmount.length > 0) {
         // Se existir, incrementar o primeiro valor no array
         await this.userModel.updateOne({ _id: userId }, { $inc: { "jewelsAmount.0": 1 } });
      } else {
         // Se não existir, adicionar o valor inicial
         await this.userModel.updateOne({ _id: userId }, { $push: { jewelsAmount: 1 } });
      }
   
      // Retornar o usuário atualizado
      const updatedUser = await this.userModel.findById(userId);
      return updatedUser;
   }
   
}
