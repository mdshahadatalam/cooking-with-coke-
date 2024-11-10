import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { SignIn } from "../Validation/Validation";
import { RootLayout } from "../RootLayout";
export default function NotLoggedInUserRoute(){
    const user = useSelector((user)=> user.login.LoggedIn)
    return user ? < Navigate to={'/SignIn'}/> : <Outlet/>
}