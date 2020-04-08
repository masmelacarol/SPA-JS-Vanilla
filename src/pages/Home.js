import getData from '../utils/getData';
import pokeball from '../assets/images/pokeball.png'

const Home = async() => {
        const pokemons = await getData();

        const view = `
      <div class="Pokemon">
        ${pokemons.results.map((pokemon, key) => `
          <article class="Pokemon-item">
            <a href="#/${key+1}/">
              <img src=${pokeball} alt="pokeball">
              <h2>${pokemon.name}</h2>
            </a>
          </article>        
        `).join('')}          
      </div>`;
  return view;
}

export default Home;