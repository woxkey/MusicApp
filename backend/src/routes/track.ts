import expres, {Router} from 'express';
import {TrackController} from '../controllers/track';

const router: Router = expres.Router();

router.get('/', TrackController.getTracks);
router.post('/', TrackController.createTrack);

export {router as TrackRouter};
