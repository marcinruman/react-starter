import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from "./Layout";

const app = document.querySelector('main');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Layout}></IndexRoute>
        </Route>
    </Router>,
    app
);
