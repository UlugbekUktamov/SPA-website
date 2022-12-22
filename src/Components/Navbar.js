import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <li className="brand-logo">
                    <Link to="/" className="brand-logo">
                        React
                    </Link>
                </li>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
