import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import IAlbum from '../../interfaces/IAlbum';
import {albumApi} from '../../api/albumApi';
import axios from 'axios';

interface AlbumState {
	albums: IAlbum[];
	loading: boolean;
}

const initialState: AlbumState = {
	albums: [],
	loading: false,
};

export const getAlbums = createAsyncThunk('getAlbums', async () => {
	return await albumApi.get();
});

export const getAlbumsByQueryParams = createAsyncThunk(
	'getAlbumsByArtist',
	async (artisId: string) => {
		const res = await axios.get(`${import.meta.env.VITE_MY_URL}/albums`, {
			params: {
				artist: artisId,
			},
		});
		return res.data;
	}
);

export const albumSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAlbumsByQueryParams.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getAlbumsByQueryParams.rejected, (state, action) => {
				state.loading = false;
			})
			.addCase(
				getAlbumsByQueryParams.fulfilled,
				(state, {payload}: PayloadAction<IAlbum[]>) => {
					state.albums = payload;
				}
			);
	},
});

export const {} = albumSlice.actions;

export const selectAlbums = (state: RootState) => state.artist.artists;

export default albumSlice.reducer;
