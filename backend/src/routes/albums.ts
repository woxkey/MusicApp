import expres, {Router} from 'express';
import multer from 'multer';
import {AlbumController} from '../controllers/album';

const upload = multer({dest: 'uploads'});
const router: Router = expres.Router();

router.get('/', AlbumController.getAlbums);
router.get('/:id', AlbumController.getAlbum);
router.post('/', upload.single('image'), AlbumController.createAlbum);

export {router as AlbumRouter};
