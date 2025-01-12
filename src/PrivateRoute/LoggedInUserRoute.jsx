import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SingIn } from "../pages/SingIn";

export default function(){
    const user = useSelector((user)=> user.login.LoggedIn)
    return user ? <Outlet/> : <SingIn/>
}