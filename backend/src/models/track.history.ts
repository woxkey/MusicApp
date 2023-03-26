import mongoose, {model, Schema} from 'mongoose';
import ITrackHistory from '../interfaces/ITrackHistory';

const TrackHistorySchema: mongoose.Schema<ITrackHistory> =
	new mongoose.Schema<ITrackHistory>(
		{
			user: {
				type: Schema.Types.ObjectId,
				required: [true, 'User is required'],
				ref: 'user',
			},
			track: {
				type: Schema.Types.ObjectId,
				required: [true, 'Track is required'],
				ref: 'track',
			},
			datetime: {
				type: Date,
				default: Date.now,
			},
		},
		{versionKey: false}
	);

const TrackHistoryModel = model<ITrackHistory>(
	'trackHistory',
	TrackHistorySchema
);
export default TrackHistoryModel;
