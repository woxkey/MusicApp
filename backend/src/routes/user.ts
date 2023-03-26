import {Router} from 'express';
import * as userController from '../controllers/user';

const router: Router = Router();

router.post('/', userController.registerOne);
router.post('/sessions', userController.loginOne);

export {router as UsersRouter};
