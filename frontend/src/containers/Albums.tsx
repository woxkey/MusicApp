import React, {useEffect} from 'react';
import {getAlbumsByQueryParams} from '../features/album/albumSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Albums: React.FunctionComponent = (): React.ReactElement => {
	const {albums} = useAppSelector((state) => state.album);
	const dispatch = useAppDispatch();
	const params = new URLSearchParams(window.location.search);
	const artist = params.get('artist');
	const {state} = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAlbumsByQueryParams(artist!));
	}, [dispatch]);

	return (
		<div>
			<h2 className="mt-0 mb-2 text-4xl font-medium leading-tight ">Albums</h2>
			<h2>{state.artist}</h2>
			<div className="flex flex-wrap gap-10 justify-between ">
				{albums.length ? (
					albums.map((album) => {
						return (
							<div key={album._id}>
								<img
									onClick={() =>
										navigate(
											{pathname: '/tracks', search: `?album=${album._id}`},
											{state: {album: album.name, artist: state.artist}}
										)
									}
									className="w-48 h-48 object-cover "
									src={`${import.meta.env.VITE_MY_URL}/${album.image}`}
									alt={album.name}
								/>
								<p>{album.name}</p>
								<p>{album.year}</p>
							</div>
						);
					})
				) : (
					<p>No albums yet</p>
				)}
			</div>
		</div>
	);
};

export default Albums;
