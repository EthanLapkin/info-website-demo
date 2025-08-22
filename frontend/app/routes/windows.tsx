import { Outlet } from "react-router";
import "../app.css";

export default function Windows() {
    return(
        <>
        <p className="hero-title">Windows</p>
        <Outlet/>
        </>
    );
}