import { motion } from "framer-motion";

const PedirCotizacionButton = () => {
    const phoneNumber = '5491131265226';
    const message = 'Buenos días, quisiera solicitar una cotización.';
    const encodedMessage = encodeURIComponent(message);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const link = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    return (
        <motion.a
            href={link}
            rel="noopener noreferrer"
            {...(isMobile ? {} : { target: "_blank" })}
            className="p-6 text-xl md:text-3xl font-bold text-white bg-customOrange max-w-[300px] place-self-center md:place-self-start hover:bg-customGrey hover:text-customOrange duration-150 rounded-3xl"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 50, damping: 10 }}
        >
            Pedir Cotización
        </motion.a>
    );
}

export default PedirCotizacionButton;
