import React, { useState } from 'react';
import Icons from '../../icons/icon-factory';
import { combine } from '../../utils/style';
import styles from './SearchBar.module.scss';

interface Props {
    general?: boolean;
}

const SearchBar: React.FC<Props> = () => {
    const [text, setText] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setText(text);
    };
    return (
        <div className={combine(styles, 'component')}>
            <span className={combine(styles, 'icon')}>{Icons.SEARCH()}</span>
            <input
                className={combine(styles, 'input')}
                onChange={handleChange}
                value={text}
                placeholder={'Ara'}
            />
            <span className={combine(styles, 'icon')}>{Icons.FILTER()}</span>
        </div>
    );
};

SearchBar.defaultProps = {
    general: false,
};

export default React.memo(SearchBar);
