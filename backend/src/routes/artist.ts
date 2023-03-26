import expres, {Router} from 'express';
import multer from 'multer';
import {ArtistController} from '../controllers/artist';

const upload = multer({dest: 'uploads'});
const router: Router = expres.Router();

router.get('/', ArtistController.getArtists);
router.post('/', upload.single('photo'), ArtistController.createArtist);

export {router as ArtistRouter};
