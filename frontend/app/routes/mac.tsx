import { Outlet } from "react-router";
import "../app.css";
import TableOfContents from "~/tableOfContents";

export default function Mac() {
    return(
        <>
        <TableOfContents/>
        <p className="hero-title mac-text">Mac</p>
        <Outlet/>
        </>
    );
}