import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import styles from './Duration.module.scss';

const Duration: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <div className={combine(styles, 'text')}>00:00</div>
        <div className={combine(styles, 'bar')} />
        <div className={combine(styles, 'text')}>04:50</div>
    </div>
);

export default Duration;
