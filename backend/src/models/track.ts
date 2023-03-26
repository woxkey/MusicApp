import mongoose, {model, Schema} from 'mongoose';
import ITrack from '../interfaces/ITrack';

const TrackSchema = new Schema<ITrack>(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			trim: true,
		},
		album: {
			type: Schema.Types.ObjectId,
			required: [true, 'Album is required'],
			trim: true,
			ref: 'album',
		},
		duration: {
			type: String,
			required: [true, 'Duration is required'],
			trim: true,
		},
		seq: {
			type: Number,
		},
	},
	{versionKey: false}
);

TrackSchema.pre('save', {document: true, query: false}, async function () {
	const count = await TrackModel.count();
	this.seq = count + 1;
});

const TrackModel = model<ITrack>('track', TrackSchema);

export default TrackModel;
