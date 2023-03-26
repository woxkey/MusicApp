import {Request, Response} from 'express';
import UserModel from '../models/user';
import {getErrorMessage} from '../utils/errors.util';
import * as TrackHistoryService from '../services/track.history';
import TrackModel from '../models/track';

export const authorize = async (req: Request, res: Response) => {
	try {
		const bearedHeader = req.headers['authorization'];
		const bearer = bearedHeader!.split(' ');
		const token = bearer[1];

		UserModel.findOne({token})
			.then(async (user) => {
				if (!user) return res.status(401).json({error: 'Unauthorized'});
				const trackExists = await TrackModel.exists({_id: req.body.track});
				if (!trackExists)
					return res.json({
						error: 'This track does not exist. Please choode another one',
					});

				TrackHistoryService.create({
					track: req.body.track,
					user: user._id,
				})
					.then((result) => {
						return res.send('Successfully created track history');
					})
					.catch((err) => {
						return res.json({error: err.message});
					});
			})
			.catch((err) => {
				return res.json({err});
			});
	} catch (error) {
		return res.status(500).send(getErrorMessage(error));
	}
};
