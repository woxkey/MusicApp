import mongoose, {model} from 'mongoose';
import IUser from '../interfaces/IUser';
import bcrypt from 'bcrypt';

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema<IUser>(
	{
		username: {
			type: String,
			required: [true, 'Username is required'],
			trim: true,
			unique: true,
			index: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		token: {
			type: String,
		},
	},
	{versionKey: false}
);

const saltRounds = 8;

UserSchema.pre('save', async function (next) {
	const user = this;
	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, saltRounds);
	}
	next();
});

const UserModel = model<IUser>('user', UserSchema);
UserModel.createIndexes();
export default UserModel;
