import React from 'react';
import './style.scss';

type DividerViewProp = {
    id?: string;
    char?: string;
    margin?: number;
}

export default function DividerView(props: Readonly<DividerViewProp>) {

    return (
        <div
            id={ props.id }
            className="divider-view"
            style={{
                margin: `0px ${props.margin ? props.margin : 16}px`
            }}>
                { props.char ? props.char : ':' }
        </div>
    );
}
