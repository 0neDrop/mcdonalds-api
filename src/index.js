// mcdonaldApi.js
const axios = require('axios');

const calculateDistance = require('./utils/calculateDistance');

const API_URL = 'https://www.mcdonalds.com/googleappsv2/geolocation';

async function getNearestLocation(latitude, longitude) {
    try {
        const response = await axios.get(`${API_URL}`, {
            params: {
                latitude,
                longitude,
                radius: '8.045',
                maxResults: '1', // Fetch only the nearest one
                country: 'us',
                language: 'en-us',
            },
        });

        if (response.data && response.data.features.length > 0) {
            return response.data.features[0];
        } else {
            throw new Error('No locations found');
        }
    } catch (error) {
        throw error;
    }
}

async function getLocations(latitude, longitude, radius = '8.045', maxResults = '30') {
    try {
        const response = await axios.get(`${API_URL}`, {
            params: {
                latitude,
                longitude,
                radius,
                maxResults,
                country: 'us',
                language: 'en-us',
            },
        });

        if (response.data && response.data.features.length > 0) {
            return response.data.features;
        } else {
            throw new Error('No locations found');
        }
    } catch (error) {
        throw error;
    }
}

async function searchMcDonaldsSite(searchText, resultLimit = 10) {
    if (!searchText) {
      throw new Error("Missing searchText parameter");
    }
  
    const apiUrl = `https://www.mcdonalds.com/api/mcdcustomsearch.customSearch.json?searchRootPath=%2Fcontent%2Fmcdonalds%2Fus%2Fen-us&searchText=${encodeURIComponent(searchText)}&searchResultLimit=70&type=site`;
  
    try {
      const response = await axios.get(apiUrl);
      const results = response.data.splice(0, resultLimit).map(food => food.title);
      return results;
    } catch (error) {
      console.error(error);
      throw new Error("Something went horribly wrong, McDonald's is probably suspicious of you...");
    }
  }
  

module.exports = { getNearestLocation, getLocations, searchMcDonaldsSite };
