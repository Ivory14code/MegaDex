const megas = [
    ["Mega Venusaur", "venusaur-mega", "venusaur"],
    ["Mega Charizard X", "charizard-mega-x", "charizard"],
    ["Mega Charizard Y", "charizard-mega-y", "charizard"],
    ["Mega Blastoise", "blastoise-mega", "blastoise"],
    ["Mega Beedrill", "beedrill-mega", "beedrill"],
    ["Mega Pidgeot", "pidgeot-mega", "pidgeot"],
    ["Mega Raichu X", "raichu", "raichu"],
    ["Mega Raichu Y", "raichu", "raichu"],
    ["Mega Steelix", "steelix-mega", "steelix"],
    ["Mega Alakazam", "alakazam-mega", "alakazam"],
    ["Mega Gengar", "gengar-mega", "gengar"],
    ["Mega Victreebel", "victreebel-mega", "victreebel"],
    ["Mega Slowbro", "slowbro-mega", "slowbro"],
    ["Mega Kangaskhan", "kangaskhan-mega", "kangaskhan"],
    ["Mega Clefable", "clefable-mega", "clefable"],
    ["Mega Starmie", "starmie-mega", "starmie"],
    ["Mega Pinsir", "pinsir-mega", "pinsir"],
    ["Mega Gyarados", "gyarados-mega", "gyarados"],
    ["Mega Aerodactyl", "aerodactyl-mega", "aerodactyl"],
    ["Mega Dragonite", "dragonite", "dragonite"],
    ["Mega Mewtwo X", "mewtwo-mega-x", "mewtwo"],
    ["Mega Mewtwo Y", "mewtwo-mega-y", "mewtwo"],

    ["Mega Meganium", "meganium-mega", "meganium"],
    ["Mega Feraligatr", "feraligatr-mega", "feraligatr"],
    ["Mega Ampharos", "ampharos-mega", "ampharos"],
    ["Mega Scizor", "scizor-mega", "scizor"],
    ["Mega Heracross", "heracross-mega", "heracross"],
    ["Mega Skarmory", "skarmory", "skarmory"],
    ["Mega Houndoom", "houndoom-mega", "houndoom"],
    ["Mega Tyranitar", "tyranitar-mega", "tyranitar"],

    ["Mega Sceptile", "sceptile-mega", "sceptile"],
    ["Mega Blaziken", "blaziken-mega", "blaziken"],
    ["Mega Swampert", "swampert-mega", "swampert"],
    ["Mega Gardevoir", "gardevoir-mega", "gardevoir"],
    ["Mega Sableye", "sableye-mega", "sableye"],
    ["Mega Mawile", "mawile-mega", "mawile"],
    ["Mega Aggron", "aggron-mega", "aggron"],
    ["Mega Medicham", "medicham-mega", "medicham"],
    ["Mega Manectric", "manectric-mega", "manectric"],
    ["Mega Sharpedo", "sharpedo-mega", "sharpedo"],
    ["Mega Camerupt", "camerupt-mega", "camerupt"],
    ["Mega Altaria", "altaria-mega", "altaria"],
    ["Mega Banette", "banette-mega", "banette"],
    ["Mega Absol", "absol-mega", "absol"],
    ["Mega Absol Z", "absol", "absol"],
    ["Mega Glalie", "glalie-mega", "glalie"],
    ["Mega Salamence", "salamence-mega", "salamence"],
    ["Mega Metagross", "metagross-mega", "metagross"],
    ["Mega Latias", "latias-mega", "latias"],
    ["Mega Latios", "latios-mega", "latios"],
    ["Mega Rayquaza", "rayquaza-mega", "rayquaza"],

    ["Mega Lopunny", "lopunny-mega", "lopunny"],
    ["Mega Garchomp", "garchomp-mega", "garchomp"],
    ["Mega Garchomp Z", "garchomp", "garchomp"],
    ["Mega Lucario", "lucario-mega", "lucario"],
    ["Mega Lucario Z", "lucario", "lucario"],
    ["Mega Abomasnow", "abomasnow-mega", "abomasnow"],
    ["Mega Gallade", "gallade-mega", "gallade"],
    ["Mega Froslass", "froslass-mega", "froslass"],
    ["Mega Audino", "audino-mega", "audino"],
    ["Mega Falinks", "falinks-mega", "falinks"],

    ["Mega Emboar", "emboar-mega", "emboar"],
    ["Mega Excadrill", "excadrill-mega", "excadrill"],
    ["Mega Scolipede", "scolipede-mega", "scolipede"],
    ["Mega Scrafty", "scrafty-mega", "scrafty"],
    ["Mega Eelektross", "eelektross-mega", "eelektross"],
    ["Mega Chandelure", "chandelure-mega", "chandelure"],

    ["Mega Chesnaught", "chesnaught", "chesnaught"],
    ["Mega Delphox", "delphox", "delphox"],
    ["Mega Greninja", "greninja", "greninja"],
    ["Mega Pyroar", "pyroar-mega", "pyroar"],
    ["Mega Floette", "floette", "floette"],
    ["Mega Meowstic", "meowstic", "meowstic"],
    ["Mega Malamar", "malamar-mega", "malamar"],
    ["Mega Barbaracle", "barbaracle-mega", "barbaracle"],
    ["Mega Dragalge", "dragalge-mega", "dragalge"],
    ["Mega Hawlucha", "hawlucha-mega", "hawlucha"],

    ["Mega Zygarde", "zygarde-mega", "zygarde"],

    ["Mega Crabominable", "crabominable", "crabominable"],
    ["Mega Golisopod", "golisopod", "golisopod"],
    ["Mega Drampa", "drampa-mega", "drampa"],

    ["Mega Golurk", "golurk", "golurk"],
    ["Mega Staraptor", "staraptor", "staraptor"],
    ["Mega Heatran", "heatran", "heatran"],
    ["Mega Darkrai", "darkrai", "darkrai"],

    ["Mega Magearna", "magearna", "magearna"],
    ["Mega Zeraora", "zeraora", "zeraora"],

    ["Mega Scovillain", "scovillain", "scovillain"],
    ["Mega Glimmora", "glimmora", "glimmora"],

    ["Mega Chimecho", "chimecho", "chimecho"],
    ["Mega Baxcalibur", "baxcalibur", "baxcalibur"],

    ["Mega Tatsugiri", "tatsugiri", "tatsugiri"],

    ["Mega Diancie", "diancie-mega", "diancie"],

    ["Primal Groudon", "groudon-primal", "groudon"],
    ["Primal Kyogre", "kyogre-primal", "kyogre"],
];

