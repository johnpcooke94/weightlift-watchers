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
        });

        return schema.validate(params);
    }

    getExercises(params: IExerciseModel[]): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            ids: Joi.array().required(),
        });

        return schema.validate(params);
    }
}

export default new ExerciseValidation();
