import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import WhatsApp from '../WhatsApp.jsx';

const Header = () => {
    return (
        <>
            <section className='flex flex-col md:sticky md:top-0 md:z-20 md:flex-row justify-around  md:py-4 animated-bg text-customWhite font-dm font-bold text-[24px] overflow-hidden'>
                <div className='flex justify-center'>
                    <Link to="/" className='flex items-center'>
                        <img className='max-h-[140px] md:max-h-[100px]' src="\images\Logo.png" alt="Logo Tu Service Ya" />
                        <img className='hidden md:block ml-4 md:max-h-[80px]' src="\images\bombas_rowa-new.png" alt="Logo Tu Service Ya" />
                    </Link>
                </div>
                <NavBar />
            </section>

            <a
                className="fixed z-50 transition-transform duration-300 bottom-4 right-6 md:bottom-4 md:right-10 md:transform animate-bounce hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
            >

                <WhatsApp showText={false} height="70" fill="white" className="fixed z-50 w-16 text-green-500 duration-300 bottom-4 right-6 md:bottom-4 md:right-10 md:transform md:animate-bounce hover:scale-110 hover:text-green-700" />
            </a>
        </>
    );
};

export default Header;
