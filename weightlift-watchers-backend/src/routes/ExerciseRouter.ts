import {Router} from 'express';
import { ExerciseComponent } from '../components';

const router: Router = Router();

router.get('/', ExerciseComponent.findAll);

export default router;
