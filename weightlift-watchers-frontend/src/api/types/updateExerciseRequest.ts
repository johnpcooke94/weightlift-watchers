
export interface updateExerciseRequest {
    name: string;
    sets: number;
    reps: number;
    description: string | undefined;
    weight: number;
    units: string;
}