const lista = document.getElementById("lista")
const buscador = document.getElementById("buscador")

let estado = JSON.parse(localStorage.getItem("megas")) || {}

function guardar() {
    localStorage.setItem("megas", JSON.stringify(estado))
    actualizarContadores()
}

function actualizarContadores() {

    let total = 0
    let shiny = 0
    let perfect = 0

    for (let k in estado) {

        if (estado[k] === "si") total++
        if (k.includes("-shiny")) shiny++
        if (k.includes("-perfect")) perfect++

    }

    document.getElementById("contadorTotal").innerText = total + " / " + megas.length
    document.getElementById("contadorShiny").innerText = "⭐ " + shiny
    document.getElementById("contadorPerfect").innerText = "💯 " + perfect

    let porcentaje = Math.round((total / megas.length) * 100);

    document.getElementById("progreso").style.width = porcentaje + "%";
    document.getElementById("porcentaje").innerText = porcentaje + "% completado";

}

megas.forEach(p => {

    const card = document.createElement("div")
    card.className = "card"

    const imgMega = `https://img.pokemondb.net/sprites/home/normal/${p[1]}.png`
    const imgBase = `https://img.pokemondb.net/sprites/home/normal/${p[2]}.png`

    const imgMegaShiny = `https://img.pokemondb.net/sprites/home/shiny/${p[1]}.png`
    const imgBaseShiny = `https://img.pokemondb.net/sprites/home/shiny/${p[2]}.png`

    const datosMovimientos = movimientos[p[0]] || {};

    const rapido = datosMovimientos.rapido || "";
    const cargado = datosMovimientos.cargado || "";

    const rapidoAlternativo = datosMovimientos.rapidoAlternativo || "";
    const cargadoAlternativo = datosMovimientos.cargadoAlternativo || "";

    const legacyRapido = datosMovimientos.legacyRapido || false;
    const legacyCargado = datosMovimientos.legacy || false;

card.innerHTML = `

<button class="perfect">100</button>
<button class="shiny">⭐</button>

<img class="pokeimg" src="${imgMega}" loading="lazy">

<div class="nombre">${p[0]}</div>

<div class="movimientos">

    <div class="movimiento">
        <span class="tipo-movimiento">⚡ Rápido</span>

        <span class="nombre-movimiento ${legacyRapido ? "legacy" : ""}">
            ${rapido}
            ${legacyRapido ? '<small>LEGACY</small>' : ""}
        </span>
    </div>

    ${
        rapidoAlternativo
        ? `
        <div class="movimiento segundo">
            <span class="tipo-movimiento">🔄 Rápido alternativo</span>
            <span class="nombre-movimiento">
                ${rapidoAlternativo}
            </span>
        </div>
        `
        : ""
    }

    <div class="movimiento">
        <span class="tipo-movimiento">💥 Cargado</span>

        <span class="nombre-movimiento ${legacyCargado ? "legacy" : ""}">
            ${cargado}
            ${legacyCargado ? '<small>LEGACY</small>' : ""}
        </span>
    </div>

    ${
        cargadoAlternativo
        ? `
        <div class="movimiento segundo">
            <span class="tipo-movimiento">🔄 Cargado alternativo</span>
            <span class="nombre-movimiento">
                ${cargadoAlternativo}
            </span>
        </div>
        `
        : ""
    }

</div>

<button class="si">SI</button>
<button class="no">NO</button>

`;

    lista.appendChild(card)

    const si = card.querySelector(".si")
    const no = card.querySelector(".no")
    const shiny = card.querySelector(".shiny")
    const perfect = card.querySelector(".perfect")
    const imagen = card.querySelector(".pokeimg")

    imagen.onerror = () => { imagen.src = imgBase }

    if (estado[p[0]] === "si") {
        si.classList.add("activo")
        card.classList.add("capturado")
    }

    if (estado[p[0]] === "no") {
        no.classList.add("activo")
    }

    if (estado[p[0] + "-shiny"]) {
        shiny.classList.add("activo")
        imagen.src = imgMegaShiny
        imagen.onerror = () => { imagen.src = imgBaseShiny }
    }

    if (estado[p[0] + "-perfect"]) perfect.classList.add("activo")

    si.onclick = () => {
        si.classList.add("activo")
        no.classList.remove("activo")
        card.classList.add("capturado")
        estado[p[0]] = "si"
        guardar()
    }

    no.onclick = () => {
        no.classList.add("activo")
        si.classList.remove("activo")
        card.classList.remove("capturado")
        estado[p[0]] = "no"
        guardar()
    }

    shiny.onclick = () => {

        shiny.classList.toggle("activo")

        if (shiny.classList.contains("activo")) {
            imagen.src = imgMegaShiny
            imagen.onerror = () => { imagen.src = imgBaseShiny }
            estado[p[0] + "-shiny"] = true
        } else {
            imagen.src = imgMega
            imagen.onerror = () => { imagen.src = imgBase }
            delete estado[p[0] + "-shiny"]
        }

        guardar()

    }

    perfect.onclick = () => {

        perfect.classList.toggle("activo")

        if (perfect.classList.contains("activo")) {
            estado[p[0] + "-perfect"] = true
        } else {
            delete estado[p[0] + "-perfect"]
        }

        guardar()

    }

})

