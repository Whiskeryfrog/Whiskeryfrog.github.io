//populate Table function
const tableDeath = [
    "Name",
    "Pokémon",
    "Episode",
    "Reason"
];

function populateTable(tableData, tableId) {
    const table = document.getElementById(tableId);
  
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    const headerRow = document.createElement("tr");
    tableDeath.forEach(header => {
        const headerCell = document.createElement("th");
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    });
    tbody.appendChild(headerRow);

    tableData.forEach(data => {
        const rowElement = document.createElement("tr");
  
        // Combine name, image, and success indicator in a single cell
        const nameCell = document.createElement("td");
        nameCell.textContent = data.name;
        rowElement.appendChild(nameCell);
  
        const pokemonImage = document.createElement("img");
        pokemonImage.classList.add("nopad");
        pokemonImage.classList.add("dead");
        pokemonImage.setAttribute("src", data.image);
        rowElement.appendChild(pokemonImage);
  
        // Add insight cell
        const episodeCell = document.createElement("td");
        episodeCell.textContent = data.episode;
        rowElement.appendChild(episodeCell);
  
        // Add insight cell
        const reasonCell = document.createElement("td");
        reasonCell.textContent = data.reason;
        rowElement.appendChild(reasonCell);
  
        tbody.appendChild(rowElement);
    });
  }

