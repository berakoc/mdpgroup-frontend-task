import debounce from 'lodash.debounce';
import React, {
    ChangeEvent,
    Dispatch,
    useEffect,
    useRef,
    useState,
} from 'react';
import { connect } from 'react-redux';
import Icons from '../../icons/icon-factory';
import { setInput } from '../../redux/actions/input';
import { InputAction } from '../../redux/actions/types';
import { combine } from '../../utils/style';
import styles from './SearchBar.module.scss';

const mapDispatchToProps = (dispatch: Dispatch<InputAction>) => ({
    updateInput: (input: string) => dispatch(setInput(input)),
});

interface Props {
    general?: boolean;
    updateInput: (input: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
    const [text, setText] = useState('');
    const debouncedUpdateInput = useRef(
        debounce((text: string) => {
            props.updateInput(text);
        }, 1000)
    );
    useEffect(() => {
        if (text) {
            debouncedUpdateInput.current(text);
        }
    }, [text]);
    return (
        <div className={combine(styles, 'component')}>
            <span className={combine(styles, 'icon')}>{Icons.SEARCH()}</span>
            <input
                className={combine(
                    styles,
                    'input',
                    props.general ? 'enhanced' : ':visible'
                )}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setText(e.target.value)
                }
                value={text}
                placeholder={'Ara'}
            />
            <span className={combine(styles, props.general ? ':null' : 'icon')}>
                {Icons.FILTER()}
            </span>
        </div>
    );
};

SearchBar.defaultProps = {
    general: false,
};

export default React.memo(connect(null, mapDispatchToProps)(SearchBar));
