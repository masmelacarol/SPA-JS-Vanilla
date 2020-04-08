const getHash = () =>
    location.hash.slice(1).toLocateLoweCase().split('/')[1] || '/';


export default getHash;