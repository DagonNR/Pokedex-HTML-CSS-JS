const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://pa1.narvii.com/7402/fb3e64ac95aebaebe67cfdc166275796db4b8a60r1-226-453_128.gif")
        }
        else {
            return res.json();
        }
    });

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeAbilities = data.abilities;
        let pokeTypes = data.types;
        let pokeStats = data.stats;
        let pokeHeight = data.height;
        let pokeWeight = data.weight;
        let pokeName = data.name;
        let pokeId = data.id;
        pokeImage(pokeImg);
        pokeDataAbilities(pokeAbilities);
        pokeDataTypes(pokeTypes);
        pokeDataStats(pokeStats);
        pokeDataHeight(pokeHeight);
        pokeDataWeight(pokeWeight);
        pokeDataName(pokeName);
        pokeDataId(pokeId);
        console.log(pokeImg);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeDataAbilities = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const pokeAbilitiesNames = abilities.map(item => " " + item.ability.name.toUpperCase());
    pokeAbilities.innerHTML = pokeAbilitiesNames;
}

const pokeDataTypes = (types) => {
    const pokeTypes = document.getElementById("types");
    const pokeTypesNames = types.map(item => " " + item.type.name.toUpperCase());
    pokeTypes.innerHTML = pokeTypesNames;
}

const pokeDataStats = (stats) => {
    const pokeStats = document.getElementById("stats");
    const pokeStatsNumbers = stats.map(item => " " + item.base_stat + " " + item.stat.name.toUpperCase());
    pokeStats.innerHTML = pokeStatsNumbers;
}

const pokeDataHeight = (height) => {
    const pokeHeight = document.getElementById("height");
    pokeHeight.innerHTML = "Height: " + height;
}

const pokeDataWeight = (weight) => {
    const pokeWeight = document.getElementById("weight");
    pokeWeight.innerHTML = "Weight: " + weight;
}

const pokeDataName = (name) => {
    const pokeName = document.getElementById("name");
    pokeName.innerHTML = name.toUpperCase();
}

const pokeDataId = (id) => {
    const pokeId = document.getElementById("id");
    pokeId.innerHTML = "#" + id;
}