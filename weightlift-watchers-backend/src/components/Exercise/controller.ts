import * as Joi from 'joi';
import {Request, Response} from 'express';
import ExerciseModel, {IExerciseModel} from './model';
import ExerciseValidation from './validation';
import UserModel from '../User/model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response) {
    try {
        const exercises: IExerciseModel[] = await ExerciseModel.find({});

        const responseBody = {
            exercises,
        };

        res.status(200).json(responseBody);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findOne(req: Request, res: Response) {
    try {
        const exercise: IExerciseModel = await ExerciseModel.findOne(req.params);

        if (exercise) {
            res.status(200).send(exercise);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
}

export async function create(req: Request, res: Response) {
    try {
        const validate: Joi.ValidationResult = ExerciseValidation.createExercise(req.body);

        if (validate.error) {
            res.status(400).send(validate.error.message);

            return;
        }

        const exercise: IExerciseModel = await ExerciseModel.create(req.body);

        res.status(201).send(exercise);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findAllForUser(req: Request, res: Response) {
    try {

        const {username} = req.params;

        const user = await UserModel.findOne({username: {$eq: username}});

        const exercises = await ExerciseModel.find({_id: {$in: user.exercises}});

        const responseBody = {
            exercises,
        };

        res.status(200).send(responseBody);
    } catch (error) {
        res.status(500).send();
    }
}

export async function remove(req: Request, res: Response): Promise<void> {
    try {
        const removeRes = await ExerciseModel.deleteOne({_id: {$eq: req.params.id}});

        if (removeRes.deletedCount === 1) {
            res.status(204).send();
        } else {
            console.error(`Multiple entries deleted when only one entry should have been for exercise ID ${req.params.id}`);
            res.status(500).send();
        }
    } catch (error) {
        res.status(500).send();
    }
}

export async function update(req: Request, res:Response): Promise<void> {
    try {
        const oldExercise: IExerciseModel = await ExerciseModel.findOne(req.params);

        if (oldExercise) {
            const validate: Joi.ValidationResult = ExerciseValidation.updateExercise(req.body);

            if (validate.error) {
                res.status(400).send(validate.error.message);

                return;
            }

            const reqExercise: IExerciseModel = req.body;
            const updateRes = await ExerciseModel.updateOne({_id: {$eq: req.params.id}}, reqExercise);

            if (updateRes.acknowledged) {
                res.status(204).send();
            } else {
                res.status(500).send('An error was encountered attempting to update this resource');
            }
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
}
