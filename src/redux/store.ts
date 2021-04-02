import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState: RootState = {
    spotify: {},
    input: '',
} as const;

const middlewares = [thunk];
const loadStore = (preloadedState: RootState) =>
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

export default loadStore(initialState);
