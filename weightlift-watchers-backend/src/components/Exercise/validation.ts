import * as Joi from 'joi';
import Validation from '../validation';
import {IExerciseModel} from './model';

class ExerciseValidation extends Validation {
    updateCreateSchema: Joi.Schema = Joi.object().keys({
        name: Joi.string().required(),
        sets: Joi.number().allow(),
        reps: Joi.number().allow(),
        description: Joi.string().allow(),
        weight: Joi.number().allow(),
        units: Joi.string().valid('lbs', 'kg'),
    }).with('weight', 'units');

    constructor() {
        super();
    }

    createExercise(params: IExerciseModel): Joi.ValidationResult {
        return this.updateCreateSchema.validate(params);
    }

    getExercises(params: IExerciseModel[]): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            ids: Joi.array().required(),
        });

        return schema.validate(params);
    }

    updateExercise(params: IExerciseModel): Joi.ValidationResult {
        return this.updateCreateSchema.validate(params);
    }
}

export default new ExerciseValidation();
