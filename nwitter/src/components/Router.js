import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../routes/Home";
import Auth from "../routes/Auth";


const AppRouter = ({isLogggedIn}) =>{

    return(
    <Router>
        <Switch>
            {isLogggedIn ? (
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </>
            ):(
                <Route exact path="/">
                    <Auth />
                </Route>
            )}
        </Switch>
    </Router>
    )
};

export default AppRouter;