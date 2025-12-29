import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLatestVersion, getChampionDetails, getChampionLoading } from '../services/api';
import Layout from '../components/Layout';
import SkinGallery from '../components/SkinGallery';
import { motion } from 'framer-motion';

const ChampionDetail = () => {
    const { id } = useParams();
    const [champion, setChampion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const version = await getLatestVersion();
            if (version) {
                const data = await getChampionDetails(version, id);
                setChampion(data);
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading) return <Layout><div className="text-center text-[#c8aa6e] text-xl">Carregando...</div></Layout>;
    if (!champion) return <Layout><div className="text-center text-red-500 text-xl">Campeão não encontrado.</div></Layout>;

    return (
        <Layout>
            <div className="max-w-6xl mx-auto">
                <Link to="/" className="text-[#c8aa6e] hover:underline mb-4 inline-block">&larr; Voltar para Campeões</Link>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-1"
                    >
                        <div className="border-2 border-[#c8aa6e] p-1 bg-[#1e2328] mx-auto max-w-sm md:max-w-none">
                            <img src={getChampionLoading(champion.id)} alt={champion.name} className="w-full h-auto" />
                        </div>
                        <div className="mt-4 bg-[#1e2328] p-4 border border-[#c8aa6e]">
                            <h3 className="text-[#c8aa6e] font-bold mb-2 uppercase">Estatísticas</h3>
                            <div className="space-y-2">
                                <StatBar label="Ataque" value={champion.info.attack} />
                                <StatBar label="Defesa" value={champion.info.defense} />
                                <StatBar label="Magia" value={champion.info.magic} />
                                <StatBar label="Dificuldade" value={champion.info.difficulty} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-[#f0e6d2] uppercase tracking-wider mb-2">{champion.name}</h1>
                        <h2 className="text-2xl text-[#c8aa6e] uppercase tracking-widest mb-6">{champion.title}</h2>

                        <div className="bg-[#1e2328]/80 p-6 border-l-4 border-[#c8aa6e] mb-8">
                            <p className="text-lg leading-relaxed italic text-[#f0e6d2]">{champion.lore}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#c8aa6e] mb-4 uppercase tracking-wider border-b border-[#c8aa6e] pb-2 inline-block">Tags</h3>
                            <div className="flex gap-2">
                                {champion.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-[#c8aa6e] text-black font-bold uppercase text-sm rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <SkinGallery championId={champion.id} skins={champion.skins} />
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

const StatBar = ({ label, value }) => (
    <div className="flex items-center">
        <span className="w-24 text-sm text-[#f0e6d2] uppercase">{label}</span>
        <div className="flex-grow h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
                className="h-full bg-[#c8aa6e]"
                style={{ width: `${(value / 10) * 100}%` }}
            />
        </div>
        <span className="ml-2 text-sm text-[#c8aa6e] w-4 text-right">{value}</span>
    </div>
);

export default ChampionDetail;
