import Playlists from '../../api/models/Playlists';
import { MaybeEmpty } from '../../utils/types';

export const SPOTIFY = {
    FETCH_ALL_PLAYLISTS: 'FETCH_ALL_PLAYLISTS',
} as const;

export interface SpotifyAction {
    type: keyof typeof SPOTIFY;
    playlists: MaybeEmpty<Playlists>;
}
