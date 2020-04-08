import Header from '../templates/Header';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import NotFound from '../pages/NotFound';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import iconPokeball from '../assets/images/icon-pokeball.png'

const routes = {
    '/': Home,
    '/:id': Pokemon,
    '/contact': 'Contanct',
};


const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconPokeball;
    document.getElementsByTagName('head')[0].appendChild(link);

    header.innerHTML = await Header();

    let hash = getHash();
    console.log("router -> hash", hash)
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : NotFound;

    content.innerHTML = await render();

};

export default router;