export class ErrorsResponse {
   static invalidCredentials(): any {
      return {
         error: true,
         message: "Invalid credentials",
         status: 400,
      };
   }

   static userNotFound(): any {
      return {
         error: true,
         message: "User not found",
         status: 404,
      };
   }

   static unauthorizedAccess(): any {
      return {
         error: true,
         message: "Unauthorized access",
         status: 401,
      };
   }

   static customError(message: string, status: number): any {
      return {
         error: true,
         message,
         status,
      };
   }
}
