import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav
                class="navbar navbar-expand-lg border-bottom"
                style={{ backgroundColor: "#FFF" }}
                >

                <div class="container p-2">

                    <a class="navbar-brand" href="#">
                    <img
                        src="media/images/logo.svg"
                        style={{ width: "25%" }}
                        alt="Logo"
                    />
                    </a>

                    <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex" role="search">

                        <ul class="navbar-nav mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/forum">Forum</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/notes">Notes</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/notifications">Notifications</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>

                        </ul>

                    </form>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;