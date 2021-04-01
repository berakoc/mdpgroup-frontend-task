import { NODE_ENV } from '../config';
import { is } from './object';

type Style = {
    readonly [key: string]: string;
};

const isGlobal = (className: string) => ~className.indexOf(':');

export const combine = (styles: Style, ...classNames: string[]): string => {
    let combinedClassNames = '';
    if (is(NODE_ENV, 'test'))
        classNames = classNames
            .filter((className) => ~isGlobal(className))
            .concat(':test');
    if (!classNames[0]) return '';
    for (const className of classNames) {
        combinedClassNames += (isGlobal(className)
            ? className.substring(1)
            : styles[className]
        ).concat(' ');
    }
    return combinedClassNames.trim();
};
