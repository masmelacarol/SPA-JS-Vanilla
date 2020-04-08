import Header from '../templates/Header';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import NotFound from '../pages/NotFound';

const routes = {
    '/': Home,
    '/:id': Pokemon,
    '/contact': 'Contanct',
};

const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    header.innerHTML = await Header();
};

export default router;