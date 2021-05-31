import React from 'react';
import {
    Link,
} from 'react-router-dom';

function NavLinks() {
    return (
        <nav className="bg-gray-100 shadow-lg">
            <ul className="flex flex-row  p-2">
                <li className="px-8">
                    <Link to="/login">Login</Link>
                </li>
                <li className="px-8">
                    <Link to="/register">Register</Link>
                </li>
                <li className="px-8">
                    <Link to="/movies">Movies List</Link>
                </li>
                <li className="px-8">
                    <Link to="/todos">TODOS</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;
