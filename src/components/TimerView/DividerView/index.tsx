import React from 'react';
import './style.scss';

type DividerViewProp = {
    char?: string;
    margin?: number;
}

export default function DividerView(props: Readonly<DividerViewProp>) {

    return (
        <div
            className="divider-view"
            style={{
                margin: `0px ${props.margin ? props.margin : 16}px`
            }}>
                { props.char ? props.char : ':' }
        </div>
    );
}
