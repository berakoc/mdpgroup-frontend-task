import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import {
    Navigation,
    Player,
    PlaylistWidget,
    Spacer,
    SpotifyLogo,
} from '../components';
import styles from './Playlist.module.scss';

const Playlist: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <SpotifyLogo />
        <Navigation />
        <Spacer height={80} />
        <PlaylistWidget />
        <Player />
    </div>
);

export default Playlist;
