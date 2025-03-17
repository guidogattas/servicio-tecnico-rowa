import WhatsAppLogo from '../../assets/icons/WhatsAppLogo.jsx';

const WhatsApp = ({ showText = true }) => {
    const phoneNumber = '5491131265226';
    const phoneNumberWA = '11 3126 5226';
    const message = 'Buenos días, quisiera consultarte por...';
    const encodedMessage = encodeURIComponent(message);

    /* Para corroborar si usamos celular o computadora, porque sino falla para mandar mensajes */
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const link = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    return (
        <div className='flex items-center p-2 mr-6 space-x-2'>
            <a
                href={link}
                rel="noopener noreferrer"
                {...(isMobile ? {} : { target: "_blank" })}
            >
                <WhatsAppLogo
                    height="70"
                    fill='white'
                    className="w-12 text-green-500 transition-colors duration-200 md:w-16 hover:text-green-700"
                />
            </a>
            {showText && (
                <div className='flex flex-col text-sm text-mainText md:text-2xl font-dm font-bold'>
                    <p>
                        {phoneNumberWA}
                    </p>
                    <p>
                        Contactanos por WhatsApp
                    </p>
                </div>
            )}
        </div>
    );
}

export default WhatsApp;
