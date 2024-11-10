import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SignIn } from "../Validation/Validation";
export default function LoggedInUserRoute(){
    const user = useSelector((user)=> user.login.LoggedIn)
    return user ? <Outlet/> : <SignIn/>
}