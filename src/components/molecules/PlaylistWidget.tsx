import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import { PlaylistMenu, SearchBar, Spacer } from '../components';
import styles from './PlaylistWidget.module.scss';

const PlaylistWidget: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <div className={combine(styles, 'title')}>ÇALMA LİSTELERİN</div>
        <Spacer height={16} />
        <SearchBar />
        <Spacer height={16} />
        <PlaylistMenu />
    </div>
);

export default PlaylistWidget;
