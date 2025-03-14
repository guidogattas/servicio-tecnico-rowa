import Cards from "../Home/Cards/Cards";
import Info from "../Home/Info";
import PedirCotizacionButton from "../common/PedirCotizacion/PedirCotizacion";
import Zones from "../common/Zones/Zones";
import { motion } from "framer-motion";

const Plomeria = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
                    style={{ backgroundImage: "url('/images/bg/side-view-man-working-as-plumber-copia.webp')" }}
                ></div>

                <div className="relative z-10 p-4 py-16 flex flex-col gap-8 text-customGrey md:ml-[2vw] md:mr-[50vw] md:py-[100px] md:gap-[100px] md:items-start items-center">
                    <motion.h3
                        className="text-3xl font-bold text-center md:text-left text-customGrey drop-shadow md:text-7xl font-arial"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Plomería General
                    </motion.h3>
                    <motion.p
                        className="text-lg text-center text-black md:text-left md:text-3xl drop-shadow"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Soluciones rápidas y garantizadas para su hogar. Nuestro equipo de técnicos especializados está listo para brindarle la mejor atención en reparaciones y mantenimiento, con un servicio confiable y de calidad.
                    </motion.p>
                    <PedirCotizacionButton />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pb-8 bg-gray-100">
                <h3 className="p-6 text-3xl font-bold text-center md:text-4xl">Nuestra forma de trabajo</h3>
                <p className="px-4 py-4 text-lg font-semibold text-center md:text-2xl">
                    Realizamos una visita a su hogar para evaluar el estado de la grifería y los sistemas de plomería.
                    Nuestro equipo especializado se encargará de ofrecer un análisis detallado y recomendaciones personalizadas
                    para cada situación. A continuación, le proporcionamos un presupuesto claro y preciso para los servicios
                    necesarios. Una vez que contemos con la aprobación del cliente, procederemos a llevar a cabo las reparaciones
                    y mantenimientos necesarios, asegurando un trabajo de calidad y eficiencia.
                </p>

                <div className="flex flex-col gap-6 p-6 text-lg font-semibold text-left md:flex-row md:gap-10 md:text-2xl text-customGrey">
                    {/* Sección Plomería General */}
                    <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2">
                        <h4 className="mb-4 text-2xl font-bold md:text-3xl">Plomería General</h4>
                        <ul className="pl-5 space-y-2 list-disc md:space-y-4">
                            <li><strong>Cambio y mantenimiento de grifería:</strong> instalación de nuevas griferías y mantenimiento preventivo.</li>
                            <li><strong>Reparación de pérdidas de agua:</strong> solución de fugas en cañerías y juntas.</li>
                            <li><strong>Armado de cañerías nuevas:</strong> diseño e instalación de sistemas de cañerías para nuevos proyectos.</li>
                            <br /><span className="text-sm font-bold text-red-600 md:text-lg">Nota: no realizamos destapaciones.</span>
                        </ul>
                    </div>

                    {/* Sección Sanitarios y Baños */}
                    <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2">
                        <h4 className="mb-4 text-2xl font-bold md:text-3xl">Sanitarios y Baños</h4>
                        <ul className="pl-5 space-y-2 list-disc md:space-y-4">
                            <li><strong>Reparación y mantenimiento de inodoros y bidets:</strong> ajuste y cambio de flexibles y piezas defectuosas.</li>
                            <li><strong>Cambio y reparación de mochilas de baño:</strong> revisión completa de las mochilas, incluyendo flotantes y mecanismos internos.</li>
                            <li><strong>Instalación y reparación de cuadros de duchas:</strong> adaptado a cualquier tipo de instalación.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Cards />
            <hr className="h-2 bg-customOrange" />
            <Info />
            <hr className="h-2 bg-customOrange" />
            <Zones />
        </>
    );
};

export default Plomeria;
