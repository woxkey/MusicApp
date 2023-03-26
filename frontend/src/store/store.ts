import {configureStore} from '@reduxjs/toolkit';
import albumSlice from '../features/album/albumSlice';
import artistSlice from '../features/artist/artistSlice';
import trackSlice from '../features/track/trackSlice';

export const store = configureStore({
	reducer: {
		artist: artistSlice,
		album: albumSlice,
		track: trackSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
