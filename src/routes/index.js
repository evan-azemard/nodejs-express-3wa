"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_routes_1 = __importDefault(require("./posts.routes"));
const comments_routes_1 = __importDefault(require("./comments.routes"));
const router = (0, express_1.Router)();
// http://localhost:3000/posts
router.use('/posts', posts_routes_1.default);
// http://localhost:3000/users
// http://localhost:3000/comments
router.use('/comments', comments_routes_1.default);
exports.default = router;
// SERVER - > ROUTER (ce fichier) -> ROUTES (/users, /posts,...) -> CONTROLLER -> MODELS
