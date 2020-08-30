import React from 'react';
import './style.scss';
import DividerView from './DividerView';
import ValueView from './ValueVIew';
import Box from './Box';

type TimerViewProp = {
    time: number;
};

export default function TimerView(props: Readonly<TimerViewProp>) {
    return (
        <div
            className="timer-view">

            <Box
                id="day-view"
                label="days">

                <ValueView
                    space={ 2 }
                    spaceChar={ '0' }
                    value={ Math.floor(props.time / 1000 / 60 / 60 / 24) }
                    anim={ true }/>
            </Box>

            <DividerView
                id="day-view-divider"/>

            <Box
                id="hour-view"
                label="hours">

                <ValueView
                    space={ 2 }
                    spaceChar={ '0' }
                    value={ Math.floor(props.time / 1000 / 60 / 60 % 24) }
                    anim={ true }/>
            </Box>

            <DividerView
                id="hour-view-divider"/>

            <Box
                id="minute-view"
                label="minutes">

                <ValueView
                    space={ 2 }
                    spaceChar={ '0' }
                    value={ Math.floor(props.time / 1000 / 60 % 60) }
                    anim={ true }/>
            </Box>

            <DividerView
                id="minute-view-divider"/>

            <Box
                id="second-view"
                label="seconds">

                <ValueView
                    space={ 2 }
                    spaceChar={ '0' }
                    value={ Math.floor(props.time / 1000) % 60 }
                    anim={ true }/>

                <DividerView
                    char="."
                    margin={ 4 }/>

                <ValueView
                    space={ 3 }
                    spaceChar={ '0' }
                    value={ Math.floor(props.time % 1000) }
                    anim={ false }/>
            </Box>
        </div>
    );
}
