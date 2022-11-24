import {Document, Schema} from 'mongoose';
import * as connections from '../../config/connection/connection';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IExerciseModel extends Document {
    id: string;
    name: string;
    description: string;
    sets: number;
    reps: number;
    weight: number;
    units: 'lbs' | 'kg';
}

const ExerciseSchema: Schema = new Schema({
    name: String,
    description: String,
    sets: Number,
    reps: Number,
    weight: Number,
    units: String,
});

export default connections.db.model<IExerciseModel>('ExerciseModel', ExerciseSchema);
