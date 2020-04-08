import getData from '../utils/getData';
import pokeball from '../assets/images/pokeball.png'

const Home = async() => {
        const pokemons = await getData();

        const view = `
      <div class="Characters">
        ${pokemons.results.map((pokemon, key) => `
          <article class="Character-item">
            <a href="#/${key+1}/">
              <img width="200" src=${pokeball} alt="pokeball">
              <h2>${pokemon.name}</h2>
            </a>
          </article>        
        `).join('')}          
      </div>`;
  return view;
}

export default Home;