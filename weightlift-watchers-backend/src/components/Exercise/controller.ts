import * as Joi from 'joi';
import {Request, Response} from 'express';
import ExerciseModel, {IExerciseModel} from './model';
import ExerciseValidation from './validation';

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

        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findOne(req: Request, res: Response) {
    try {
        const exercise: IExerciseModel = await ExerciseModel.findOne(req.params);

        if (exercise) {
            res.status(200)
                .send(exercise);
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
            res.status(401).send(validate.error.message);

            return;
        }

        const exercise: IExerciseModel = await ExerciseModel.create(req.body);

        res.status(200).send(exercise);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findMany(req: Request, res: Response) {
    try {
        const validate: Joi.ValidationResult = ExerciseValidation.getExercises(req.body);
        const idList = req.body.ids;

        if (validate.error) {
            res.status(401).send(validate.error.message);

            return;
        }

        const exercises = await ExerciseModel.find().where('_id').in(idList).exec();

        res.status(200).send(exercises);
    } catch (error) {
        res.status(500).send();
    }
}

export async function remove(req: Request, res: Response): Promise<void> {
    res.status(501).send();
}
