import axios from 'axios';

const BASE_URL = 'https://ddragon.leagueoflegends.com';

export const getLatestVersion = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/versions.json`);
        return response.data[0];
    } catch (error) {
        console.error("Error fetching version:", error);
        return null;
    }
};

export const getChampions = async (version) => {
    try {
        const response = await axios.get(`${BASE_URL}/cdn/${version}/data/pt_BR/champion.json`);
        return Object.values(response.data.data);
    } catch (error) {
        console.error("Error fetching champions:", error);
        return [];
    }
};

export const getChampionDetails = async (version, championId) => {
    try {
        const response = await axios.get(`${BASE_URL}/cdn/${version}/data/pt_BR/champion/${championId}.json`);
        return response.data.data[championId];
    } catch (error) {
        console.error("Error fetching champion details:", error);
        return null;
    }
};

export const getChampionSplash = (championId, skinNum = 0) => {
    return `${BASE_URL}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`;
};

export const getChampionLoading = (championId, skinNum = 0) => {
    return `${BASE_URL}/cdn/img/champion/loading/${championId}_${skinNum}.jpg`;
};
