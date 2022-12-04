import {Router} from 'express';
import {ExerciseComponent} from '../components';

const router: Router = Router();

router.get('/', ExerciseComponent.findAll);
router.get('/user/:username', ExerciseComponent.findAllForUser);
router.post('/', ExerciseComponent.create);
router.get('/:id', ExerciseComponent.findOne);
router.delete('/:id', ExerciseComponent.remove);
router.put('/:id', ExerciseComponent.update);

export default router;
