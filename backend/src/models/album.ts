import {model, Schema} from 'mongoose';
import IAlbum from '../interfaces/IAlbum';

const AlbumSchema = new Schema<IAlbum>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			trim: true,
		},
		image: {
			type: String,
			required: [true, 'Image is required'],
		},
		artist: {
			type: Schema.Types.ObjectId,
			required: [true, 'Artist is required'],
			trim: true,
			ref: 'artist',
		},
		year: {
			type: Number,
			required: [true, 'Year is required'],
			trim: true,
		},
	},
	{versionKey: false}
);

const AlbumModel = model<IAlbum>('album', AlbumSchema);
export default AlbumModel;
