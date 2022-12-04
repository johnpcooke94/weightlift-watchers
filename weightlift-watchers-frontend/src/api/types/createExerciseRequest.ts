
export interface createExerciseRequest {
    name: string;
    sets: number;
    reps: number;
    description: string | undefined;
    weight: number;
    units: 'kg' | 'lbs';
}
