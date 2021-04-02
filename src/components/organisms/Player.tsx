import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import { PlayWidget, SongDescriptor } from '../components';
import styles from './Player.module.scss';

const Player: React.FC<EmptyProps> = () => {
    console.log('Dont render me a lot you bastard');
    return (
        <div className={combine(styles, 'component')}>
            <SongDescriptor />
            <PlayWidget />
            <div />
        </div>
    );
};

export default React.memo(Player);
