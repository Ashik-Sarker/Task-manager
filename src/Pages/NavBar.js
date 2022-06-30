import React from 'react';
import {Link} from 'react-router-dom'
const NavBar = () => {
    const menuItems = <>
    <li><Link to="/toDo">To-Do</Link></li>
    <li><Link to="/completedTask">Completed tasks</Link></li>
    <li><Link to="/calendar">Calendar</Link></li>
    </>
    return (
        <div>
            <div sticky="top" class="navbar bg-primary text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link class="btn btn-ghost normal-case text-xl" to="/">Task Manager</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;