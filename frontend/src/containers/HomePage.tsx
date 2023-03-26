import React, {useEffect} from 'react';
import {getArtists, selectArtists} from '../features/artist/artistSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
	const {artists} = useAppSelector((state) => state.artist);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setInterval(() => {
			dispatch(getArtists());
		}, 1000);
	}, [dispatch]);

	return (
		<div>
			<h2 className="mt-0 mb-2 text-4xl font-medium leading-tight ">Artists</h2>
			<div className="flex flex-wrap gap-10 justify-between ">
				{artists.length ? (
					artists.map((artist) => {
						return (
							<div key={artist._id}>
								<img
									onClick={() =>
										navigate(
											{pathname: '/albums', search: `?artist=${artist._id}`},
											{state: {artist: artist.name}}
										)
									}
									className="w-56 h-56 object-cover "
									src={`${import.meta.env.VITE_MY_URL}/${artist.photo}`}
									alt={artist.name}
								/>
								<span>{artist.name}</span>
							</div>
						);
					})
				) : (
					<p>No Artist yet</p>
				)}
			</div>
		</div>
	);
};

export default HomePage;
