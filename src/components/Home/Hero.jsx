import { motion } from "framer-motion";
// import PedirCotizacionButton from "../common/PedirCotizacion/PedirCotizacion";
import WhatsApp from "../common/WhatsApp";

const Hero = () => {
  return (
    <div className="relative pb-8 overflow-hidden ">
      {/* Fondo de imagen */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url('/images/background-5035259_1920.jpg')",
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-8 px-8 text-customGrey ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ opacity: { duration: 2 } }}
        >
          <img
            className="mx-auto max-h-[200px] my-14"
            src="/images/rowa-blanco-24.png"
            alt="Logo Tu Service Ya"
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-center text-customGrey drop-shadow md:text-7xl font-arial md:text-left"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, }}
        >
          <h1 className="text-4xl font-bold text-center text-customWhite drop-shadow md:text-7xl font-agency md:text-left">
            SERVICIO TÉCNICO ROWA
          </h1>
        </motion.h1>
        <motion.p
          className="text-xl text-center text-customWhite md:text-3xl drop-shadow md:text-left"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          Somos una empresa abocada al servicio de reparación y mantenimiento de
          bombas Rowa, calefones, termotanques y plomería en general. Contamos
          con movilidad propia, realizamos reparaciones en el día, personal
          calificado para asesorar y realizar informes técnicos.
        </motion.p>
        {/* <PedirCotizacionButton /> */}
        <motion.div className="flex items-center justify-center" initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ opacity: { duration: 2 } }}>
          <WhatsApp showText={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
