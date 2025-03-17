import Cards from "../Home/Cards/Cards";
import Info from "../Home/Info";
import PedirCotizacionButton from "../common/PedirCotizacion/PedirCotizacion";
import Zones from "../common/Zones/Zones";
import { motion } from "framer-motion";

const CalefonTermotanque = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
          style={{ backgroundImage: "url('/images/bg/iStock-1329466922-1920w.webp')" }}
        ></div>

        <div className="relative z-10 p-4 py-16 flex flex-col gap-8 text-customGrey md:ml-[2vw] md:mr-[50vw] md:py-[100px] md:gap-[100px] md:items-start items-center">
          <motion.h3
            className="text-3xl font-bold text-center md:text-left text-customGrey drop-shadow md:text-7xl font-arial"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            Calefón / Termotanque
          </motion.h3>
          <motion.p
            className="text-lg text-center text-black md:text-left md:text-3xl drop-shadow"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
          >
            Nuestro equipo especializado asegura un servicio rápido y confiable para instalación, mantenimiento y reparación de calefones y termotanques, brindando siempre la mejor atención y resultados garantizados.
          </motion.p>
          <PedirCotizacionButton />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-8 bg-gray-100">
        <h3 className="p-4 text-3xl font-bold text-center md:p-8 md:text-4xl">Nuestra forma de trabajo</h3>
        <p className="p-4 text-lg font-semibold text-center md:p-8 md:text-2xl">
          Realizamos la visita a domicilio para analizar el problema a solucionar.
          Brindamos un análisis y diagnóstico del problema para resolver de la manera más rápida y eficiente.
          Se detalla el presupuesto y las tareas de mantenimiento y/o reparación a realizar.
          Con el consentimiento del cliente procedemos a la reparación.
          Como último, realizamos un ajuste y limpieza del equipo para aumentar su durabilidad y asegurar un correcto funcionamiento.
        </p>

        <h4 className="mx-4 my-6 text-2xl font-bold text-center md:mx-6 md:my-10 md:text-3xl">Instalación de Termotanques y Calefones</h4>
        <p className="mx-4 mb-2 text-lg md:mx-6 md:mb-4 md:text-2xl">Ofrecemos instalación de termotanques y calefones de manera profesional.</p>

        <div className="flex flex-wrap justify-center gap-6 p-4 text-lg font-semibold text-left md:gap-10 md:p-10 md:text-2xl text-customGrey">
          {/* Sección Calefón */}
          <div className="w-full p-4 bg-white rounded-lg shadow-md md:w-1/2 md:p-6">
            <h4 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">Calefón</h4>
            <ul className="pl-4 space-y-1 list-disc md:space-y-2">
              <li>
                <strong>Soldadura de serpentina:</strong> realizamos trabajos de soldadura especializados para el correcto funcionamiento del calefón.
              </li>
              <li>
                <strong>Mantenimiento completo:</strong> diagnóstico, limpieza y ajustes para prolongar la vida útil del equipo.
              </li>
            </ul>
          </div>

          {/* Sección Termotanque */}
          <div className="w-full p-4 bg-white rounded-lg shadow-md md:w-1/2 md:p-6">
            <h4 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">Termotanque</h4>
            <ul className="pl-4 space-y-1 list-disc md:space-y-2">
              <li>
                <strong>Service completo:</strong> incluye limpieza y revisión exhaustiva para asegurar un funcionamiento óptimo.
              </li>
              <li>
                <strong>Importante:</strong> no realizamos reparaciones de pinchaduras en el termotanque, ya que no tienen solución duradera.
              </li>
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

export default CalefonTermotanque;
