export interface Exercise {
    _id: string;
    name: string;
    description: string | undefined;
    sets: number;
    reps: number;
    weight: number;
    units: 'kg' | 'lbs';
}
