import React from 'react';
import { combine } from '../../utils/style';
import { EmptyProps } from '../../utils/types';
import styles from './Profile.module.scss';

const Profile: React.FC<EmptyProps> = () => (
    <div className={combine(styles, 'component')}>
        <div className={combine(styles, 'image')}>
            <img
                width={24}
                height={24}
                src={'/assets/images/user-image.jpeg'}
            />
        </div>
        <div className={combine(styles, 'name')}>Eve Johannson</div>
    </div>
);

export default Profile;
