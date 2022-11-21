import * as Joi from 'joi';
import {NextFunction, Request, Response} from 'express';
import HttpError from '../../config/error';
import ExerciseModel, {IExerciseModel} from './model';
import ExerciseValidation from './validation';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const exercises: IExerciseModel[] = await ExerciseModel.find({});

        res.status(200).json(exercises);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

export async function findOne(req: Request, res: Response): Promise<void> {
    res.status(501).send();
}

export async function create(req: Request, res: Response): Promise<void> {
    const validate: Joi.ValidationResult = ExerciseValidation.createExercise(req.body);

    if (validate.error) {
        throw new Error(validate.error.message);
    }

    const exercise: IExerciseModel = await ExerciseModel.create(req.body);

    res.status(200).send(exercise);
}

export async function remove(req: Request, res: Response): Promise<void> {
    res.status(501).send();
}
