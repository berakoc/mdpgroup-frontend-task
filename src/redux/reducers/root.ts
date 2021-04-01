import { combineReducers } from 'redux';
import Playlists from '../../api/models/Playlists';
import { MaybeEmpty } from '../../utils/types';
import spotifyReducer from './spotify';

export type RootState = {
    spotify: MaybeEmpty<Playlists>;
};

export default combineReducers({
    spotify: spotifyReducer,
});
