import React from 'react';
import './style.scss';
import DividerView from './DividerView';
import ValueView from './ValueVIew';

type TimerViewProp = {
    time: number;
};

export default function TimerView(props: Readonly<TimerViewProp>) {
    return (
        <div
            className="timer-view">

            <ValueView
                id="day-view"
                label="days"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 / 60 / 60 / 24) }
                anim={ true }/>

            <DividerView
                id="day-view-divider"/>

            <ValueView
                id="hour-view"
                label="hours"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 / 60 / 60 % 24) }
                anim={ true }/>

            <DividerView
                id="hour-view-divider"/>

            <ValueView
                id="minute-view"
                label="minutes"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 / 60 % 60) }
                anim={ true }/>

            <DividerView
                id="minute-view-divider"/>

            <ValueView
                id="second-view"
                space={ 2 }
                spaceChar={ '0' }
                value={ Math.floor(props.time / 1000 % 60) }
                anim={ true }/>

            <DividerView
                char="."
                margin={ 4} />

            <ValueView
                id="milli-second-view"
                label="seconds"
                space={ 3 }
                spaceChar={ '0' }
                value={ Math.floor(props.time % 1000) }/>
        </div>
    );
}
