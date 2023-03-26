import {Date, ObjectId} from 'mongoose';

export default interface ITrackHistory {
	user: ObjectId;
	track: ObjectId;
	datetime?: Date;
}
