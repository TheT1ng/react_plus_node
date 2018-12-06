import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Sidebar} from "./components/Sidebar";
import {Home} from './components/Home';
import {Services} from './components/Services';
import {Combine} from './components/Combine';
import {Sign} from './components/Sign';
import {AdminLogin} from './components/AdminLogin';
import {AdminPanel} from './components/AdminPanel';


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/sign" component={Sign}/>
                    <Route exact path="/admin" component={AdminLogin}/>
                    <Route exact path="/panel" component={AdminPanel}/>
                    <Combine>
                        <Route exact path="/" component={Home}/>
                        <Route path="/services" component={Services}/>
                    </Combine>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("index"));