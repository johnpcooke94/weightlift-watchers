import { NextFunction, Request, Response } from 'express';
import HttpError from '../../config/error';
import { IExerciseModel } from './model';
import ExerciseService from './service';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const exercises: IExerciseModel[] = await ExerciseService.findAll();

        res.status(200).json(exercises);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
