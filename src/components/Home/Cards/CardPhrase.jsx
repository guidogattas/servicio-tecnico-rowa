// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const CardPhrase = ({ nombre, cantidadEstrellas, imagenUsuario, frase }) => {
    return (
        <div className="relative max-w-sm p-6 mx-auto bg-white rounded-lg shadow-lg ">
            {/* Logo de Google */}
            {/* <FontAwesomeIcon
                icon={faGoogle}
                className="absolute w-6 h-6 text-gray-500 top-4 right-4"
            /> */}

            {/* Imagen de usuario */}
            <div className="flex items-center pb-6">
                {/* <img
                    src={imagenUsuario || defaultUserImage}
                    alt={nombre}
                    className="w-12 h-12 border-2 border-gray-300 rounded-full"
                    onError={(e) => {
                        e.target.src = defaultUserImage; 
                    }}
                /> */}
                {/* <div className="ml-4"> */}
                <h3 className="text-lg font-semibold">{nombre}</h3>
                {/* </div> */}
            </div>

            {/* Frase */}
            <p className="mb-4 text-gray-600">{frase}</p>

            {/* Estrellas */}
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`h-5 w-5 ${i < cantidadEstrellas ? 'text-yellow-500' : 'text-gray-300'}`}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CardPhrase;
