import React from "react";
import { Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authToken = Cookies.get("authToken");
    const history = useHistory();

    const renderComp = (props) => {
        if (authToken) {
            return <Component {...props} />;
        } else {
            history.push("/");
            return null;
        }
    };

    return <Route {...rest} render={renderComp} />;
};

export default ProtectedRoute;
