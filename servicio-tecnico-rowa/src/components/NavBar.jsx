import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Clases de los Link
    const linkClasses = "block py-8 font-bold text-center transition duration-300 rounded hover:bg-bgHoverButtonNavBar";

    return (
        <nav className="bg-bgNavBar">
            <div className="flex items-center justify-between px-4 py-4">
                <button
                    className="ml-auto text-textNavBar focus:outline-none md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-8 h-8" />
                </button>

                <ul className="flex-row hidden w-full md:flex text-textNavBar font-dm">
                    <li className="flex-1">
                        <Link
                            to="/"
                            className={linkClasses}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li className="flex-1">
                        <Link
                            to="/rowa"
                            className={linkClasses}
                        >
                            Reparación de Bombas Rowa
                        </Link>
                    </li>
                    <li className="flex-1">
                        <Link
                            to="/plomeria"
                            className={linkClasses}
                        >
                            Plomería
                        </Link>
                    </li>
                    <li className="flex-1">
                        <Link
                            to="/calefon-termotanque"
                            className={linkClasses}
                        >
                            Calefón / Termotanque
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Menú móvil */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <ul className="flex flex-col text-textNavBar font-dm">
                    <li>
                        <Link
                            to="/"
                            className={linkClasses}
                            onClick={() => setIsOpen(false)}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/rowa"
                            className={linkClasses}
                            onClick={() => setIsOpen(false)}
                        >
                            Reparación de Bombas Rowa
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/plomeria"
                            className={linkClasses}
                            onClick={() => setIsOpen(false)}
                        >
                            Plomería
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/calefon-termotanque"
                            className={linkClasses}
                            onClick={() => setIsOpen(false)}
                        >
                            Calefón / Termotanque
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
