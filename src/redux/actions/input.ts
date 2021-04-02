import { Input } from './types';

export const setInput = (input: string) => ({
    type: Input.SET_INPUT,
    input,
});
