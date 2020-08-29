import React from 'react';
import './style.scss';

type CharacterViewProp = {
    char: string;
    anim: boolean;
};

export default function CharacterView(props: Readonly<CharacterViewProp>) {
    let [currentChar, setCurrentChar] = React.useState(props.char);
    let [prevChar, setPrevChar] = React.useState(props.char);
    let [isChanging, setChanging] = React.useState(false);

    React.useEffect(() => {
        setCurrentChar(props.char);
        if (props.anim) {
            if (prevChar !== props.char) {
                setChanging(true);

                setTimeout(() => {
                    setChanging(false);
                    setPrevChar(props.char);
                }, 500);
            }
        }
    }, [props.char])

    return (
        <div
            className={ `character-view ${isChanging ? 'changing' : ''}` }>
            
            <div
                className="current-char-view">
                { currentChar }
            </div>

            {
                props.anim ?
                <div
                    className="prev-char-view">
                    { prevChar }
                </div> :
                ''
            }
        </div>
    )
}
