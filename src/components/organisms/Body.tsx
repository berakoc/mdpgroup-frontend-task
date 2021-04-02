import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import TopBar from '../molecules/TopBar';
import styles from './Body.module.scss';

const Body: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <TopBar />
    </div>
);

export default Body;
