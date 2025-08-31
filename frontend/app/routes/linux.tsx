import { Outlet } from "react-router";
import "../app.css";
import TableOfContents from "~/tableOfContents";

export default function Linux() {
    return(
        <>
        <TableOfContents/>
        <p className="hero-title linux-text">Linux</p>
        <Outlet/>
        </>
    );
}