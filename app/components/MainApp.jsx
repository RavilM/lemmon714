import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Home from './src/home.jsx';
import Stuff from './src/stuff.jsx';
import Contact from './src/contact.jsx';

class MainApp extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className={'header'}>
                        <li><NavLink exact to={ '/' }>Home</NavLink></li>
                        <li><NavLink to={ '/stuff' }>Stuff</NavLink></li>
                        <li><NavLink to={ '/contact' }>Contact</NavLink></li>
                    </ul>
                    <div className={'content'}>
                        <Route exact path={ '/' } component={ Home }/>
                        <Route path={ '/stuff' } component={ Stuff }/>
                        <Route path={ '/contact' } component={ Contact }/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MainApp;