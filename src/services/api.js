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
        // Try direct fetch first
        const response = await axios.get(`${BASE_URL}/cdn/${version}/data/pt_BR/champion/${championId}.json`);
        // Data dragon returns { data: { ChampionName: { ... } } }
        // We use Object.values to get the inner object regardless of the key name
        return Object.values(response.data.data)[0];
    } catch (error) {
        // If direct fetch fails (likely 403/404 due to case sensitivity), try to find the correct ID
        try {
            const allChampions = await getChampions(version);
            const correctChampion = allChampions.find(c => c.id.toLowerCase() === championId.toLowerCase());

            if (correctChampion) {
                const retryResponse = await axios.get(`${BASE_URL}/cdn/${version}/data/pt_BR/champion/${correctChampion.id}.json`);
                return Object.values(retryResponse.data.data)[0];
            }
        } catch (retryError) {
            console.error("Error retrying champion details:", retryError);
        }

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
