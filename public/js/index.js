import React from 'react';
import ReactDOM from 'react-dom'
import '../style/index.scss';


import {Header} from "./mainComponents/Header"
import {View} from "./mainComponents/View"
import { BrowserRouter } from 'react-router-dom';


import {Route, Switch} from "react-router-dom";
import {Enter} from "./mainComponents/Enter";
import {Edit} from "./mainComponents/Edit";



function App () {

        return (
            <div className="wrapper">
                    <Header />
                <Switch>
                        <Route exact path="/views/index"   component={View}/>
                        <Route path="/views/enter"  component={Enter}/>
                        <Route path="/views/edit"  component={Edit}/>
                </Switch>
            </div>
        )
}

ReactDOM.render( <BrowserRouter><App /></BrowserRouter>,document.querySelector('#wrap-all'))

