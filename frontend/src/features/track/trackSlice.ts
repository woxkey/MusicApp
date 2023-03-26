import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import axios from 'axios';
import ITrack from '../../interfaces/ITrack';

interface TrackState {
	tracks: ITrack[];
	loading: boolean;
}

const initialState: TrackState = {
	tracks: [],
	loading: false,
};

export const getTracksByQuery = createAsyncThunk(
	'getTracksByQuery',
	async (albumId: string) => {
		const res = await axios.get(`${import.meta.env.VITE_MY_URL}/tracks`, {
			params: {
				album: albumId,
			},
		});
		return res.data;
	}
);

export const trackSlice = createSlice({
	name: 'track',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTracksByQuery.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getTracksByQuery.rejected, (state, action) => {
				state.loading = false;
			})
			.addCase(
				getTracksByQuery.fulfilled,
				(state, {payload}: PayloadAction<ITrack[]>) => {
					console.log(payload);
					state.tracks = payload;
				}
			);
	},
});

export const {} = trackSlice.actions;

export const selectAlbums = (state: RootState) => state.track.tracks;

export default trackSlice.reducer;
