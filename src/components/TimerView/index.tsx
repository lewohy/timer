import React from 'react';
import NumberView from './NumberVIew';
import './style.scss';
import DividerView from './DividerView';

type TimerViewProp = {
    time: number;
};

export default function TimerView(props: Readonly<TimerViewProp>) {
    return (
        <div
            className="timer-view">

            <NumberView
                id="day-view"
                label="days"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 / 60 / 60 / 24) }/>

            <DividerView/>

            <NumberView
                id="hour-view"
                label="hours"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 / 60 / 60 % 24) }/>

            <DividerView/>

            <NumberView
                id="minute-view"
                label="minutes"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 / 60 % 60) }/>

            <DividerView/>

            <NumberView
                id="second-view"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 % 60) }/>

            <DividerView
                char="."
                margin={ 4} />

            <NumberView
                id="milli-second-view"
                label="seconds"
                space={ 3 }
                spaceChar={ '0' }
                value={ Math.floor(props.time % 1000) }/>
        </div>
    );
}
