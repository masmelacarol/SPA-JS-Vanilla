const API = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async(id) => {
    const apiUrl = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fecth error', error);
    }
};

export default getData;