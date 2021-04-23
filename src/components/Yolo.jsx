import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
    const [secretToken, setSecretToken] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSecretToken(Cookies.get("secretToken"));
    }, [secretToken]);

    const loginClickHandler = async () => {
        const data = await axios.post(
            "http://localhost:5000/api/auth/login",
            {
                email: "eveh@gmail.com",
                password: "123456",
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        setSecretToken("");
        setSecretToken(data.data.token);

        let date = new Date();
        date.setDate(date.getTime() + 60 * 60 * 1000);
        document.cookie = `secretToken=${
            data.data.token
        }; expires=${date.toUTCString()};`;

        console.log(data.data);
        history.push("greet");
    };

    return secretToken ? (
        history.push("greet")
    ) : (
        <div>
            <button onClick={loginClickHandler}>Login</button>
            <h1>Yolo</h1>
        </div>
    );
}

export default Login;
