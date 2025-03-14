import React, { useState, useEffect } from 'react';
import { zonasCABA, zonaNorte, zonaSur, zonaOeste } from '../../../data/zones.json';

const Zones = () => {
    const [expandedZones, setExpandedZones] = useState({});

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setExpandedZones({});
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleZone = (zone) => {
        setExpandedZones(prev => ({ ...prev, [zone]: !prev[zone] }));
    };

    const renderZoneList = (zoneData, zoneTitle) => (
        <>
            <button
                className="inline-flex items-center justify-center w-full h-12 text-lg font-semibold text-white transition duration-200 rounded-md cursor-pointer bg-customOrange hover:bg-opacity-90 md:hidden"
                onClick={() => toggleZone(zoneTitle.toLowerCase())}
            >
                {zoneTitle}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedZones[zoneTitle.toLowerCase()] ? 'max-h-screen' : 'max-h-0'}`}>
                {expandedZones[zoneTitle.toLowerCase()] && (
                    <ul className="space-y-1 list-inside">
                        {zoneData.map((municipio, index) => (
                            <li key={index} className="text-lg transition duration-200 text-customGrey hover:text-customOrange">
                                {municipio}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="hidden md:flex md:flex-col">
                <h4 className="mb-4 text-2xl font-bold text-customOrange">{zoneTitle}</h4>
                <ul className="space-y-1 list-inside">
                    {zoneData.map((municipio, index) => (
                        <li key={index} className="text-lg transition duration-200 text-customGrey hover:text-customOrange">
                            {municipio}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

    return (
        <section className='font-bold bg-customWhite'>
            <div className="p-6 mx-auto rounded-lg shadow-md">
                <h2 className="mb-6 text-5xl font-bold text-center text-customOrange">Zonas de Servicio</h2>

                {/* <div className="flex items-center justify-center mt-6">
                    <p className="p-4 text-2xl font-semibold text-center bg-black rounded-lg shadow-md text-customOrange">
                        Listos para ofrecer soluciones rápidas y efectivas
                    </p>
                </div> */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Zonas de CABA */}
                    <div className="p-4 rounded-lg shadow-sm">
                        <button
                            className="inline-flex items-center justify-center w-full h-12 mb-2 text-lg font-semibold text-white transition duration-200 rounded-md cursor-pointer bg-customOrange hover:bg-opacity-90 md:hidden"
                            onClick={() => toggleZone('caba')}
                        >
                            Zonas de CABA
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedZones['caba'] ? 'max-h-screen' : 'max-h-0'}`}>
                            {expandedZones['caba'] && (
                                <ul className="grid grid-cols-2 gap-2">
                                    {zonasCABA.map((barrio, index) => (
                                        <li key={index} className="text-lg text-center transition duration-200 text-customGrey hover:text-customOrange">
                                            {barrio}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="hidden md:block">
                            <h3 className="mb-4 text-2xl font-bold text-center text-customOrange">Zonas de CABA</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {zonasCABA.map((barrio, index) => (
                                    <li key={index} className="text-lg text-center transition duration-200 text-customGrey hover:text-customOrange">
                                        {barrio}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Zonas Norte, Sur y Oeste */}
                    <div className="p-4 rounded-lg shadow-sm">
                        {/* <h3 className="mb-2 text-2xl font-bold text-center text-black">Otras Zonas</h3> */}
                        <div className="flex flex-col space-y-2 text-2xl text-center md:flex-row md:space-x-4">
                            {renderZoneList(zonaNorte, 'Zona Norte')}
                            {renderZoneList(zonaSur, 'Zona Sur')}
                            {renderZoneList(zonaOeste, 'Zona Oeste')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Zones;
