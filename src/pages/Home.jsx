import React, { useState, useEffect } from 'react';
import { getLatestVersion, getChampions } from '../services/api';
import ChampionCard from '../components/ChampionCard';
import Layout from '../components/Layout';

const Home = () => {
    const [champions, setChampions] = useState([]);
    const [filteredChampions, setFilteredChampions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const version = await getLatestVersion();
            if (version) {
                const data = await getChampions(version);
                setChampions(data);
                setFilteredChampions(data);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const results = champions.filter(champion =>
            champion.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChampions(results);
    }, [searchTerm, champions]);

    return (
        <Layout>
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar campeão..."
                    className="w-full max-w-md p-3 bg-[#1e2328] border border-[#c8aa6e] text-[#f0e6d2] focus:outline-none focus:ring-2 focus:ring-[#c8aa6e] placeholder-gray-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="text-center text-[#c8aa6e] text-xl">Carregando campeões...</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {filteredChampions.map(champion => (
                        <ChampionCard key={champion.id} champion={champion} />
                    ))}
                </div>
            )}
        </Layout>
    );
};

export default Home;
