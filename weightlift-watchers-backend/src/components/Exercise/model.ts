import { Document, Schema } from 'mongoose';
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
}

const ExerciseSchema: Schema = new Schema({
    name: String,
    description: String,
    sets: Number,
    reps: Number,
});

export default connections.db.model<IExerciseModel>('ExerciseModel', ExerciseSchema);
