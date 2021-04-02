import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import styles from './PlaylistWidget.module.scss';

const PlaylistWidget: React.FC<EmptyProps> = () => {
    console.log('Some operations');
    return <div className={combine(styles, 'component')}>Div</div>;
};

export default PlaylistWidget;
