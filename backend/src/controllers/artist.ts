import express from 'express';
import {ArtistService} from '../services/artist';

export const ArtistController = {
	createArtist: async (req: express.Request, res: express.Response) => {
		try {
			const {name, info} = req.body;

			await ArtistService.generate({
				name,
				info,
				photo: req.file?.filename || '',
			})
				.then((result) => {
					return res.send(result);
				})
				.catch((err) => {
					return res.send({error: err.message});
				});
		} catch (err: unknown) {
			res.json({err});
		}
	},
	getArtists: async (req: express.Request, res: express.Response) => {
		try {
			await ArtistService.get()
				.then((result) => {
					res.send(result);
				})
				.catch((err) => {
					res.json({err});
				});
		} catch (err: unknown) {
			res.json({err});
		}
	},
};
