import React from 'react';
import TimerView from '../TimerView';
import './style.scss';

type IndexProp = {
    targetTime: number;
};

export default function Index(props: Readonly<IndexProp>) {
    let [current, setCurrent] = React.useState(new Date().getTime());

    React.useEffect(() => {
        setInterval(() => {
            setCurrent(new Date().getTime());
        }, 2);
        
        //setTimeout(() => {
        //    setCurrent(new Date().getTime());
        //}, 1000);
    }, []);

    return (
        <div
            className="index">
            <TimerView
                time={ props.targetTime - current }/>
        </div>
    );
}
