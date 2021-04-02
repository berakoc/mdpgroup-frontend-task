import { combineReducers } from 'redux';
import Playlists from '../../api/models/Playlists';
import { MaybeEmpty } from '../../utils/types';
import inputReducer from './input';
import spotifyReducer from './spotify';

export type RootState = {
    spotify: MaybeEmpty<Playlists>;
    input: string;
};

export default combineReducers({
    spotify: spotifyReducer,
    input: inputReducer,
});
