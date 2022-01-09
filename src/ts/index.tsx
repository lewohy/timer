import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import Index from '../components/Index';

let query: TimeQuery = queryString.parse(location.search) as TimeQuery;

let fullscreean = false;

let targetTime = new Date(query.target);

if (targetTime.toDateString() === 'Invalid Date') {
    targetTime = new Date('2022-01-26 00:00:00');
}

let index = (
    <Index
        targetTime={ targetTime.getTime() }/>
);

ReactDOM.render(index, document.getElementById('index'));

window.scrollTo(0, 1);

document.body.addEventListener('click', e => {
    fullscreean = !fullscreean;

    fullscreean ? document.body.requestFullscreen() : document.exitFullscreen();
});
