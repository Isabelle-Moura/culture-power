import { LoginDTO } from "../dto/auth.dto";

export interface IAuthService {
   userLogin(data: LoginDTO): Promise<any>;
   adminLogin(data: LoginDTO): Promise<any>;
}