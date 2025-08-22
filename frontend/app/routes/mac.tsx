import { Outlet } from "react-router";
import "../app.css";

export default function Mac() {
    return(
        <>
        <p className="hero-title">Mac</p>
        <Outlet/>
        </>
    );
}