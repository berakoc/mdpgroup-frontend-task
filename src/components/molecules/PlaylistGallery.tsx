import { nanoid } from 'nanoid';
import React from 'react';
import Playlist from '../../api/models/Playlist';
import { combine } from '../../utils/style';
import { PlaylistCard, Spacer } from '../components';
import styles from './PlaylistGallery.module.scss';

interface Props {
    title: string;
    description?: string;
    playlists: Playlist[];
}

const PlaylistGallery: React.FC<Props> = (props) => (
    <div className={combine(styles, 'component')}>
        <Spacer height={56} />
        <div className={combine(styles, 'title')}>{props.title}</div>
        <Spacer height={6} />
        <div className={combine(styles, 'description')}>
            {props.description}
        </div>
        <Spacer height={24} />
        <div className={combine(styles, 'gallery')}>
            {(props.playlists || []).map((playlist) => (
                <PlaylistCard
                    key={nanoid()}
                    imageUrl={playlist.images[0].url}
                    title={playlist.name}
                    description={playlist.description}
                />
            ))}
        </div>
    </div>
);

export default PlaylistGallery;
