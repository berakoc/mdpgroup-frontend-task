import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Playlist from '../../api/models/Playlist';
import { RootState } from '../../redux/reducers/root';
import { combine } from '../../utils/style';
import styles from './PlaylistMenu.module.scss';
import { nanoid } from 'nanoid';
import { Spacer } from '../components';

const mapStateToProps = (state: RootState) => ({
    allPlaylists: state.spotify.allPlaylists,
});

interface Props {
    allPlaylists?: Playlist[];
}

const PlaylistMenu: React.FC<Props> = (props) => {
    return (
        <div className={combine(styles, 'component')}>
            {props.allPlaylists?.map((playlist) => (
                <Fragment key={nanoid()}>
                    <div className={combine(styles, 'playlist')}>
                        {playlist.name}
                    </div>
                    <Spacer height={16} />
                </Fragment>
            ))}
        </div>
    );
};

export default connect(mapStateToProps)(PlaylistMenu);
