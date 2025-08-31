import { Outlet } from "react-router";
import "../app.css";
import TableOfContents from "~/tableOfContents";

export default function Windows() {
    return(
        <>
        <TableOfContents/>
        <p className="hero-title windows-text">Windows</p>
        <Outlet/>
        </>
    );
}