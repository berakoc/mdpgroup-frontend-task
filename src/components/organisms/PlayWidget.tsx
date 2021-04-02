import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import Duration from '../atoms/Duration';
import PlayIcons from '../molecules/PlayIcons';
import styles from './PlayWidget.module.scss';

const PlayWidget: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <PlayIcons />
        <Duration />
    </div>
);

export default PlayWidget;
