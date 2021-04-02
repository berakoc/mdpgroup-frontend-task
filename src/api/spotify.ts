import Playlists from './models/Playlists';

const API_URL = 'http://zmdp.cloud/iseAlim/spotify.json';
const GET_REQUEST = {
    method: 'GET',
    mode: 'cors',
    headers: {
        Accept: 'application/json',
    },
} as const;

export default class SpotifyAPI {
    static getPlaylists = async () => {
        const response = await fetch(API_URL, GET_REQUEST);
        return (await response.json()) as Playlists;
    };
}
