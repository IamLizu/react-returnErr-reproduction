import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Yolo from "./components/Yolo";
import Greet from "./components/Greet";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Yolo} />
                    <ProtectedRoute exact path="/greet" component={Greet} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
