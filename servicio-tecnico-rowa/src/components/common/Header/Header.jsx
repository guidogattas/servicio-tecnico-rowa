import { Link } from 'react-router-dom';
import NavBar from '../../NavBar.jsx';
import WhatsApp from '../../WhatsApp.jsx';

const Header = () => {
    return (
        <>
            <section className='flex flex-col md:flex-row justify-around  md:py-4 animated-bg text-customWhite font-dm font-bold text-[24px]'>
                <div className='flex justify-center'>
                    <Link to="/"> 
                    <img className='md:max-h-[100px]' src="\images\Logo.png" alt="Logo Tu Service Ya" />
                    </Link>
                    <img className='hidden md:block ml-4 md:max-h-[80px]' src="\images\bombas_rowa-new.png" alt="Logo Tu Service Ya" />
                </div>
                <NavBar />  
            </section>
                {/* <div className='flex items-center gap-3 text-3xl bg-bgWhatsAppBar items-center justify-center'>
                    <WhatsApp showText={true} />
                </div> */}
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
