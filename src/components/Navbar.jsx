import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="#">
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className="#">
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className="#">
                {/*<a href="#">News</a>*/}
            </div>
            <div className="#">
                {/*<a href="#">Music</a>*/}
            </div>
            <div className="#">
                {/*<a href="#">Settings</a>*/}
            </div>
        </nav>
    );
};

export default Navbar;
