import ITrackHistory from '../interfaces/ITrackHistory';
import TrackHistoryModel from '../models/track.history';

export async function create(trackHistory: ITrackHistory) {
	try {
		const newTrackHistory = await new TrackHistoryModel({
			user: trackHistory.user,
			track: trackHistory.track,
		}).save();
		return newTrackHistory.populate('track user');
	} catch (error) {
		throw error;
	}
}
