import ITrack from '../interfaces/ITrack';
import TrackModel from '../models/track';

export const TrackService = {
	generate: async ({name, duration, album}: ITrack) => {
		return await new TrackModel({
			name,
			duration,
			album,
		}).save();
	},
	get: async (id?: string) => {
		return await TrackModel.find(id ? {album: id} : {}).populate('album');
	},
};
