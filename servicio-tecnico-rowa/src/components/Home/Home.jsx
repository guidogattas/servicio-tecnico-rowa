import Info from "./Info";
import Hero from "./Hero";
import Cards from "./Cards/Cards";
import CardPhrases from "./Cards/CardPhrases";
import Zones from "../common/Zones/Zones";

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <hr className="h-1 bg-customOrange" />

            <section className="flex flex-col gap-4 px-4 py-12 text-center bg-customWhite">
                <h3 className="font-bold mx-8 md:mx-[100px] text-3xl md:text-5xl mb-8 md:mb-12">
                    ¿Buscás TÉCNICOS ESPECIALIZADOS en plomería?
                </h3>

                <Cards />

                <p className="container mx-auto mt-12 mb-12 text-xl font-semibold md:mt-20 md:mb-20 md:text-4xl text-customGrey">
                    Todos nuestros trabajos tienen garantía y están realizados por profesionales. ¡Comunicate con nuestra empresa y te brindaremos soluciones de calidad!
                </p>
            </section>
            <Zones />
            <CardPhrases />
        </>
    );
};

export default Home;

