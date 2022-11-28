import {Router} from 'express';
import {UserComponent} from '../components';

const router: Router = Router();

router.post('/', UserComponent.create);

router.post('/:username/login', UserComponent.authenticate);

router.get('/:username', UserComponent.findOne);

router.put('/:username', UserComponent.update);

router.delete('/username', UserComponent.remove);

export default router;
