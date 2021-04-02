import { Input, InputAction } from '../actions/types';

const initialState = '' as const;

const inputReducer = (state: string = initialState, action: InputAction) => {
    switch (action.type) {
        case Input.SET_INPUT:
            return action.input;
        default:
            return state;
    }
};

export default inputReducer;
