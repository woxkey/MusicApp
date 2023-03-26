import express, {Express, json, urlencoded} from 'express';
import 'dotenv/config';
import cors from 'cors';
import {mongoose} from './repository/mongoose';
import {ArtistRouter} from './routes/artist';
import {AlbumRouter} from './routes/albums';
import {TrackRouter} from './routes/track';
import {UsersRouter} from './routes/user';
import {TrackHistoryRouter} from './routes/track.history';

mongoose.run();

const app: Express = express();
app.use(json());
app.use(cors());
app.use(urlencoded({extended: true}));

app.use(express.static('uploads'));
app.use('/artists', ArtistRouter);
app.use('/albums', AlbumRouter);
app.use('/tracks', TrackRouter);
app.use('/users', UsersRouter);
app.use('/track_history', TrackHistoryRouter);

app.listen(process.env.PORT, () => {
	console.log(`App started on port ${process.env.PORT}`);
});
