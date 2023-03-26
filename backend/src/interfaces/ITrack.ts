import {ObjectId} from 'mongoose';

export default interface ITrack {
	name: string;
	album: ObjectId;
	duration: string;
	seq?: Number;
}
