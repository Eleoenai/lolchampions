import React, { useState } from 'react';
import { getChampionSplash } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

const SkinGallery = ({ championId, skins }) => {
    const [selectedSkin, setSelectedSkin] = useState(skins[0]);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#c8aa6e] mb-4 uppercase tracking-wider border-b border-[#c8aa6e] pb-2 inline-block">Skins</h2>

            <div className="relative w-full aspect-video bg-black border border-[#c8aa6e] overflow-hidden rounded-lg shadow-2xl mb-4">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={selectedSkin.num}
                        src={getChampionSplash(championId, selectedSkin.num)}
                        alt={selectedSkin.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-center">
                    <h3 className="text-xl font-bold text-[#f0e6d2] uppercase">{selectedSkin.name === 'default' ? 'Original' : selectedSkin.name}</h3>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-4 p-2 pb-4 scrollbar-thin scrollbar-thumb-[#c8aa6e] scrollbar-track-[#1e2328]">
                {skins.map(skin => (
                    <div
                        key={skin.num}
                        className={`flex-shrink-0 cursor-pointer border-2 transition-all ${selectedSkin.num === skin.num ? 'border-[#c8aa6e] scale-105' : 'border-transparent hover:border-[#c8aa6e]/50'}`}
                        onClick={() => setSelectedSkin(skin)}
                    >
                        <img
                            src={getChampionSplash(championId, skin.num)}
                            alt={skin.name}
                            className="w-24 h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkinGallery;
