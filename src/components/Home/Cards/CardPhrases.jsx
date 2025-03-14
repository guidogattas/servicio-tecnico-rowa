import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import userPhrases from '../../../data/userPhrases.json';
import CardPhrase from './CardPhrase';

// Opcionales: estos módulos permiten agregar paginación y navegación
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function CardPhrases() {
    return (
        <div className="p-10 py-10 pb-16 bg-gray-100">
            <h2 className="mb-10 text-4xl font-bold text-center">Testimonios</h2>
            <Swiper
                slidesPerView={1} // Muestra 3 tarjetas al mismo tiempo
                spaceBetween={20} // Espacio entre cada tarjeta
                loop={true} // Permite un loop infinito
                autoplay={{
                    delay: 3000, // Retraso de 3 segundos entre transiciones
                    disableOnInteraction: false, // Sigue funcionando aunque el usuario interactúe
                }}
                speed={1800}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true} // Botones de navegación
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                    1024: { slidesPerView: 3 }, // Para pantallas grandes, 3 tarjetas
                    768: { slidesPerView: 2 },  // Para pantallas medianas, 2 tarjetas
                    580: { slidesPerView: 1 },  // Para pantallas pequeñas, 1 tarjeta
                }}
            >
                {userPhrases.map((phrase, index) => (
                    <SwiperSlide key={index}>
                        <CardPhrase
                            nombre={phrase.nombre}
                            cantidadEstrellas={phrase.cantidad_estrellas}
                            imagenUsuario={phrase.imagen_usuario}
                            frase={phrase.frase}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardPhrases;
