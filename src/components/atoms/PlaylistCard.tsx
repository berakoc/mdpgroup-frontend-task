import React from 'react';
import { combine } from '../../utils/style';
import styles from './PlaylistCard.module.scss';

interface Props {
    image: HTMLImageElement;
    title: string;
    description: string;
}

const PlaylistCard: React.FC<Props> = (props) => (
    <div className={combine(styles, 'component')}>
        <div>{props.image}</div>
        <div>{props.title}</div>
        <div>{props.description}</div>
    </div>
);

export default PlaylistCard;
