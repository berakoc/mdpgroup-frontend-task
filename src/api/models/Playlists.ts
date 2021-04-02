import Playlist from './Playlist';

export default interface Playlists {
    allPlaylists: Playlist[];
    recentlyPlayed: Playlist[];
    recommended: Playlist[];
}
