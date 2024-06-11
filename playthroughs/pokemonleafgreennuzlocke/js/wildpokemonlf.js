const tableHeaders = [
    "Pokémon",
    "Level",
    "Type",
    "Encounter Rate",
    "Insight"
];

function populateTable(tableData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

    // Check if the table exists
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;  // Exit the function if no table found
    }

    const tbody = table.getElementsByTagName("tbody")[0];

    // Clear existing rows in tbody
    tbody.innerHTML = "";

    // Create table header row
    const headerRow = document.createElement("tr");
    tableHeaders.forEach(header => {
        const headerCell = document.createElement("th");
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    });
    tbody.appendChild(headerRow);

    // Loop through each Pokemon data (object)
    tableData.forEach(pokemonData => {
        const rowElement = document.createElement("tr");

        // Combine name, image, and success indicator in a single cell
        const nameCell = document.createElement("td");
        const pokemonName = pokemonData.name; // Access name property
        const pokemonlevel = pokemonData.level; // Access name property

        if (pokemonName.includes("<span class='succenc'>")) {
            rowElement.classList.add("succenc"); // Add success class to entire row
        }

        else if (pokemonName.includes("<span class='caughtpokemon'>")) {
            rowElement.classList.add("caughtpokemon"); // Add success class to entire row
        }

        else if (pokemonlevel.includes("<br>")) {
            document.write("<br>");
        }

        const nameContent = document.createElement("div");
        nameContent.innerHTML = pokemonName; // Add name with HTML for icons

        const pokemonImage = document.createElement("img");
        pokemonImage.classList.add("nopad");
        pokemonImage.setAttribute("src", pokemonData.image); // Access image property

        nameCell.appendChild(nameContent);
        nameCell.appendChild(pokemonImage);
        rowElement.appendChild(nameCell);

        // Add level cell
        const levelCell = document.createElement("td");
        levelCell.textContent = pokemonData.level;
        rowElement.appendChild(levelCell);

        // Add type cell with image
        const typeCell = document.createElement("td");
        const typeImage = document.createElement("img");
        typeImage.setAttribute("src", pokemonData.type);
        typeCell.appendChild(typeImage);
        rowElement.appendChild(typeCell);

        // Add encounter rate cell
        const encounterRateCell = document.createElement("td");
        encounterRateCell.textContent = pokemonData.encounterRate;
        rowElement.appendChild(encounterRateCell);

        // Add insight cell
        const insightCell = document.createElement("td");
        insightCell.textContent = pokemonData.insight;
        rowElement.appendChild(insightCell);

        tbody.appendChild(rowElement);
    });
}

function showAll(className) {
    const tables = document.querySelectorAll(`.${className}`);
    tables.forEach(table => {
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(row => {
            row.style.display = "";
        });
    });
}

