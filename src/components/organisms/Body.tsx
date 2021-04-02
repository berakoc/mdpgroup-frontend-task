import React from 'react';
import { connect } from 'react-redux';
import Playlists from '../../api/models/Playlists';
import { RootState } from '../../redux/reducers/root';
import { combine } from '../../utils/style';
import { MaybeEmpty } from '../../utils/types';
import { PlaylistGallery, Spacer } from '../components';
import TopBar from '../molecules/TopBar';
import styles from './Body.module.scss';

const mapStateToProps = (state: RootState) => ({
    spotify: state.spotify,
});

interface Props {
    spotify: MaybeEmpty<Playlists>;
}

const Body: React.FC<Props> = (props) => (
    <div className={combine(styles, 'component')}>
        <TopBar />
        <Spacer height={24} />
        <PlaylistGallery
            title={'Yakında Çalınanlar'}
            playlists={props.spotify.recentlyPlayed}
        />
        <PlaylistGallery
            title={'Tavsiye Edilenler'}
            description={'Sevdiğin her şeyden biraz dinle.'}
            playlists={props.spotify.recommended}
        />
    </div>
);

export default connect(mapStateToProps)(Body);
