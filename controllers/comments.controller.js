import { Router } from 'express';

const router = Router();

export const getAllComments = (request, response) => {
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
    return response.send(comments);
}