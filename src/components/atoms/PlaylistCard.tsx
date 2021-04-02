import React from 'react';
import { combine } from '../../utils/style';
import styles from './PlaylistCard.module.scss';
import { AllHtmlEntities } from 'html-entities';

interface Props {
    imageUrl: string;
    title: string;
    description: string;
}

const PlaylistCard: React.FC<Props> = (props) => (
    <div className={combine(styles, 'component')}>
        <div className={combine(styles, 'image')}>
            <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className={combine(styles, 'title')}>{props.title}</div>
        <div className={combine(styles, 'description')}>
            {AllHtmlEntities.decode(props.description)}
        </div>
    </div>
);

export default PlaylistCard;
