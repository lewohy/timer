import React from 'react';
import './style.scss';

type BoxProp = {
    children: any;
    id: string;
    label?: string;
};

export default function Box(props: Readonly<BoxProp>) {

    return (
        <div
        
            id={ props.id }
            className="box">
            {
                props.children
            }


            {
                props.label?
                <div
                    className="label-view">
                    { props.label }
                </div> :
                ''
            }
        </div>
    )
}
