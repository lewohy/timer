import React from 'react';
import './style.scss';
import NumberView from './CharacterView';
import CharacterView from './CharacterView';

type NumberViewProp = {
    space: number;
    spaceChar: string;
    value: number;
    anim?: boolean;
}

export default function ValueView(props: Readonly<NumberViewProp>) {
    let [value, setValue] = React.useState(props.value.toString().padStart(props.space, props.spaceChar).split(''));

    React.useEffect(() => {
        setValue(props.value.toString().padStart(props.space, props.spaceChar).split(''));
    }, [props.value]);

    return (
        <div
            className="value-view" >
            {
                value.map((e, i) => {
                    return (
                        <CharacterView
                            key={ i }
                            char={e}
                            anim={ props.anim }/>
                    )   
                })
            }
        </div>
    );
}
