import {Request, Response} from 'express';
import * as Joi from 'joi';
// @ts-ignore
import * as jwt from 'jsonwebtoken';
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

export async function authenticate(req: Request, res: Response) {
    try {
        const validate: Joi.ValidationResult = UserValidation.authenticateUser(req.body);

        if (validate.error) {
            res.status(400).send(validate.error.message);
        }

        const user: IUserModel = await UserModel.findOne({username: {$eq: req.params.username}});

        if (user) {
            const authorized = await user.comparePassword(req.body.password);

            if (!authorized) {
                res.status(401).send();

                return;
            }

            // TODO: THIS IS OMEGA UNSECURE DO NOT USE THIS IN PRODUCTION
            const token = jwt.sign(req.body.password, 'THIS IS SUPER UNSECURE THIS IS FOR DEVELOPMENT ONLY');
            user.authToken = token;

            // TODO: need to send user info back to client with an auth token, but omit hashed password and tokens stored in mongo
            const returnUser: IUserModel = {
                username: user.username,
                // eslint-disable-next-line no-underscore-dangle
                _id: user._id,
                authToken: user.authToken,
            };

            res.status(200).send(returnUser);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
}