actualizarContadores()

buscador.addEventListener("input", e => {

    let texto = e.target.value.toLowerCase()

    document.querySelectorAll(".card").forEach(card => {

        let nombre = card.querySelector(".nombre").innerText.toLowerCase()

        card.style.display = nombre.includes(texto) ? "block" : "none"

    })

})

document.getElementById("exportar").onclick = () => {

    const datos = JSON.stringify(estado);
    const blob = new Blob([datos], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "megadex-save.json";
    a.click();

};

document.getElementById("importar").onclick = () => {
    document.getElementById("archivoImportar").click();
};

document.getElementById("archivoImportar").addEventListener("change", e => {

    const archivo = e.target.files[0];
    const lector = new FileReader();

    lector.onload = () => {

        estado = JSON.parse(lector.result);
        guardar();
        location.reload();

    };

    lector.readAsText(archivo);

});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {

    menu.style.display =
        menu.style.display === "flex" ? "none" : "flex";

};

let filtroShinyActivo = false;

document.getElementById("filtroShiny").onclick = () => {

    filtroShinyActivo = !filtroShinyActivo;

    document.querySelectorAll(".card").forEach(card => {

        const shiny = card.querySelector(".shiny");

        if (!filtroShinyActivo) {
            card.style.display = "block";
        } else {
            card.style.display =
                shiny.classList.contains("activo") ? "block" : "none";
        }

    });

};

let filtroPerfectActivo = false;

document.getElementById("filtroPerfect").onclick = () => {

    filtroPerfectActivo = !filtroPerfectActivo;

    document.querySelectorAll(".card").forEach(card => {

        const perfect = card.querySelector(".perfect");

        if (!filtroPerfectActivo) {
            card.style.display = "block";
        } else {
            card.style.display =
                perfect.classList.contains("activo") ? "block" : "none";
        }

    });

};

document.getElementById("resetear").onclick = () => {

    if (confirm("¿Seguro que querés borrar todo tu progreso del MegaDex?")) {

        localStorage.removeItem("megas");
        location.reload();

    }

};