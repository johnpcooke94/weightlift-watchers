import {Router} from 'express';
import {ExerciseComponent} from '../components';

const router: Router = Router();

router.get('/', (req, res) => {
    if (req.body.ids) {
        ExerciseComponent.findMany(req, res);
    } else {
        ExerciseComponent.findAll(req, res);
    }
});
router.post('/', ExerciseComponent.create);
router.get('/:id', ExerciseComponent.findOne);
router.delete('/:id', ExerciseComponent.remove);
router.put('/:id', ExerciseComponent.update);

export default router;
