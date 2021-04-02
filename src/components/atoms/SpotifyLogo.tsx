import React from 'react';
import Icons from '../../icons/icon-factory';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import styles from './SpotifyLogo.module.scss';

const SpotifyLogo: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>{Icons.SPOTIFY_LOGO(1)}</div>
);

export default SpotifyLogo;
