import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Pokemon = async() => {

        const id = getHash();
        console.log("Pokemon -> id", id)
        const pokemon = await getData(id);
        console.log("Pokemon -> pokemon", pokemon)
        const view = `
      <div class="Pokemon-inner">
        <article class="Pokemon-card">
          <img src=${pokemon.sprites.front_default} alt="name">
          <h2>${pokemon.name}</h2>
        </article>
        <article class="Pokemon-card">
          <h3>Type: 
            ${pokemon.types.map(type => `
              <span>${type.type.name}</span>
            `)}
            
          </h3>
          
          <h3>Heigth: <span>${pokemon.height} cm </span></h3>
          <h3>Weight: <span>${pokemon.weight * 0.1} kg </span></h3>
          <h3>Abilities: 
            ${pokemon.abilities.map(ability => `
            <span>${ability.ability.name}</span>
          `)}
          </h3>
          <h3>Base experience: <span>${pokemon.base_experience}</span></h3>
        </article>
      </div>`;

    return view;
};

export default Pokemon;