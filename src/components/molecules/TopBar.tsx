import React from 'react';
import Icons from '../../icons/icon-factory';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import { Profile, SearchBar } from '../components';
import styles from './TopBar.module.scss';

const TopBar: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <div>
            <div className={combine(styles, 'icon', 'left')}>
                {Icons.CHEVRON_LEFT(1)}
            </div>
            <div className={combine(styles, 'icon', 'right')}>
                {Icons.CHEVRON_RIGHT(1)}
            </div>
            <SearchBar general />
        </div>
        <Profile />
    </div>
);

export default TopBar;
