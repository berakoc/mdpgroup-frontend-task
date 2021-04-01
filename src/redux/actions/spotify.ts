import { Action, Dispatch } from 'redux';
import Playlists from '../../api/models/Playlists';
import { SPOTIFY, SpotifyAction } from './types';
import SpotifyAPI from '../../api/spotify';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/root';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;

const getPlaylists = (playlists: Playlists) => ({
    type: SPOTIFY.FETCH_ALL_PLAYLISTS,
    playlists,
});

export const fetchPlaylists = (): ThunkResult<Promise<SpotifyAction>> => async (
    dispatch: Dispatch<SpotifyAction>
) => {
    const playlists = await SpotifyAPI.getPlaylists();
    return dispatch(getPlaylists(playlists));
};
