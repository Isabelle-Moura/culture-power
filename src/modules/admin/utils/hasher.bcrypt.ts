import bcrypt from "bcrypt";

export class HashBcrypt {
   static async compare(value: string, hashed: string): Promise<any> {
      return bcrypt.compare(value, hashed);
   }
   static async encrypt(value: string): Promise<string> {
      return bcrypt.hash(value, 10);
   }
}
