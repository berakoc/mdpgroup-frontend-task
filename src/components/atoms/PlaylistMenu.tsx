import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Playlist from '../../api/models/Playlist';
import { RootState } from '../../redux/reducers/root';
import { combine } from '../../utils/style';
import styles from './PlaylistMenu.module.scss';
import { nanoid } from 'nanoid';
import { Spacer } from '../components';
import obtainFilter from '../../utils/search-engine';

const mapStateToProps = (state: RootState) => ({
    allPlaylists: state.spotify.allPlaylists,
    input: state.input,
});

interface Props {
    allPlaylists?: Playlist[];
    input: string;
}

const PlaylistMenu: React.FC<Props> = (props) => {
    return (
        <div className={combine(styles, 'component')}>
            {props.allPlaylists
                ?.filter((playlist) => obtainFilter(props.input)(playlist.name))
                .map((playlist) => (
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
