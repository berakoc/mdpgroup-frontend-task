import React from 'react';
import Icons from '../../icons/icon-factory';
import { combine } from '../../utils/style';
import { EmptyObject } from '../../utils/types';
import MenuItem from '../atoms/MenuItem';
import styles from './Navigation.module.scss';

const Navigation: React.FC<EmptyObject> = () => (
    <div className={combine(styles, 'component')}>
        <MenuItem icon={Icons.HOME_BOLD(1)} text={'Giriş'} isActive />
        <MenuItem icon={Icons.SEARCH()} text={'Gözat'} />
        <MenuItem icon={Icons.LIBRARY()} text={'Kitaplık'} />
    </div>
);

export default Navigation;
