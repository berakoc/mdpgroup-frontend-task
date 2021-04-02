import React from 'react';
import { combine } from '../../utils/style';
import styles from './MenuItem.module.scss';

interface Props {
    icon: React.ReactElement;
    text: string;
    isActive?: boolean;
}

const MenuItem: React.FC<Props> = (props) => {
    return (
        <div className={combine(styles, 'component')}>
            <div
                className={combine(
                    styles,
                    'cursor',
                    props.isActive ? ':visible' : ':invisible'
                )}
            />
            <div className={combine(styles, 'icon')}>{props.icon}</div>
            <div
                className={combine(
                    styles,
                    props.isActive ? 'active' : 'passive'
                )}>
                {props.text}
            </div>
        </div>
    );
};

MenuItem.defaultProps = {
    isActive: false,
};

export default MenuItem;
