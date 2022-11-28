import {Request, Response} from 'express';
import * as Joi from 'joi';
// @ts-ignore
import * as jwt from 'jsonwebtoken';
import UserValidation from './validation';
import UserModel, {IUserModel} from './model';
import config from '../../config/env/index';

async function checkToken(token: string, user: IUserModel): Promise<boolean> {
    try {
        const decodedToken = jwt.verify(token, config.secret);

        const authorized = await user.comparePassword(decodedToken);

        return authorized;
    } catch (error) {
        // This indicates an error with verifying the token - i.e. an invalid token
        return false;
    }
}

export async function findOne(req: Request, res:Response) {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) {
            res.status(401).send({message: 'You must include an authorization token to retrieve user details'});

            return;
        }

        const user = await UserModel.findOne({username: {$eq: req.params.username}});

        const authorized = await checkToken(authToken, user);

        if (!authorized) {
            res.status(401).send();

            return;
        }

        const responseUser = {
            username: user.username,
            exercises: user.exercises,
        };

        res.status(200).send(responseUser);
    } catch (error) {
        res.status(500).send();
    }
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

export async function remove(req: Request, res: Response) {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) {
            res.status(401).send({message: 'You must include an authorization token to retrieve user details'});

            return;
        }

        const user = await UserModel.findOne({username: {$eq: req.params.username}});

        const authorized = await checkToken(authToken, user);

        if (!authorized) {
            res.status(401).send();

            return;
        }

        const deleteRes = await UserModel.deleteOne({username: {$eq: req.params.username}});

        if (deleteRes.acknowledged) {
            res.status(201).send();
        } else {
            res.status(500).send('An error was encountered attempted to delete this user');
        }
    } catch (error) {
        res.status(500).send();
    }
}

export async function update(req: Request, res: Response) {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) {
            res.status(401).send({message: 'You must include an authorization token to retrieve user details'});

            return;
        }

        const validate: Joi.ValidationResult = UserValidation.updateUser(req.body);

        if (validate.error) {
            res.status(400).send(validate.error.message);

            return;
        }

        const user: IUserModel = await UserModel.findOne({username: {$eq: req.params.username}});

        if (!user) {
            res.status(404).send();

            return;
        }

        const authorized = await checkToken(authToken, user);

        if (!authorized) {
            res.status(401).send();

            return;
        }

        if (req.body.username) {
            user.username = req.body.username;
        }
        user.exercises = req.body.exercises;

        const updateRes = await UserModel.updateOne({username: {$eq: req.params.username}}, user);

        if (updateRes.acknowledged) {
            res.status(200).send();
        } else {
            res.status(500).send('An error was encountered attempting to update this user');
        }
    } catch (error) {
        res.status(500).send();
    }
}

export async function authenticate(req: Request, res: Response) {
    try {
        const validate: Joi.ValidationResult = UserValidation.authenticateUser(req.body);

        if (validate.error) {
            res.status(400).send(validate.error.message);

            return;
        }

        const user: IUserModel = await UserModel.findOne({username: {$eq: req.params.username}});

        if (user) {
            const authorized = await user.comparePassword(req.body.password);

            if (!authorized) {
                res.status(401).send();

                return;
            }

            // TODO: set token expiry for better security - 24 hours?
            const token = jwt.sign(req.body.password, config.secret);

            res.status(200).send({token});
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
}
