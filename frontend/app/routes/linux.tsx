import { Outlet } from "react-router";
import "../app.css";

export default function Linux() {
    return(
        <>
        <p className="hero-title linux-text">Linux</p>
        <Outlet/>
        </>
    );
}