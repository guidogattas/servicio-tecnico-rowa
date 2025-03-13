import { motion } from "framer-motion";
import PedirCotizacionButton from "../common/PedirCotizacion/PedirCotizacion";

const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Fondo de imagen */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
                style={{ backgroundImage: "url('/images/bg/serv-grales-2-rowa.jpg')" }}
            ></div>

            {/* Contenido */}
            <div className="relative z-10 p-4 py-16 flex flex-col gap-12 text-customGrey md:ml-[50vw] md:py-[100px] md:gap-[100px]">
                <motion.h1
                    className="text-4xl font-bold text-center text-customGrey drop-shadow md:text-7xl font-arial md:text-left"
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }}
                >
                    <h1>
                        TU SERVICE YA
                    </h1>
                </motion.h1>
                <motion.p
                    className="text-xl text-center text-black md:text-3xl drop-shadow md:text-left"
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
                >
                    Somos una empresa abocada al servicio de reparación y mantenimiento de bombas Rowa, calefones, termotanques y plomería en general. Contamos con movilidad propia, realizamos reparaciones en el día, personal calificado para asesorar y realizar informes técnicos.
                </motion.p>
                <PedirCotizacionButton />

            </div>
        </div>
    );
};

export default Hero;
