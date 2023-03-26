import {model, Schema} from 'mongoose';
import IArtist from '../interfaces/IArtist';

const ArtistSchema = new Schema<IArtist>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			trim: true,
		},
		photo: {
			type: String,
			required: [true, 'Photo is required'],
		},
		info: {
			type: String,
			required: [true, 'Info is required'],
			trim: true,
		},
	},
	{versionKey: false}
);

const ArtistModel = model<IArtist>('artist', ArtistSchema);
export default ArtistModel;
