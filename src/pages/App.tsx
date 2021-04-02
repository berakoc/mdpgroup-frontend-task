import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Playlists from '../api/models/Playlists';
import { Navigation, SearchBar, SpotifyLogo } from '../components/components';
import { fetchPlaylists } from '../redux/actions/spotify';
import { SpotifyAction } from '../redux/actions/types';
import { RootState } from '../redux/reducers/root';
import { combine } from '../utils/style';
import { MaybeEmpty } from '../utils/types';
import styles from './App.module.scss';

const mapStateToProps = (state: RootState) => ({
    spotify: state.spotify,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, SpotifyAction>
) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
});

interface Props {
    spotify: MaybeEmpty<Playlists>;
    fetchPlaylists: () => Promise<SpotifyAction>;
}

const App: React.FC<Props> = (props) => {
    const fetchPlaylists = props.fetchPlaylists;
    useEffect(() => {
        fetchPlaylists();
    }, [fetchPlaylists]);
    return (
        <div className={combine(styles, 'component')}>
            <SpotifyLogo />
            <Navigation />
            <SearchBar />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
