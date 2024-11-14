import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar bg-primary navbar-expand-lg fixed-top">
                    <div className='container'>
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link formato01" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link formato01" to="/clientes">Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link formato01" to="/productos">Productos</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;
