import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/navbar/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    // to check firebase auth state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                        email: user.email,
                        token: idTokenResult.token,
                    },
                });
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <Header />
            <ToastContainer />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register/complete" component={RegisterComplete} />
                <Route path="/register" component={Register} />
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
};

export default App;
