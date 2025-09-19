import { NextFunction, Request, Response } from 'express';
import { userService } from '../services';

export const userController = {
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const user = await userService.getUserById(id);

            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }

            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userData = req.body;
            const newUser = await userService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
};