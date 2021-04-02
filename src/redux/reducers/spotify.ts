import Playlists from '../../api/models/Playlists';
import { MaybeEmpty } from '../../utils/types';
import { Spotify, SpotifyAction } from '../actions/types';

const initialState = {} as const;

const spotifyReducer = (
    state: MaybeEmpty<Playlists> = initialState,
    action: SpotifyAction
) => {
    switch (action.type) {
        case Spotify.FETCH_ALL_PLAYLISTS:
            return action.playlists;
        default:
            return state;
    }
};

export default spotifyReducer;
