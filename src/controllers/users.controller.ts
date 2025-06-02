import logger from '../utils/logger';
import { APIResponse } from '../utils/response';
import { Request, Response } from 'express';

const usersController = {
    getAll: (request: Request, response: Response) => {
        try {
            logger.info("[GET] Récupérer tout les utilisateurs");

            const users = [
                {id: 1, firstname: "Evan"},
                {id: 2, firstname: "Simon"},
                {id: 3, firstname: "Timothée"},
                {id: 4, firstname: "Clément"},
            ];
            
            APIResponse(response, users, 'OK' )
        } catch (error: any) {
            logger.error("Erreur lors de la récupération des utilisateurs: " + error.message);
            APIResponse(response, null, "Erreur lors de la récupération des utilisateurs", 500 );
            
        }
    }
}


export default usersController;