import { StatusCode } from "../status-code/all-status-code";

class ErrorsResponse {
   static error(message: string, status: number) {
      return {
         error: true,
         message,
         status,
      };
   }
}

export function throwError(message: string, status: StatusCode): never {
   throw ErrorsResponse.error(message, status);
}
