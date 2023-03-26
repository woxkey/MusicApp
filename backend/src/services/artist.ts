import IArtist from '../interfaces/IArtist';
import ArtistModel from '../models/artist';

export const ArtistService = {
	generate: async ({name, info, photo}: IArtist) => {
		return await new ArtistModel({
			name,
			info,
			photo,
		}).save();
	},
	get: async () => {
		return await ArtistModel.find();
	},
};