function showCaught(className) {
    const tables = document.querySelectorAll(`.${className}`);
    tables.forEach(table => {
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(row => {
            if (row.classList.contains("succenc")) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
}

// Example usage for buttons affecting multiple tables with the 'pokemon-table' class
document.getElementById("showAll").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught").addEventListener("click", () => showCaught("pokemon-table"));


//episode 1
const oaklab = [
    {
        name: "Bulbasaur",
        image: bulbasaur,
        level: "5",
        type: grassPoison,
        encounterRate: "Gift",
        insight: "The best choice for this region if you want to have an easier time with the Nuzlocke and in the game in general."
    },
    {
        name: "Charmander",
        image: charmander,
        level: "5",
        type: fire,
        encounterRate: "Gift",
        insight: "Probably the hardest one to use due to the unfavorable match up with the first two gym leaders but somewhat decent if used properly."
    },
    {
        name: "<span class='succenc'>Squirtle</span>",
        image: squirtle,
        level: "5",
        type: water,
        encounterRate: "Gift",
        insight: "Somewhere in the middle between Bulbasaur and Charmander but more on the side of being easier due to the tankingness and overall reliability,"
    }
];

const route1 = [
    {
        name: "<span class='succenc'>Pidgey</span>",
        image: pidgey,
        level: "2-5",
        type: normalFlying,
        encounterRate: "50%",
        insight: "Decent flyer in a Nuzlocke but there are better flying types in this region that fulfills the role better."
    },
    {
        name: "Rattata",
        image: rattata,
        level: "2-4",
        type: normal,
        encounterRate: "50%",
        insight: "A good HM slave for the whole region but can still be fighter in the early game. Only good trainers can keep their Rattata/Raticate through the end of the challenge."
    }
];

const route2 = [
    {
        name: "<span class='caughtpokemon'>Pidgey </span>",
        image: pidgey,
        level: "2-5",
        type: normalFlying,
        encounterRate: "45%",
        insight: "Decent flyer in a Nuzlocke but there are better flying types in this region that fulfills the role better."
    },
    {
        name: "Rattata",
        image: rattata,
        level: "2-5",
        type: normal,
        encounterRate: "45%",
        insight: "A good HM slave for the whole region but can still be fighter in the early game. Only good trainers can keep their Rattata/Raticate through the end of the challenge."
    },
    {
        name: "Caterpie",
        image: caterpie,
        level: "4-5",
        type: bug,
        encounterRate: "5%",
        insight: "Make sure to evolve this Pokemon as soon as you can to fully utilize this Pokemon's strength. Though only useful in the early game."
    },
    {
        name: "<span class='succenc'>Weedle</span>",
        image: weedle,
        level: "4-5",
        type: bugPoison,
        encounterRate: "5%",
        insight: "If I\'m honest, probably worse than Caterpie due to the limited movepool but can still used early game as a somewhat reliable attacker."
    }
];

const route22 = [
    {
        name: "<span class='succenc'>Rattata</span>",
        image: rattata,
        level: "2-5",
        type: normal,
        encounterRate: "45%",
        insight: "A good HM slave for the whole region but can still be fighter in the early game. Only good trainers can keep their Rattata/Raticate through the end of the challenge."
    },
    {
        name: "Mankey",
        image: mankey,
        level: "2-5",
        type: fighting,
        encounterRate: "45%",
        insight: "If you chose Charmander as a starter, it is almost a requirement to have a Mankey in your team for the first gym due to type disadvantage. "
    },
    {
        name: "Spearow",
        image: spearow,
        level: "3-5",
        type: normalFlying,
        encounterRate: "10%",
        insight: "The best way to describe Spearow is its basically a better Pidgey."
    }
];

const viridian = [
    {
        name: "<span class='succenc'>Caterpie</span>",
        image: caterpie,
        level: "3-5",
        type: bug,
        encounterRate: "40%",
        insight: "Make sure to evolve this Pokemon as soon as you can to fully utilize this Pokemon's strength. Though only useful in the early game."
    },
    {
        name: "<span class='caughtpokemon'>Weedle</span>",
        image: weedle,
        level: "3-5",
        type: bugPoison,
        encounterRate: "40%",
        insight: "If I\'m honest, probably worse than Caterpie due to the limited movepool but can still used early game as a somewhat reliable attacker."
    },
    {
        name: "Metapod",
        image: metapod,
        level: "3-5",
        type: bug,
        encounterRate: "10%",
        insight: "Make sure to evolve this Pokemon as soon as you can to fully utilize this Pokemon's strength. Though only useful in the early game."
    },
    {
        name: "<span class='caughtpokemon'>Kakuna</span>",
        image: kakuna,
        level: "5",
        type: bugPoison,
        encounterRate: "5%",
        insight: "If I\'m honest, probably worse than Caterpie due to the limited movepool but can still used early game as a somewhat reliable attacker."
    },
    {
        name: "Pikachu",
        image: pikachu,
        level: "3-5",
        type: electric,
        encounterRate: "5%",
        insight: "Pikachu is a pretty decent Pokemon in it of itself. There might be better electric types out there, the Pikachu line is still a pretty good choice for a team."
    },
];

//episode 2,
//episode 3
const route3_1 =[
    ["Spearow <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "<span class='succenc'>Nidoran♀ <i class='fa-solid fa-seedling'></i></span>"],
    ["sprites/firered-leafgreen/21.png", "sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/29.png"],
    ["35% - Lv 6-8", "30% - Lv 6-7", "14% - Lv 6-7"],
    [normalFlying, normalFlying, poison]
];
const route3_2 =[
    ["Jigglypuff <i class='fa-solid fa-seedling'></i>", " Mankey <i class='fa-solid fa-seedling'></i>", "Nidoran♂ <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/39.png", "sprites/firered-leafgreen/56.png", "sprites/firered-leafgreen/32.png"],
    ["10% - Lv 3-7", "10% - Lv 7", "1% - Lv 6"],
    [normal, fighting, poison]
];
//episode 4
const mtMoon1f =[
    ["<span class='succenc'>Zubat <i class='fa-solid fa-mountain'></i></span>", "Geodude <i class='fa-solid fa-mountain'></i>", "Paras <i class='fa-solid fa-mountain'></i>", "Clefairy <i class='fa-solid fa-mountain'></i>"],
    ["sprites/firered-leafgreen/41.png", "sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/46.png", "sprites/firered-leafgreen/35.png"],
    ["69% - Lv 7-10", "25% - Lv 7-9", "5% - Lv 8", "1% - Lv 8"],
    [poisonFlying, rockGround, bugGrass, normal]
];
const mtMoonB1f =[
    ["Paras <i class='fa-solid fa-mountain'></i>"],
    ["sprites/firered-leafgreen/46.png"],
    ["100% - Lv 5-10"],
    [bugGrass]
];
const mtMoonB2f =[
    ["Zubat <i class='fa-solid fa-mountain'></i>", "Geodude <i class='fa-solid fa-mountain'></i>", "Paras <i class='fa-solid fa-mountain'></i>", "Clefairy <i class='fa-solid fa-mountain'></i>"],
    ["sprites/firered-leafgreen/41.png", "sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/46.png", "sprites/firered-leafgreen/35.png"],
    ["49% - Lv 8-11", "30% - Lv 9-10", "15% - Lv 10-12", "6% - Lv 10-12"],
    [poisonFlying, rockGround, bugGrass, normal]
];
const route3PKMNCenter=[
    ["<span class='succenc'>Magikarp <i class='fa-solid fa-gift'></i></span>"],
    ["sprites/firered-leafgreen/129.png"],
    ["Gift - Lv 5"],
    [water]
];
const route4=[
    ["<i class='fa-solid fa-flag'></i> Rattata <i class='fa-solid fa-seedling'></i>", "<span class='succenc'>Spearow <i class='fa-solid fa-seedling'></i></span>", "Sandshrew <i class='fa-solid fa-seedling'></i>", "Mankey <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/21.png", "sprites/firered-leafgreen/27.png", "sprites/firered-leafgreen/56.png"],
    ["35% - Lv 8-12", "35% - Lv 8-12", "25% - Lv 6-12", "5% - Lv 10-12"],
    [normal, normalFlying, ground, fighting]
];
//episode5
const route24_1=[
    ["<span class='succenc'> Bellsprout <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Caterpie <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Weedle <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>"],
    [bellsprout, caterpie, weedle, pidgey],
    ["25% - Lv 12-14", "20% - Lv 7-7", "20% - Lv 7-7", "15% - Lv 11-13"],
    [grassPoison, bug, bugPoison, normalFlying]
];
const route24_2=[
    [" Abra <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Metapod <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Kakuna <i class='fa-solid fa-seedling'></i>"],
    [abra, metapod, kakuna],
    ["15% - Lv 8-12", "4% - Lv 8-8", "1% - Lv 8-8"],
    [psychic, bug, bugPoison]
];
const route25_1=[
    ["<i class='fa-solid fa-flag'></i> Bellsprout <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Caterpie <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Weedle <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>"],
    [bellsprout, caterpie, weedle, pidgey],
    ["25% - Lv 12-14", "20% - Lv 8-8", "20% - Lv 8-8", "15% - Lv 11-13"],
    [grassPoison, bug, bugPoison, normalFlying]
];
const route25_2=[
    ["<span class='failenc'> Abra <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Metapod <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Kakuna <i class='fa-solid fa-seedling'></i>"],
    [abra, metapod, kakuna],
    ["15% - Lv 9-12", "4% - Lv 9-9", "1% - Lv 9-9"],
    [psychic, bug, bugPoison]
];
//episode6
//episode7
const route5=[
    ["<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "<span class='succenc'> Meowth <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Bellsprout <i class='fa-solid fa-seedling'></i>"],
    [pidgey, meowth, bellsprout],
    ["40% - Lv 13-16", "35% - Lv 10-16", "25% - Lv 13-16"],
    [normalFlying, normal, grassPoison]
];
const route6=[
    ["<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Meowth <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Bellsprout <i class='fa-solid fa-seedling'></i>"],
    [pidgey, meowth, bellsprout],
    ["40% - Lv 13-16", "35% - Lv 10-16", "25% - Lv 13-16"],
    [normalFlying, normal, grassPoison]
];
const diglettcave=[
    ["<span class='succenc'> Diglett <i class='fa-solid fa-mountain'></i></span>", " Dugtrio <i class='fa-solid fa-mountain'></i>"],
    [diglett, dugtrio],
    ["95% - Lv 15-22", "5% - Lv 29-31"],
    [ground, ground]
];
const route11=[
    ["<span class='succenc'> Sandshrew <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Spearow <i class='fa-solid fa-seedling'></i>", " Drowzee <i class='fa-solid fa-seedling'></i>"],
    [sandshrew, spearow, drowzee],
    ["40% - Lv 12-15", "35% - Lv 13-17", "25% - Lv 11-15"],
    [ground, normalFlying, psychic]
];
//episode8
//episode9
//episode10
const route9=[
    ["<i class='fa-solid fa-flag'></i> Rattata <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Spearow <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Sandshrew <i class='fa-solid fa-seedling'></i>"],
    [rattata, spearow, sandshrew],
    ["40% - Lv 14-17", "35% - Lv 13-17", "25% - Lv 11-17"],
    [normal, normalFlying, ground]
];
const route10=[
    ["<span class='succenc'> Voltorb <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Spearow <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Sandshrew <i class='fa-solid fa-seedling'></i>"],
    [voltorb, spearow, sandshrew],
    ["40% - Lv 14-17", "35% - Lv 13-17", "25% - Lv 11-17"],
    [electric, normalFlying, ground]
];
//episode11
const rocktunnel1f_1=[
    ["Geodude <i class='fa-solid fa-mountain'></i>", "<i class='fa-solid fa-flag'></i> Zubat <i class='fa-solid fa-mountain'></i>", " Mankey <i class='fa-solid fa-mountain'></i>"],
    [geodude, zubat, mankey],
    ["35% - Lv 15-17", "30% - Lv 15-16", "15% - Lv 16-17"],
    [rockGround, poisonFlying, fighting]
];
const rocktunnel1f_2=[
    ["<span class='succenc'>Machop <i class='fa-solid fa-mountain'></i></span>", "Onix <i class='fa-solid fa-mountain'></i>"],
    [machop, onix],
    ["15% - Lv 16-17", "5% - Lv 13-15"],
    [fighting, rockGround]
];
const rocktunnelb1f_1=[
    ["Geodude <i class='fa-solid fa-mountain'></i>", "<i class='fa-solid fa-flag'></i> Zubat <i class='fa-solid fa-mountain'></i>", " Mankey <i class='fa-solid fa-mountain'></i>"],
    [geodude, zubat, mankey],
    ["35% - Lv 15-17", "30% - Lv 15-16", "15% - Lv 16-17"],
    [rockGround, poisonFlying, fighting]
];
const rocktunnelb1f_2=[
    ["<i class='fa-solid fa-flag'></i> Machop <i class='fa-solid fa-mountain'></i></span>", "Onix <i class='fa-solid fa-mountain'></i>"],
    [machop, onix],
    ["10% - Lv 17", "10% - Lv 13-15"],
    [fighting, rockGround]
];
//episode12
const route8=[
    ["<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Meowth <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Sandshrew <i class='fa-solid fa-seedling'></i>", "<span class='succenc'> Vulpix <i class='fa-solid fa-seedling'></i></span>"],
    [pidgey, meowth, sandshrew, vulpix],
    ["30% - Lv 18-20", "30% - Lv 18-20", "20% - Lv 17-19", "20% - Lv 15-18"],
    [normalFlying, normal, ground, fire]
];
const route7=[
    ["<i class='fa-solid fa-flag'></i> Meowth <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Bellsprout <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Vulpix <i class='fa-solid fa-seedling'></i>"],
    [meowth, pidgey, bellsprout, vulpix],
    ["40% - Lv 17-20", "30% - Lv 19-22", "20% - Lv 19-22", "10% - Lv 18-20"],
    [normal, normalFlying, grassPoison, fire]
];
//episode13
//episode14
//episode15
const pokemontower3f=[
    ["Ghastly <i class='fa-solid fa-mountain'></i>", " Cubone <i class='fa-solid fa-mountain'></i>", " Haunter <i class='fa-solid fa-mountain'></i>"],
    [ghastly, cubone, haunter],
    ["90% - Lv 13-19", "9% - Lv 15-17", "1% - Lv 20"],
    [ghostPoison, ground, ghostPoison]
];
const pokemontower4f5f=[
    ["Ghastly <i class='fa-solid fa-mountain'></i>", " Cubone <i class='fa-solid fa-mountain'></i>", " Haunter <i class='fa-solid fa-mountain'></i>"],
    [ghastly, cubone, haunter],
    ["86% - Lv 13-19", "9% - Lv 15-17", "5% - Lv 20"],
    [ghostPoison, ground, ghostPoison]
];
const pokemontower6f=[
    ["<span class='succenc'> Ghastly <i class='fa-solid fa-mountain'></i></span>", " Cubone <i class='fa-solid fa-mountain'></i>", " Haunter <i class='fa-solid fa-mountain'></i>"],
    [ghastly, cubone, haunter],
    ["85% - Lv 14-19", "9% - Lv 17-19", "6% - Lv 21-23"],
    [ghostPoison, ground, ghostPoison]
];
const pokemontower7f=[
    ["<i class='fa-solid fa-flag'></i> Ghastly <i class='fa-solid fa-mountain'></i>", " Haunter <i class='fa-solid fa-mountain'></i>", " Cubone <i class='fa-solid fa-mountain'></i>"],
    [ghastly, haunter, cubone],
    ["75% - Lv 15-19", "15% - Lv 23-25", "10% - Lv 17-19"],
    [ghostPoison, ghostPoison, ground]
];
//episode16
const route12=[
    ["<i class='fa-solid fa-flag'></i> Bellsprout <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", " Venonat <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Weepinbell <i class='fa-solid fa-seedling'></i>"],
    [bellsprout, pidgey, venonat, weepinbell],
    ["35% - Lv 22-26", "30% - Lv 23-27", "30% - Lv 24-26", "5% - Lv 28-30"],
    [grassPoison, normalFlying, bugPoison, grassPoison]
];
const route12superrod=[
    [" Krabby <i class='fa-solid fa-fish'></i>", " Gyarados <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [krabby, gyarados, slowpoke],
    ["84% - Lv 15-35", "15% - Lv 15-25", "1% - Lv 25-35"],
    [water, waterFlying, waterPsychic]
];
const route12special=[
    ["<span class='succenc'> Snorlax <i class='fa-solid fa-seedling'></i></span>"],
    [snorlax],
    ["100% - Lv 30"],
    [normal]
];
const route13_1=[
    ["<i class='fa-solid fa-flag'></i> Bellsprout <i class='fa-solid fa-seedling'></i>", " Venonat <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>"],
    [bellsprout, venonat, pidgey],
    ["35% - Lv 22-26", "30% - Lv 24-26", "20% - Lv 25-27"],
    [grassPoison, bugPoison, normalFlying]
];
const route13_2=[
    [" Pidgeotto <i class='fa-solid fa-seedling'></i>", " Weepinbell <i class='fa-solid fa-seedling'></i>", "Ditto <i class='fa-solid fa-seedling'></i>"],
    [pidgeotto, weepinbell, ditto],
    ["5% - Lv 29", "5% - Lv 28-30", "5% - Lv 25"],
    [normalFlying, grassPoison, normal]
];
const route13superrod=[
    [" Krabby <i class='fa-solid fa-fish'></i>", " Gyarados <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [krabby, gyarados, slowpoke],
    ["84% - Lv 15-35", "15% - Lv 15-25", "1% - Lv 25-35"],
    [water, waterFlying, waterPsychic]
];
//episode17

const safariZoneArea1_1 =[
    ["<i class='fa-solid fa-flag'></i> Nidoran♀ <i class='fa-solid fa-seedling'></i>", " Exeggcute <i class='fa-solid fa-seedling'></i>", " Rhyhorn <i class='fa-solid fa-seedling'></i>"],
    [nidoranf, exeggcute, rhyhorn ],
    ["20% - Lv 22", "20% - Lv 24-25", "20% - Lv 25"],
    [poison, grassPsychic, rockGround ]
];
const safariZoneArea1_2 =[
    [" Venonat <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Nidorina <i class='fa-solid fa-seedling'></i>", " Nidorino <i class='fa-solid fa-seedling'></i>"],
    [venonat, nidorina, nidorino],
    ["15% - Lv 22", "10% - Lv 31", "5% - Lv 31"],
    [bugPoison, poison, poison]
];
const safariZoneArea1_3 =[
    [" Parasect <i class='fa-solid fa-seedling'></i>", " Pinsir <i class='fa-solid fa-seedling'></i>", " Chansey <i class='fa-solid fa-seedling'></i>"],
    [parasect, pinsir, chansey],
    ["5% - Lv 30", "4% - Lv 23", "1% - Lv 23"],
    [bugGrass, bug, normal]
];
const safariZoneArea1superrod_1 =[
    [" Goldeen <i class='fa-solid fa-fish'></i>", " Seaking <i class='fa-solid fa-fish'></i>", " Dratini <i class='fa-solid fa-fish'></i>"],
    [goldeen, seaking, dratini],
    ["40% - Lv 15-25", "40% - Lv 20-30", "15% - Lv 15-25"],
    [water, water, dragon]
];
const safariZoneArea1superrod_2 =[
    [" Slowpoke <i class='fa-solid fa-fish'></i>", " Dragonair <i class='fa-solid fa-fish'></i>"],
    [slowpoke, dragonair],
    ["4% - Lv 15-35", "1% - Lv 25-35"],
    [waterPsychic, dragon]
];

const safariZoneArea2_1 =[
    ["<i class='fa-solid fa-flag'></i> Nidoran♀ <i class='fa-solid fa-seedling'></i>", "<span class='failenc'> Doduo <i class='fa-solid fa-seedling'></i></span>", " Exeggcute <i class='fa-solid fa-seedling'></i>"],
    [nidoranf, doduo, exeggcute ],
    ["20% - Lv 24", "20% - Lv 26", "20% - Lv 23-25"],
    [poison, normalFlying, grassPsychic ]
];
const safariZoneArea2_2 =[
    ["Paras <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Nidorina <i class='fa-solid fa-seedling'></i>", " Nidoran♂ <i class='fa-solid fa-seedling'></i>"],
    [paras, nidorina, nidoranm ],
    ["15% - Lv 22", "10% - Lv 33", "5% - Lv 24"],
    [bugGrass, poison, poison ]
];
const safariZoneArea2_3 =[
    [" Parasect <i class='fa-solid fa-seedling'></i>", " Kangaskhan <i class='fa-solid fa-seedling'></i>", " Pinsir <i class='fa-solid fa-seedling'></i>"],
    [parasect, kangaskhan, pinsir],
    ["5% - Lv 25", "4% - Lv 25", "1% - Lv 28"],
    [bugGrass, normal, bug]
];
const safariZoneArea2superrod_1 =[
    [" Goldeen <i class='fa-solid fa-fish'></i>", " Seaking <i class='fa-solid fa-fish'></i>", " Dratini <i class='fa-solid fa-fish'></i>"],
    [goldeen, seaking, dratini],
    ["40% - Lv 15-25", "40% - Lv 20-30", "15% - Lv 15-25"],
    [water, water, dragon]
];
const safariZoneArea2superrod_2 =[
    [" Slowpoke <i class='fa-solid fa-fish'></i>", " Dragonair <i class='fa-solid fa-fish'></i>"],
    [slowpoke, dragonair],
    ["4% - Lv 15-35", "1% - Lv 25-35"],
    [waterPsychic, dragon]
];

const safariZoneArea3_1 =[
    ["<i class='fa-solid fa-flag'></i> Nidoran♀ <i class='fa-solid fa-seedling'></i>", " Exeggcute <i class='fa-solid fa-seedling'></i>", " Rhyhorn <i class='fa-solid fa-seedling'></i>"],
    [nidoranf, exeggcute, rhyhorn ],
    ["20% - Lv 30", "20% - Lv 25-27", "20% - Lv 26"],
    [poison, grassPsychic, rockGround ]
];
const safariZoneArea3_2 =[
    [" Paras <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Nidorina <i class='fa-solid fa-seedling'></i>", " Nidorino <i class='fa-solid fa-seedling'></i>"],
    [paras, nidorina, nidorino],
    ["15% - Lv 23", "10% - Lv 30", "5% - Lv 30"],
    [bugGrass, poison, poison]
];
const safariZoneArea3_3 =[
    [" Venomoth <i class='fa-solid fa-seedling'></i>", "Chansey <i class='fa-solid fa-seedling'></i>", " Tauros <i class='fa-solid fa-seedling'></i>"],
    [venomoth, chansey, tauros],
    ["5% - Lv 32", "4% - Lv 26", "1% - Lv 328"],
    [bugPoison, normal, normal]
];
const safariZoneArea3superrod_1 =[
    [" Goldeen <i class='fa-solid fa-fish'></i>", " Seaking <i class='fa-solid fa-fish'></i>", " Dratini <i class='fa-solid fa-fish'></i>"],
    [goldeen, seaking, dratini],
    ["40% - Lv 15-25", "40% - Lv 20-30", "15% - Lv 15-25"],
    [water, water, dragon]
];
const safariZoneArea3superrod_2 =[
    [" Slowpoke <i class='fa-solid fa-fish'></i>", " Dragonair <i class='fa-solid fa-fish'></i>"],
    [slowpoke, dragonair],
    ["4% - Lv 15-35", "1% - Lv 25-35"],
    [waterPsychic, dragon]
];

const safariZoneArea4_1 =[
    ["<i class='fa-solid fa-flag'></i> Nidoran♀ <i class='fa-solid fa-seedling'></i>", "<span class='failenc'> Doduo <i class='fa-solid fa-seedling'></i></span>", " Exeggcute <i class='fa-solid fa-seedling'></i>"],
    [nidoranf, doduo, exeggcute ],
    ["20% - Lv 22", "20% - Lv 26", "20% - Lv 25-27"],
    [poison, normalFlying, grassPsychic ]
];
const safariZoneArea4_2 =[
    ["Venonat <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Nidorina <i class='fa-solid fa-seedling'></i>", " Nidoran♂ <i class='fa-solid fa-seedling'></i>"],
    [venonat, nidorina, nidoranm ],
    ["15% - Lv 23", "10% - Lv 30", "5% - Lv 30"],
    [bugPoison, poison, poison ]
];
const safariZoneArea4_3 =[
    ["Venomoth <i class='fa-solid fa-seedling'></i>", " Tauros <i class='fa-solid fa-seedling'></i>", " Kangaskhan <i class='fa-solid fa-seedling'></i>"],
    [venomoth, tauros, kangaskhan ],
    ["5% - Lv 32", "4% - Lv 25", "1% - Lv 28"],
    [bugPoison, normal, normal ]
];
const safariZoneArea4superrod_1 =[
    [" Goldeen <i class='fa-solid fa-fish'></i>", " Seaking <i class='fa-solid fa-fish'></i>", " Dratini <i class='fa-solid fa-fish'></i>"],
    [goldeen, seaking, dratini],
    ["40% - Lv 15-25", "40% - Lv 20-30", "15% - Lv 15-25"],
    [water, water, dragon]
];
const safariZoneArea4superrod_2 =[
    [" Slowpoke <i class='fa-solid fa-fish'></i>", " Dragonair <i class='fa-solid fa-fish'></i>"],
    [slowpoke, dragonair],
    ["4% - Lv 15-35", "1% - Lv 25-35"],
    [waterPsychic, dragon]
];

const route17_1 =[
    ["<span class='succenc'> Doduo <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Spearow <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Raticate <i class='fa-solid fa-seedling'></i>"],
    [doduo, spearow, raticate ],
    ["35% - Lv 24-28", "30% - Lv 20-22", "25% - Lv 25-29"],
    [normalFlying, normalFlying, normal ]
];
const route17_2 =[
    ["<i class='fa-solid fa-flag'></i> Rattata <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Fearow <i class='fa-solid fa-seedling'></i>"],
    [rattata, fearow],
    ["5% - Lv 22", "5% - Lv 25-27"],
    [normal, normalFlying]
];

const vermillionCitysuperrod_1 =[
    ["<span class='succenc'> Staryu <i class='fa-solid fa-fish'></i></span>", " Krabby <i class='fa-solid fa-fish'></i>", " Gyarados <i class='fa-solid fa-fish'></i>"],
    [staryu, krabby, gyarados],
    ["40% - Lv 15-25", "40% - Lv 15-25", "15% - Lv 15-25"],
    [water, water, waterFlying]
];
const vermillionCitysuperrod_2 =[
    [" Horsea <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [horsea, slowpoke],
    ["4% - Lv 25-30", "1% - Lv 25-35"],
    [water, waterPsychic]
];

//episode18

const saffronCity = [
    ["<span class='succenc'>Hitmonlee <i class='fa-solid fa-gift'></i></span>", "Hitmonchan <i class='fa-solid fa-gift'></i>"],
    [hitmonlee, hitmonchan],
    ["Gift - Lv.30", "Gift - Lv.30"],
    [fighting, fighting]
];

//episode19
//episode20
//episode21

const route19 = [
    ["<span class='succenc'> Tentacool <i class='fa-solid fa-water'></i></span>"],
    [tentacool],
    ["100% - Lv.5-40"],
    [waterPoison]
];
const route19superrod=[
    [" Krabby <i class='fa-solid fa-fish'></i>", " Gyarados <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [krabby, gyarados, slowpoke],
    ["84% - Lv 15-35", "15% - Lv 15-25", "1% - Lv 25-35"],
    [water, waterFlying, waterPsychic]
];

const palletTown = [
    ["<i class='fa-solid fa-flag'></i> Tentacool <i class='fa-solid fa-water'></i>"],
    [tentacool],
    ["100% - Lv.5-40"],
    [waterPoison]
];
const palletTownsuperrod_1=[
    ["<i class='fa-solid fa-flag'></i> Staryu <i class='fa-solid fa-fish'></i>", "<span class='succenc'> Krabby <i class='fa-solid fa-fish'></i></span>", " Gyarados <i class='fa-solid fa-fish'></i>"],
    [staryu, krabby, gyarados],
    ["40% - Lv 15-25", "40% - Lv 15-25", "15% - Lv 15-25"],
    [water, water, waterFlying]
];
const palletTownsuperrod_2=[
    [" Kingler <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [kingler, slowpoke],
    ["4% - Lv 25-35", "1% - Lv 25-35"],
    [water, waterPsychic]
];

const route21 = [
    ["<span class='succenc'> Tangela <i class='fa-solid fa-seedling'></i></span>", "<i class='fa-solid fa-flag'></i> Tentacool <i class='fa-solid fa-water'></i>"],
    [tangela, tentacool],
    ["100% - Lv 17-28", "100% - Lv.5-40"],
    [grass, waterPoison]
];
const route21superrod=[
    [" Krabby <i class='fa-solid fa-fish'></i>", " Gyarados <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [krabby, gyarados, slowpoke],
    ["84% - Lv 15-35", "15% - Lv 15-25", "1% - Lv 25-35"],
    [water, waterFlying, waterPsychic]
];

const cinnabarIsland = [
    ["<i class='fa-solid fa-flag'></i> Tentacool <i class='fa-solid fa-water'></i>"],
    [tentacool],
    ["100% - Lv.5-40"],
    [waterPoison]
];
const cinnabarIslandsuperrod_1=[
    ["<i class='fa-solid fa-flag'></i> Staryu <i class='fa-solid fa-fish'></i>", "<i class='fa-solid fa-flag'></i> Krabby <i class='fa-solid fa-fish'></i>", " Gyarados <i class='fa-solid fa-fish'></i>"],
    [staryu, krabby, gyarados],
    ["40% - Lv 15-25", "40% - Lv 15-25", "15% - Lv 15-25"],
    [water, water, waterFlying]
];
const cinnabarIslandsuperrod_2=[
    [" Kingler <i class='fa-solid fa-fish'></i>", " Slowpoke <i class='fa-solid fa-fish'></i>"],
    [kingler, slowpoke],
    ["4% - Lv 25-35", "1% - Lv 25-35"],
    [water, waterPsychic]
];

const cinnabarMansion1_1 =[
    ["<i class='fa-solid fa-flag'></i> Raticate <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Grimer <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Rattata <i class='fa-solid fa-seedling'></i>"],
    [raticate, grimer, rattata],
    ["30% - Lv 32-36", "30% - Lv 28-30", "15% - Lv 26-28"],
    [normal, poison, normal]
];
const cinnabarMansion1f2f3f_2 =[
    ["<i class='fa-solid fa-flag'></i> Vulpix <i class='fa-solid fa-seedling'></i>", " Koffing <i class='fa-solid fa-seedling'></i>", " Muk <i class='fa-solid fa-seedling'></i>"],
    [vulpix, koffing, muk ],
    ["15% - Lv 30-32", "5% - Lv 28", "5% - Lv 32"],
    [fire, poison, poison]
];

const seafoamIsland =[
    ["<span class='succenc'> Slowpoke <i class='fa-solid fa-mountain'></i></span>", "<i class='fa-solid fa-flag'></i> Zubat <i class='fa-solid fa-mountain'></i>", "<i class='fa-solid fa-flag'></i> Golbat <i class='fa-solid fa-mountain'></i>"],
    [slowpoke, zubat, golbat],
    ["55% - Lv 26-33", "34% - Lv 22-26", "11% - Lv 26-30"],
    [waterPsychic, poisonFlying, poisonFlying]
];

//episode22
//episode23
//episode24
//episode25

const kindleRoad_1 =[
    [" Ponyta <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Spearow <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Fearow <i class='fa-solid fa-seedling'></i>"],
    [ponyta, spearow, fearow ],
    ["30% - Lv 31-34", "25% - Lv 30-32", "10% - Lv 36"],
    [fire, normalFlying, normalFlying]
];
const kindleRoad_2 =[
    [" Meowth <i class='fa-solid fa-seedling'></i>", "<span class='failenc'> Geodude <i class='fa-solid fa-seedling'></i></span>", "Persian <i class='fa-solid fa-seedling'></i>"],
    [ponyta, spearow, fearow ],
    ["30% - Lv 31-34", "25% - Lv 30-32", "10% - Lv 36"],
    [fire, normalFlying, normalFlying]
];

//episode26
//episode27
//episode28
//episode29
//episode30
//episodefinale

//episode1
populateTable(oaklab, "oaklab");
populateTable(route1, "route1"); 
populateTable(route2, "route2");
populateTable(route22, "route22");
populateTable(viridian, "viridian");
//episode2
//episode3
populateTable(route3_1, "route3_1");
populateTable(route3_2, "route3_2");
//episode4
populateTable(mtMoon1f, "mtMoon1f");
populateTable(mtMoonB1f, "mtMoonB1f");
populateTable(mtMoonB2f, "mtMoonB2f");
populateTable(route3PKMNCenter, "route3PKMNCenter");
populateTable(route4, "route4");
//episode5
populateTable(route24_1, "route24_1");
populateTable(route24_2, "route24_2");
populateTable(route25_1, "route25_1");
populateTable(route25_2, "route25_2");
//episode6
//episode7
populateTable(route5, "route5");
populateTable(route6, "route6");
populateTable(diglettcave, "diglettcave");
populateTable(route11, "route11");
//episode8
//episode9
//episode10
populateTable(route9, "route9");
populateTable(route10, "route10");
//episode11
populateTable(rocktunnel1f_1, "rocktunnel1f_1");
populateTable(rocktunnel1f_2, "rocktunnel1f_2");
populateTable(rocktunnelb1f_1, "rocktunnelb1f_1");
populateTable(rocktunnelb1f_2, "rocktunnelb1f_2");
//episode12
populateTable(route8, "route8");
populateTable(route7, "route7");
//episode13
//episode14
//episode15
populateTable(pokemontower3f, "pokemontower3f");
populateTable(pokemontower4f5f, "pokemontower4f5f");
populateTable(pokemontower6f, "pokemontower6f");
populateTable(pokemontower7f, "pokemontower7f");
//episode16
populateTable(route12, "route12");
populateTable(route12special, "route12special");
populateTable(route12superrod, "route12superrod");
populateTable(route13_1, "route13_1");
populateTable(route13_2, "route13_2");
populateTable(route13superrod, "route13superrod");
//episode17
//episode18
//episode19
//episode20
//episode21
//episode22
//episode23
//episode24
//episode25
//episode26
//episode27
//episode28
//episode29
//episode30
//episodefinale
