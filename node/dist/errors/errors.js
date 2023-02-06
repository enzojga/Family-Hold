"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidDataError = exports.conflictError = exports.unauthorizedError = exports.notFoundError = void 0;
function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}
exports.notFoundError = notFoundError;
function unauthorizedError() {
    return {
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
    };
}
exports.unauthorizedError = unauthorizedError;
function conflictError(message) {
    return {
        name: "ConflictError",
        message,
    };
}
exports.conflictError = conflictError;
function invalidDataError() {
    return {
        name: "InvalidDataError",
        message: "Invalid data",
    };
}
exports.invalidDataError = invalidDataError;
