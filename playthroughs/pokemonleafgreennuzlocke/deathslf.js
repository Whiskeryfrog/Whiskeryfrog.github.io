function populateTable(partyData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

    // Check if the table exists
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;  // Exit the function if no table found
    }

    const tbody = table.getElementsByTagName("tbody")[0]; // Get the table body

    // Loop through each row in the data
    partyData.forEach(row => {
        // Create a new table row (<tr>)
        const rowElement = document.createElement("tr");

        // Loop through each cell value in the current row
        row.forEach(cellValue => {
            const cell = document.createElement("td");

            // If the cell value is the image path, create an image element
            if (typeof cellValue === "string" && cellValue.endsWith(".png")) {
                const image = document.createElement("img");
                image.setAttribute("src", cellValue); // Set the image source
                cell.appendChild(image);
                cell.classList.add("dead");
            } else {
                // Otherwise, just set the cell content as text
                cell.textContent = cellValue;
            }

            rowElement.appendChild(cell); // Add the cell to the row
        });

        // Append the completed row to the table body
        tbody.appendChild(rowElement);
    });
}

//episode1, episode 2, episode 3, episode 4
const death1 =[
    ["ALLIGATOR"],
    ["sprites/firered-leafgreen/16.png"],
    ["Episode 1"],
    ["Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."]
];
//episode5
const death2 =[
    ["ALLIGATOR", "LIZARD"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/15.png"],
    ["Episode 1", "Episode 5"],
    ["Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit.","Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack."]
];
//episode6, episode 7, episode 8, episode 9, episode 10, episode 11, epsiode 12, episode 13, episode 14, 
const death3 =[
    ["ALLIGATOR", "LIZARD", "FLYLIZARD"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/15.png", "sprites/firered-leafgreen/41.png"],
    ["Episode 1", "Episode 5", "Episode 6"],
    ["Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit.","Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack.","Died due to a Pidgey during training of all places. Also forgot about quick attack."]
];
//episode15, episode16-1, episode17-1, episode18-1, episode19-1, episode20-1, episode21-1
const death4 =[
    ["ALLIGATOR", "LIZARD", "FLYLIZARD", "NEWT"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/15.png", "sprites/firered-leafgreen/41.png", "sprites/firered-leafgreen/20.png"],
    ["Episode 1", "Episode 5", "Episode 6", "Episode 15"],
    ["Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit.","Died due to an almost dead Rattata that has quick attack. I completely forgot about quick attack.","Died due to a Pidgey during training of all places. Also forgot about quick attack.","Explosion from a Koffing."]
];
//episode16-2 
const death5 =[
    ["GECKO", "CAIMAN"],
    ["sprites/firered-leafgreen/70.png", "sprites/firered-leafgreen/12.png"],
    ["Episode 16", "Episode 16"],
    ["Died trying to catch a Snorlax","Died while fighting a Muk that one shots me with Sludge."]
];
//episode17-2, episode18-2, episode19-2, episode20-2, episode21-2
const death6 =[
    ["GECKO", "CAIMAN", "ANACONDA", "CONSTRICTR"],
    ["sprites/firered-leafgreen/70.png", "sprites/firered-leafgreen/12.png", "sprites/firered-leafgreen/143.png", "sprites/firered-leafgreen/37.png"],
    ["Episode 16", "Episode 16", "Episode 17", "Episode 17"],
    ["Died trying to catch a Snorlax","Died while fighting a Muk that one shots me with Sludge.","Died while fighting a Weezing that landed a critical hit Sludge on me. That was Weezing was almost dead and somehow killed ANACONDA","Died during training when fighting a Doduo that landed Fury Attack 4 times."]
];
//episode20-3, episode 21-3
const death7 =[
    ["CROCODILE", "GILAMONSTR", "KOMODO"],
    ["sprites/firered-leafgreen/22.png", "sprites/firered-leafgreen/9.png", "sprites/firered-leafgreen/28.png"],
    ["Episode 20", "Episode 20", "Episode 20"],
    ["Destiny bond from a gym trainer.","Died from a Calm Mind, Critical hit Psychic from an Alakazam.","Same with GILAMONSTR"]
];
//episodefinale
const death8 =[
    ["CROCODILE", "GILAMONSTR", "KOMODO", "BOA"],
    ["sprites/firered-leafgreen/22.png", "sprites/firered-leafgreen/9.png", "sprites/firered-leafgreen/28.png", "sprites/firered-leafgreen/85.png"],
    ["Episode 20", "Episode 20", "Episode 20", "Episode Finale"],
    ["Destiny bond from a gym trainer.","Died from a Calm Mind, Critical hit Psychic from an Alakazam.","Same with GILAMONSTR","Hydro Pump from the champion's Gyarados"]
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

populateTable(death4, "death16_1");
populateTable(death5, "death16_2");

populateTable(death4, "death17_1");
populateTable(death6, "death17_2");

populateTable(death4, "death18_1");
populateTable(death6, "death18_2");

populateTable(death4, "death19_1");
populateTable(death6, "death19_2");

populateTable(death4, "death20_1");
populateTable(death6, "death20_2");
populateTable(death7, "death20_3");

populateTable(death4, "death21_1");
populateTable(death6, "death21_2");
populateTable(death7, "death21_3");

populateTable(death4, "death22_1");
populateTable(death6, "death22_2");
populateTable(death7, "death22_3");

populateTable(death4, "death23_1");
populateTable(death6, "death23_2");
populateTable(death7, "death23_3");

populateTable(death4, "death24_1");
populateTable(death6, "death24_2");
populateTable(death7, "death24_3");

populateTable(death4, "death25_1");
populateTable(death6, "death25_2");
populateTable(death7, "death25_3");

populateTable(death4, "death26_1");
populateTable(death6, "death26_2");
populateTable(death7, "death26_3");

populateTable(death4, "death27_1");
populateTable(death6, "death27_2");
populateTable(death7, "death27_3");

populateTable(death4, "death28_1");
populateTable(death6, "death28_2");
populateTable(death7, "death28_3");

populateTable(death4, "death29_1");
populateTable(death6, "death29_2");
populateTable(death7, "death29_3");

populateTable(death4, "death30_1");
populateTable(death6, "death30_2");
populateTable(death7, "death30_3");

populateTable(death4, "deathfinale_1");
populateTable(death6, "deathfinale_2");
populateTable(death8, "deathfinale_3");