import ExerciseModel, { IExerciseModel } from './model';

const ExerciseService = {

    async findAll(): Promise<IExerciseModel[]> {
        try {
            return await ExerciseModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },
    // TODO: insert and findOne methods

};

export default ExerciseService;
