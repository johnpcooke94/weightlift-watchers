import {Request, Response} from 'express';
import * as Joi from 'joi';
import UserValidation from './validation';
import UserModel, {IUserModel} from './model';

export async function findAll(req: Request, res: Response) {

}

export async function findOne(req: Request, res:Response) {

}

export async function create(req: Request, res: Response) {
    try {
        const validate: Joi.ValidationResult = UserValidation.createUser(req.body);

        if (validate.error) {
            res.status(400).send(validate.error.message);

            return;
        }

        const user: IUserModel = await UserModel.create(req.body);

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send();
    }
}

export async function findMany(req: Request, res: Response) {

}

export async function remove(req: Request, res: Response) {

}

export async function update(req: Request, res: Response) {

}

export async function authorize(req: Request, res: Response) {

}
