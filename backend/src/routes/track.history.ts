import {Router} from 'express';
import * as TrackHistoryController from '../controllers/track.history';
import {auth} from '../middleware/auth';

const router: Router = Router();

router.post('/', auth, TrackHistoryController.authorize);

export {router as TrackHistoryRouter};
