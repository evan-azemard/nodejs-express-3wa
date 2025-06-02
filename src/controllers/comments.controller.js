"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComments = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const getAllComments = (request, response) => {
    const comments = [
        {
            id: 1,
            name: 'evan',
            comment: 'comment 1'
        },
        {
            id: 2,
            name: 'Simon',
            comment: 'comment 2'
        }
    ];
    return response.send(comments);
};
exports.getAllComments = getAllComments;
