import React from 'react';
import './Header.css';

const Header = () => {
    const MenuItems = [
        { id: 1, label: "Home", link: "/gwloverlap/#/" },
        { id: 2, label: "Calendar", link: "/gwl/#/calendar"},
        { id: 3, label: "TravelPlans", link: "/gwl/#/travelplans"},
    ]
    return (
        <div className='header-container'>
            <nav className = 'header-nav'>
                <ul className='header-list'> {MenuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} className='link'> {item.label}</a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
};

export default Header;