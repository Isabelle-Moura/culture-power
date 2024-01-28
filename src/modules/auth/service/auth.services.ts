import { compare } from "bcrypt";
import { env } from "../../../config/dotenv";
import { UserRepository } from "../../user/repository/user.repository";
import { LoginDTO } from "../dto/auth.dto";
import jwt from "jsonwebtoken";

export class AuthService {
   constructor(private userRepository: UserRepository) {}

   async login(data: LoginDTO) {
      // Validate if this user's email exists in db.
      const user = await this.userRepository.findByEmail(data.email);
      console.log(user);

      if (!user) {
         return {
            error: true,
            message: "Invalid credentials",
            status: 400,
         };
      }

      // Validate password
      const password = data.password ?? "";
      const passwordIsValid = await compare(password, user.password);
      if (!passwordIsValid) {
         return {
            error: true,
            message: "Invalid credentials",
            status: 400,
         };
      }

      const payload = { id: user._id, email: user.email };
      const secretKey = env.JWT_SECRET_KEY;
      const options = { expiresIn: "1h" };

      const token = jwt.sign(payload, secretKey, options);

      return { token, user };
   }
}
