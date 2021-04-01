import { Nullable } from '../../utils/types';

export default interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: [
        {
            height: Nullable<number>;
            url: string;
            width: Nullable<number>;
        }
    ];
    name: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: null;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}
