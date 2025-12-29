import React from 'react';
import { Link } from 'react-router-dom';
import { getChampionLoading } from '../services/api';
import { motion } from 'framer-motion';

const ChampionCard = ({ champion }) => {
    return (
        <Link to={`/champion/${champion.id}`} className="block overflow-hidden rounded-sm relative">
            <motion.div
                className="relative group overflow-hidden border border-[#c8aa6e] bg-[#1e2328] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={getChampionLoading(champion.id)}
                    alt={champion.name}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#f0e6d2] uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{champion.name}</h3>
                    <p className="text-base text-[#c8aa6e] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{champion.title}</p>
                </div>
            </motion.div>
        </Link>
    );
};

export default ChampionCard;
