export interface CreateUserDto {
   name: string;
   email: string;
   password: string;
   photo: Express.Multer.File;
}
