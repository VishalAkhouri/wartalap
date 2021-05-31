import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Home from '../../container/home/home';
import Login from '../../container/login/login';
import Register from '../../container/register/register';
import Movies from '../../container/movies/movies';
import Todos from '../../container/todos/todos';

function AppRouter() {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/todos">
                    <Todos />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default AppRouter;