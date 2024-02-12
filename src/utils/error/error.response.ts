export class ErrorsResponse {
   static async error(message: string, status: number) {
      return {
         error: true,
         message,
         status,
      };
   }
}
