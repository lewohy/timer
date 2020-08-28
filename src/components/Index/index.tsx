import React from 'react';
import TimerView from '../TimerView';
import './style.scss';

type IndexProp = {
    targetTime: number;
};

export default function Index(props: Readonly<IndexProp>) {
    let [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setCurrent(new Date().getTime());
        }, 2);
    }, []);

    return (
        <div
            className="index">
            <TimerView
                time={ props.targetTime - current }/>
        </div>
    );
}
