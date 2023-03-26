import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import IArtist from '../../interfaces/IArtist';
import {artistApi} from '../../api/artistApi';

interface ArtistState {
	artists: IArtist[];
	loading: boolean;
}

const initialState: ArtistState = {
	artists: [],
	loading: false,
};

export const getArtists = createAsyncThunk('getArtists', async () => {
	return await artistApi.get();
});

export const artistSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getArtists.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getArtists.rejected, (state, action) => {
				state.loading = false;
			})
			.addCase(
				getArtists.fulfilled,
				(state, {payload}: PayloadAction<IArtist[]>) => {
					state.artists = payload;
				}
			);
	},
});

export const {} = artistSlice.actions;

export const selectArtists = (state: RootState) => state.artist.artists;

export default artistSlice.reducer;
