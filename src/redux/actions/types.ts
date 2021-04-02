import Playlists from '../../api/models/Playlists';
import { MaybeEmpty } from '../../utils/types';

export const Spotify = {
    FETCH_ALL_PLAYLISTS: 'FETCH_ALL_PLAYLISTS',
} as const;

export const Input = {
    SET_INPUT: 'SET_INPUT',
} as const;

export interface SpotifyAction {
    type: keyof typeof Spotify;
    playlists: MaybeEmpty<Playlists>;
}

export interface InputAction {
    type: keyof typeof Input;
    input: string;
}