//episode1, episode 2, episode 3, episode 4
const death1 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    }
];
//episode5
const death2 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    }
];
//episode6, episode 7, episode 8, episode 9, episode 10, episode 11, epsiode 12, episode 13, episode 14, 
const death3 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    },
    {
        name: "FLYLIZARD",
        image: zubat,
        episode: "Episode 6",
        reason: "Died due to a Pidgey during training of all places. Also forgot about quick attack."
    }
];
//episode15, episode16-1, episode17-1, episode18-1, episode19-1, episode20-1, episode21-1
const death4 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    },
    {
        name: "FLYLIZARD",
        image: zubat,
        episode: "Episode 6",
        reason: "Died due to a Pidgey during training of all places. Also forgot about quick attack."
    },
    {
        name: "NEWT",
        image: raticate,
        episode: "Episode 15",
        reason: "Explosion from a Koffing."
    }
];
//episode16-2 
const death5 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    },
    {
        name: "FLYLIZARD",
        image: zubat,
        episode: "Episode 6",
        reason: "Died due to a Pidgey during training of all places. Also forgot about quick attack."
    },
    {
        name: "NEWT",
        image: raticate,
        episode: "Episode 15",
        reason: "Explosion from a Koffing."
    },
    {
        name: "GECKO",
        image: weepinbell,
        episode: "Episode 16",
        reason: "Died trying to catch a Snorlax"
    },
    {
        name: "CAIMAN",
        image: butterfree,
        episode: "Episode 16",
        reason: "Died while fighting a Muk that one shots me with Sludge."
    }
];
//episode17-2, episode18-2, episode19-2, episode20-2, episode21-2
const death6 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    },
    {
        name: "FLYLIZARD",
        image: zubat,
        episode: "Episode 6",
        reason: "Died due to a Pidgey during training of all places. Also forgot about quick attack."
    },
    {
        name: "NEWT",
        image: raticate,
        episode: "Episode 15",
        reason: "Explosion from a Koffing."
    },
    {
        name: "GECKO",
        image: weepinbell,
        episode: "Episode 16",
        reason: "Died trying to catch a Snorlax"
    },
    {
        name: "CAIMAN",
        image: butterfree,
        episode: "Episode 16",
        reason: "Died while fighting a Muk that one shots me with Sludge."
    },
    {
        name: "ANACONDA",
        image: snorlax,
        episode: "Episode 17",
        reason: "Died while fighting a Weezing that landed a critical hit Sludge on me. That was Weezing was almost dead and somehow killed ANACONDA"
    },
    {
        name: "CONSTRICTR",
        image: vulpix,
        episode: "Episode 17",
        reason: "Died during training when fighting a Doduo that landed Fury Attack 4 times."
    }
];
//episode20-3, episode 21-3
const death7 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    },
    {
        name: "FLYLIZARD",
        image: zubat,
        episode: "Episode 6",
        reason: "Died due to a Pidgey during training of all places. Also forgot about quick attack."
    },
    {
        name: "NEWT",
        image: raticate,
        episode: "Episode 15",
        reason: "Explosion from a Koffing."
    },
    {
        name: "GECKO",
        image: weepinbell,
        episode: "Episode 16",
        reason: "Died trying to catch a Snorlax"
    },
    {
        name: "CAIMAN",
        image: butterfree,
        episode: "Episode 16",
        reason: "Died while fighting a Muk that one shots me with Sludge."
    },
    {
        name: "ANACONDA",
        image: snorlax,
        episode: "Episode 17",
        reason: "Died while fighting a Weezing that landed a critical hit Sludge on me. That was Weezing was almost dead and somehow killed ANACONDA"
    },
    {
        name: "CONSTRICTR",
        image: vulpix,
        episode: "Episode 17",
        reason: "Died during training when fighting a Doduo that landed Fury Attack 4 times."
    },
    {
        name: "CROCODILE",
        image: fearow,
        episode: "Episode 20",
        reason: "Destiny bond from a gym trainer."
    },
    {
        name: "GILAMONSTR",
        image: blastoise,
        episode: "Episode 20",
        reason: "Died from a Calm Mind, Critical hit Psychic from an Alakazam."
    },
    {
        name: "KOMODO",
        image: sandslash,
        episode: "Episode 20",
        reason: "Same with GILAMONSTR"
    }

];
//episodefinale
const death8 = [
    {
        name: "ALLIGATOR",
        image: pidgey,
        episode: "Episode 1",
        reason: "Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."
    },
    {
        name: "LIZARD",
        image: beedrill,
        episode: "Episode 5",
        reason: "Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."
    },
    {
        name: "FLYLIZARD",
        image: zubat,
        episode: "Episode 6",
        reason: "Died due to a Pidgey during training of all places. Also forgot about quick attack."
    },
    {
        name: "NEWT",
        image: raticate,
        episode: "Episode 15",
        reason: "Explosion from a Koffing."
    },
    {
        name: "GECKO",
        image: weepinbell,
        episode: "Episode 16",
        reason: "Died trying to catch a Snorlax"
    },
    {
        name: "CAIMAN",
        image: butterfree,
        episode: "Episode 16",
        reason: "Died while fighting a Muk that one shots me with Sludge."
    },
    {
        name: "ANACONDA",
        image: snorlax,
        episode: "Episode 17",
        reason: "Died while fighting a Weezing that landed a critical hit Sludge on me. That was Weezing was almost dead and somehow killed ANACONDA"
    },
    {
        name: "CONSTRICTR",
        image: vulpix,
        episode: "Episode 17",
        reason: "Died during training when fighting a Doduo that landed Fury Attack 4 times."
    },
    {
        name: "CROCODILE",
        image: fearow,
        episode: "Episode 20",
        reason: "Destiny bond from a gym trainer."
    },
    {
        name: "GILAMONSTR",
        image: blastoise,
        episode: "Episode 20",
        reason: "Died from a Calm Mind, Critical hit Psychic from an Alakazam."
    },
    {
        name: "KOMODO",
        image: sandslash,
        episode: "Episode 20",
        reason: "Same with GILAMONSTR"
    },
    {
        name: "BOA",
        image: dodrio,
        episode: "Finale",
        reason: "Hydro Pump from the champion's Gyarados"
    }

];

populateTable(death1, "death1");

populateTable(death1, "death2");

populateTable(death1, "death3");

populateTable(death1, "death4");

populateTable(death2, "death5");

populateTable(death3, "death6");

populateTable(death3, "death7");

populateTable(death3, "death8");

populateTable(death3, "death9");

populateTable(death3, "death10");

populateTable(death3, "death11");

populateTable(death3, "death12");

populateTable(death3, "death13");

populateTable(death3, "death14");

populateTable(death4, "death15");

populateTable(death5, "death16");

populateTable(death6, "death17");

populateTable(death6, "death18");

populateTable(death6, "death19");

populateTable(death7, "death20");

populateTable(death7, "death21");

populateTable(death7, "death22");

populateTable(death7, "death23");

populateTable(death7, "death24");

populateTable(death7, "death25");

populateTable(death7, "death26");

populateTable(death7, "death27");

populateTable(death7, "death28");

populateTable(death7, "death29");

populateTable(death7, "death30");

populateTable(death8, "deathfinale");