import NavBar from '../../NavBar.jsx';
import WhatsApp from '../../WhatsApp.jsx';

const Header = () => {
    return (
        <>
            <section className='flex flex-col md:flex-row items-center justify-around px-4 py-4 bg-customGrey text-customWhite font-inter font-bold text-[24px]'>
                <div className='flex items-center'>
                    <img className='w-[350px]' src="\images\Logo-tsy-png-white.png" alt="Logo Tu Service Ya" />
                </div>
                <div className='flex items-center gap-3 text-3xl'>
                    <WhatsApp showText={true} />
                </div>
            </section>
            <NavBar />
            <a
                className="fixed z-50 transition-transform duration-300 bottom-4 right-6 md:bottom-4 md:right-10 md:transform md:animate-bounce hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsApp showText={false} height="70" fill="white" className="fixed z-50 w-16 text-green-500 duration-300 bottom-4 right-6 md:bottom-4 md:right-10 md:transform md:animate-bounce hover:scale-110 hover:text-green-700" />
            </a>
        </>
    );
};

export default Header;
