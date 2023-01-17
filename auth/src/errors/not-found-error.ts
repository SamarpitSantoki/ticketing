import { CustomeError } from "./custome-error";

export class NotFoundError extends CustomeError {
  statusCode = 404;
  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Not Found" }];
  }
}
