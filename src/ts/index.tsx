import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import Index from '../components/Index';

let query: TimeQuery = queryString.parse(location.search, {
    parseNumbers: true
}) as TimeQuery;

let targetTime = new Date(query.year, query.month, query.day, query.hour, query.minute, query.second);

console.log(targetTime)

let index = (
    <Index
    targetTime={ targetTime.getTime() }/>
);

ReactDOM.render(index, document.getElementById('index'));
