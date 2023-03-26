import express from 'express';
import {TrackService} from '../services/tracks';

export const TrackController = {
	createTrack: async (req: express.Request, res: express.Response) => {
		try {
			const {name, duration, album} = req.body;

			await TrackService.generate({
				name,
				duration,
				album,
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
	getTracks: async (req: express.Request, res: express.Response) => {
		try {
			await TrackService.get(req.query.album?.toString())
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
