import Header from '../templates/Header';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import NotFound from '../pages/NotFound';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Pokemon,
    '/contact': 'Contanct',
};

const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    header.innerHTML = await Header();

    let hash = getHash();
    console.log("router -> hash", hash)
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : NotFound;

    content.innerHTML = await render();

};

export default router;