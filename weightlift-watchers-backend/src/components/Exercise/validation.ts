import * as Joi from 'joi';
import Validation from '../validation';
import {IExerciseModel} from './model';

class ExerciseValidation extends Validation {
    constructor() {
        super();
    }

    createExercise(params: IExerciseModel): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            sets: Joi.number().allow(),
            reps: Joi.number().allow(),
            description: Joi.number().allow(),
        });

        return schema.validate(params);
    }

    getExercises(params: IExerciseModel[]): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            ids: Joi.array().required(),
        });

        return schema.validate(params);
    }

    updateExercise(params: IExerciseModel[]): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            sets: Joi.number().allow(),
            reps: Joi.number().allow(),
            description: Joi.number().allow(),
        });

        return schema.validate(params);
    }
}

export default new ExerciseValidation();
