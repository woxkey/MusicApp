import IArtist from './IArtist';

export default interface IAlbum {
	name: string;
	artist: IArtist;
	year: number;
	image: string;
	_id: string;
}
