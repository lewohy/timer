import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import Index from '../components/Index';

let query: TimeQuery = queryString.parse(location.search, {
    parseNumbers: true
}) as TimeQuery;

if (typeof(query.year) !== 'number' ||
    typeof(query.month) !== 'number' ||
    typeof(query.day) !== 'number' ||
    typeof(query.hour) !== 'number' ||
    typeof(query.minute) !== 'number' ||
    typeof(query.second) !== 'number') {
    
    query.year = 2022;
    query.month = 3;
    query.day = 7;
    query.hour = 0;
    query.minute = 0;
    query.second = 0;
}

let targetTime = new Date(query.year, query.month, query.day, query.hour, query.minute, query.second);

let index = (
    <Index
        targetTime={ targetTime.getTime() }/>
);

ReactDOM.render(index, document.getElementById('index'));

window.scrollTo(0,1);

//document.body.addEventListener('click', e => {
//    document.body.requestFullscreen();
//});
