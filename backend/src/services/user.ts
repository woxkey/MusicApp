import IUser from '../interfaces/IUser';
import UserModel from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../middleware/auth';

export async function register(user: IUser): Promise<void> {
	try {
		await UserModel.create(user);
	} catch (error) {
		throw error;
	}
}

export async function login(user: IUser) {
	try {
		const foundUser = await UserModel.findOne({username: user.username});

		if (!foundUser) {
			throw new Error('Name of user is not correct');
		}
		const isMatch = bcrypt.compareSync(user.password, foundUser.password);
		if (isMatch) {
			const token = jwt.sign(
				{_id: foundUser._id?.toString(), username: foundUser.username},
				SECRET_KEY,
				{
					expiresIn: '2 days',
				}
			);
			await UserModel.findOneAndUpdate({username: user.username}, {token});
			return {token: token};
		} else {
			throw new Error('Password is not correct');
		}
	} catch (error) {
		throw error;
	}
}
