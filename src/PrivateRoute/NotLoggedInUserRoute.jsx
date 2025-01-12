import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { SignIn } from "../Validation/Validation";
export default function(){
    const user = useSelector((user)=> user.login.LoggedIn)
    return user ? < Navigate to={'/'}/> : <Outlet/>
}