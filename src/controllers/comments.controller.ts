import logger from '../utils/logger';
import { APIResponse } from './../utils/response';
import { Request, Response } from 'express';

const commentsController = {
    getAll: (request: Request, response: Response) => {
        try {
            logger.info("[GET] Récupérer tout les commentaires")
           
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
            ]
            
            APIResponse(response, comments, "OK");

        } catch (error: any) {
            logger.error("Erreur lors de la récupération des commentaires: " + error.message);
            APIResponse(response, null, "Erreur lors de la récupération des commentaires", 500);

        }

    }
}

export default commentsController;