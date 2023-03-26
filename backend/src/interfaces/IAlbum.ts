import {ObjectId} from 'mongoose';

export default interface IAlbum {
	name: string;
	artist: ObjectId;
	year: number;
	image: string;
}
