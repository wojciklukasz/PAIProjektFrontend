import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav className="navbar"
                 style={{
                     borderBottom: "solid 1px",
                     paddingBottom: "1rem",
                     paddingLeft: "1rem",
                     paddingRight: "1rem",
                     paddingTop: "1rem",
                 }}
            >
                <Link to="/">Strona główna</Link> |{" "}
                <Link to="/przetargi">Aktywne przetargi</Link> |{" "}
                <Link to="/przetargi/zakonczone">Zakończone przetargi</Link> |{" "}
                <Link to="/przetargi/dodaj">Ogłoś przetarg</Link>
            </nav>
            <Outlet/>
        </>
    );
}