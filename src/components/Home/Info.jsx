import InfoItem from "./InfoItem";

const Info = () => {
    const infoItems = [
        {
            iconSrc: "https://img.icons8.com/ios/50/bank-card-back-side--v1.png",
            title: "MÉTODOS DE PAGO",
            description: "Aceptamos todos los medios de pago",
        },
        {
            iconSrc: "https://img.icons8.com/ios-filled/50/checkmark--v1.png",
            title: "SOLO PROFESIONALES",
            description: "Nuestro personal está altamente capacitado para asesorarlo y brindarle las soluciones que necesita.",
        },
        {
            iconSrc: "https://img.icons8.com/ios/50/present.png",
            title: "SERVICIO 24/7",
            description: "Ofrecemos Servicio de Urgencias las 24 horas.",
        },
    ];

    return (
        <div className="flex flex-wrap justify-around py-8 text-center">
            {infoItems.map((item, index) => (
                <InfoItem
                    key={index}
                    iconSrc={item.iconSrc}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default Info;