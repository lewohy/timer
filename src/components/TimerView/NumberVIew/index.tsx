import React from 'react';
import './style.scss';

type NumberViewProp = {
    id: string;
    label?: string;
    space: number;
    spaceChar: string;
    value: number;
}

export default function NumberView(props: Readonly<NumberViewProp>) {
    let [value, setValue] = React.useState(props.spaceChar.repeat(props.space));

    React.useEffect(() => {
        setValue(props.value.toString().padStart(props.space, props.spaceChar));
    }, [props.value]);

    return (
        <div
            id={ props.id }
            className="number-view" >
            { value }

            {
                props.label?
                <div
                    className="label-view">
                    { props.label }
                </div> :
                ''
            }
        </div>
    );
}
