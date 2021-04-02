import React from 'react';
import Icons from '../../icons/icon-factory';
import { combine } from '../../utils/style';
import styles from './PlayButton.module.scss';

interface Props {
    size: number;
    backgroundColor: string;
    hasBorder: boolean;
}

const PlayButton: React.FC<Props> = (props) => (
    <div
        style={{
            backgroundColor: props.backgroundColor,
            border: props.hasBorder
                ? '1px solid rgba(255,255,255,0.8)'
                : 'none',
            width: props.size,
            height: props.size,
        }}
        className={combine(styles, 'component')}>
        {Icons.PLAY(0.8)}
    </div>
);

export default React.memo(PlayButton);
