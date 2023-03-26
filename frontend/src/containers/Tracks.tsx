import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {getTracksByQuery} from '../features/track/trackSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const Tracks = () => {
	const {state} = useLocation();
	const {tracks} = useAppSelector((state) => state.track);
	const dispatch = useAppDispatch();
	const params = new URLSearchParams(window.location.search);
	const album = params.get('album');

	useEffect(() => {
		dispatch(getTracksByQuery(album!));
	}, [dispatch]);

	return (
		<div>
			<h2 className="mt-0 mb-2 text-4xl font-medium leading-tight ">Tracks</h2>
			<h2>{state.artist}</h2>
			<h2>{state.album}</h2>
			<div className="flex flex-col gap-6 pt-4">
				{tracks.length ? (
					tracks.map((track) => {
						return (
							<div
								className="border border-solid color border-black p-4"
								key={track._id}
							>
								<p>Track number: {track.seq.toString()}</p>
								<p>Track name: {track.name}</p>
								<p>Track duration: {track.duration}</p>
							</div>
						);
					})
				) : (
					<p>No Tracks Yet</p>
				)}
			</div>
		</div>
	);
};

export default Tracks;
