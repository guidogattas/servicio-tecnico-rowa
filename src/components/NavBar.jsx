import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Datos de las rutas
    const routes = [
        // { path: '/', label: 'INICIO' },
        { path: '/rowa', label: 'BOMBAS ROWA' },
        { path: '/plomeria', label: 'PLOMERÍA' },
        { path: '/calefon-termotanque', label: 'CALEFÓN / TERMOTANQUE' }
    ];

    // Clases de los Link
    const linkClasses = "block py-6 text-lg text-logoColor font-bold text-center transition duration-300 rounded hover:text-textNavBar hover:bg-bgHoverButtonNavBar w-full";

    return (
        <nav className="">
            <div className="flex md:text-sm lg:text-lg items-center justify-between ">
                <button
                    className="ml-auto text-textNavBar focus:outline-none md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6 px-4 py-4 text-logoColor" />
                </button>

                {/* Menú de escritorio */}
                <ul className="flex-row gap-2 hidden w-full md:flex  text-textNavBar font-dm items-center justify-center">
                    {routes.map(route => (
                        <li key={route.path} className="flex-1">
                            <Link to={route.path} className={linkClasses}>
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Menú móvil */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className="flex flex-col text-textNavBar font-dm items-center justify-center">
                    {routes.map(route => (
                        <li key={route.path} className="w-full">
                            <Link
                                to={route.path}
                                className={linkClasses}
                                onClick={() => setIsOpen(false)}
                            >
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
