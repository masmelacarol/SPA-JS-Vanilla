const Pokemon = () => {
    const view = `
      <div class="Pokemon-inner">
        <article class="Pokemon-card">
          <img src="image" alt="name">
          <h2>Name</h2>
        </article>
        <article class="Pokemon-card">
          <h3>Type: </h3>
          <h3>Heigth:</h3>
          <h3>Weight:</h3>
          <h3>Abilities: </h3>
          <h3>Moves: </h3>
        </article>
      </div>`;

    return view;
};

export default Pokemon;