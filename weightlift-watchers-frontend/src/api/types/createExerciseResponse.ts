
export interface createExerciseResponse {
    _id: string;
    name: string;
    sets: number;
    reps: number;
    description: string;
    weight: number;
    units: 'kg' | 'lbs';
}
