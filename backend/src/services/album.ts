import IAlbum from '../interfaces/IAlbum';
import AlbumModel from '../models/album';

export const AlbumService = {
	generate: async ({name, year, image, artist}: IAlbum) => {
		return await new AlbumModel({
			name,
			year,
			image,
			artist,
		}).save();
	},
	get: async (id?: string) => {
		return await AlbumModel.find(id ? {artist: id} : {})
			.populate('artist')
			.sort({year: 1});
	},
	getById: async (id: string) => {
		return await AlbumModel.findById(id).populate('artist');
	},
};
