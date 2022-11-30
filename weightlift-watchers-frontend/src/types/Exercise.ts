export interface Exercise {
    name: string;
    description: string;
    sets: number;
    reps: number;
    weight: number;
    units: 'kg' | 'lbs';
}
