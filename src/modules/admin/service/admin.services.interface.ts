import { IUser } from "../../user/model/user.model.interface";

export interface IAdminService {
    sendJewelsToUser(userId: string): Promise<IUser | string>
}