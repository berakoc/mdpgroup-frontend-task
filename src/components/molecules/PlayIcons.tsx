import React from 'react';
import Icons from '../../icons/icon-factory';
import Colors from '../../utils/colors';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import { PlayButton } from '../components';
import styles from './PlayIcons.module.scss';

const PlayIcons: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        {Icons.BACKWARD_PLAY()}
        <PlayButton size={36} backgroundColor={Colors.TRANSPARENT} hasBorder />
        {Icons.FORWARD_PLAY()}
    </div>
);

export default PlayIcons;
