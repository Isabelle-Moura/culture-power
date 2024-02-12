export class ErrorsResponse {
   static error(message: string, status: number) {
      return {
         error: true,
         message,
         status,
      };
   }
}
