import { Request, Response } from "express";
import { APIResponse } from "../utils/response";
import logger from "../utils/logger";

const postsController = {
    getAll: (request: Request, response: Response) => {
        try {
            logger.info("[GET] Récupérer tout les posts");

            const posts = [
                { id: 1, title: 'Post 1', content: 'Content of post 1' },
                { id: 2, title: 'Post 2', content: 'Content of post 2' },
            ];

            APIResponse(response, posts, "OK");
        } catch (error: any) {
            logger.error("Erreur lors de la récupération des posts: " + error.message);
            APIResponse(response, null, "Erreur lors de la récupération des posts", 500);

        }

    }
}

export default postsController;