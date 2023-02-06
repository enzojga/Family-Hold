import { ApplicationError } from "protocols";

export function notFoundError(): ApplicationError {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}

export function unauthorizedError(): ApplicationError {
    return {
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
    };
}

export function conflictError(message: string): ApplicationError {
    return {
        name: "ConflictError",
        message,
    };
}

export function invalidDataError(): ApplicationError {
    return {
      name: "InvalidDataError",
      message: "Invalid data",
    };
}
  