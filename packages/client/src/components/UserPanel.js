import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormPanel from './FormPanel'
import SignUp from './SignUp';
import Login from './Login';

function UserPanel() {
    return (
        <Router>
            <div className="user-panel">
                <div className="user-panel__content-container">
                    <div className="user-panel__text">
                        <h1 className="user-panel__header">Let's get productive.</h1>
                        <p className="user-panel__description">Børd helps you track your day-to-day tasks ensuring optimal prodcutivity.</p>
                    </div>
                    <Switch>
                        <Route path='/' component={FormPanel} exact />
                        <Route path='/sign-up' component={SignUp} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default UserPanel