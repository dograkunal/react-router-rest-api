import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
