"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLoggeer = void 0;
const requestLoggeer = (request, _response, next) => {
    console.log(`[${request.method}, ${request.path}]`);
    next();
};
exports.requestLoggeer = requestLoggeer;
