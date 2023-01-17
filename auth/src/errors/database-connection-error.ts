import { CustomeError } from "./custome-error";

export class DatabaseConnectionError extends CustomeError {
  reason = "Error connecting to database";
  statusCode = 500;
  constructor() {
    super("Problem conecting to DB");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
