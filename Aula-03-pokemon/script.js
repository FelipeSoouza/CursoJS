const btnCarregarPokemon = document.getElementById("load-pokemon");

btnCarregarPokemon.addEventListener('click', function() {
    const listaPokemons = document.getElementById('list-pokemons');

    listaPokemons.innerHTML = '<div>Carregando Pokemons...</div>';

    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar o site');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results);

            listaPokemons.innerHTML = '';

            data.results.forEach(pokemon => {
                const pokemonCard = document.createElement('div');
                pokemonCard.classList.add('pokemon-card');  

                const pokemonName = document.createElement('h3');
                pokemonName.textContent = pokemon.name;  

                const imagePokemon = document.createElement("img");
                imagePokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`;

                pokemonCard.appendChild(imagePokemon);  
                pokemonCard.appendChild(pokemonName);  

                listaPokemons.appendChild(pokemonCard);  
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os Pokémons:", error);
            listaPokemons.innerHTML = "<div>Erro ao carregar os Pokémons.</div>";
        });
});
