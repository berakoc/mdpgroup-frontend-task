import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
    Navigation,
    Player,
    SearchBar,
    SpotifyLogo,
} from '../components/components';
import { fetchPlaylists } from '../redux/actions/spotify';
import { SpotifyAction } from '../redux/actions/types';
import { RootState } from '../redux/reducers/root';
import { combine } from '../utils/style';
import styles from './App.module.scss';

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, SpotifyAction>
) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
});

interface Props {
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
            <Player />
        </div>
    );
};

export default connect(null, mapDispatchToProps)(App);
