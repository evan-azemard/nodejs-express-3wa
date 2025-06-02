"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = void 0;
const response_1 = require("../utils/response");
const getAllPosts = (request, response) => {
    const posts = [
        { id: 1, title: 'Post 1', content: 'Content of post 1' },
        { id: 2, title: 'Post 2', content: 'Content of post 2' },
        { id: 3, title: 'Post 3', content: 'Content of post 3' }
    ];
    return (0, response_1.APIResponse)(response, posts, "ok ça marche");
};
exports.getAllPosts = getAllPosts;
