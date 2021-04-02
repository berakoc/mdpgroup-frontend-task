import React from 'react';

interface Props {
    height: number;
}

const Spacer: React.FC<Props> = (props) => (
    <div
        style={{
            height: props.height,
        }}
    />
);

export default Spacer;
