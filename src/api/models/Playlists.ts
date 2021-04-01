import Playlist from './Playlist';

export default interface Playlists {
    allPlayLists: Playlist[];
    recentlyPlayed: Playlist[];
    recommended: Playlist[];
}
