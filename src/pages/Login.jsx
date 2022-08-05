import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login =()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
    return(
            <div>
                <h1>
                    page for authoresation
                </h1>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="input login"/>
                    <MyInput type="password" placeholder="input password"/>
                    <MyButton>into</MyButton>
                </form>
            </div>
    )
}
export default Login;