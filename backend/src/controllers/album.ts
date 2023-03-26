import express from 'express';
import {AlbumService} from '../services/album';

export const AlbumController = {
	createAlbum: async (req: express.Request, res: express.Response) => {
		try {
			const {name, year, artist} = req.body;

			await AlbumService.generate({
				name,
				year,
				artist,
				image: req.file?.filename || '',
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
	getAlbums: async (req: express.Request, res: express.Response) => {
		try {
			await AlbumService.get(req.query.artist?.toString())
				.then((result) => {
					return res.send(result);
				})
				.catch((err) => {
					return res.json({err});
				});
		} catch (err: unknown) {
			res.json({err});
		}
	},
	getAlbum: async (req: express.Request, res: express.Response) => {
		try {
			await AlbumService.getById(req.params.id)
				.then((result) => {
					return res.send(result);
				})
				.catch((err) => {
					return res.json({err});
				});
		} catch (err: unknown) {
			res.json({err});
		}
	},
};
