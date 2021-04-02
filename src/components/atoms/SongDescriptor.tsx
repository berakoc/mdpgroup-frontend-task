import React from 'react';
import icons from '../../icons/icon-factory';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import styles from './SongDescriptor.module.scss';

const SongDescriptor: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <img
            width={48}
            height={48}
            src={'/assets/images/reckoner-song-cover.jpg'}
            alt='Reckoner Song Cover'
        />
        <div className={combine(styles, 'song-info')}>
            <div className={combine(styles, 'song')}>Reckoner</div>
            <div className={combine(styles, 'artist')}>Radiohead</div>
        </div>
        <div>
            <span className={combine(styles, 'icon')}>{icons.LIKE(0.5)}</span>
            <span className={combine(styles, 'icon')}>
                {icons.PLAYLIST(0.5)}
            </span>
        </div>
    </div>
);

export default SongDescriptor;
