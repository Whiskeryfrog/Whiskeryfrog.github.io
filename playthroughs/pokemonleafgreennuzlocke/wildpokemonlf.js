function populateTable(tableData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

    // Check if the table exists
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;  // Exit the function if no table found
    }

    const tbody = table.getElementsByTagName("tbody")[0]; // Get the table body

    // Loop through each row in the data
    tableData.forEach(row => {
        // Create a new table row (<tr>)
        const rowElement = document.createElement("tr");

        // Loop through each cell value in the current row
        row.forEach(cellValue => {
            const cell = document.createElement("td");
            cell.classList.add("nopad");  // Add "nopad" class by default

            // If the cell value is an image path, create an image element
            if (cellValue.startsWith("sprites/")) {
                const image = document.createElement("img");
                image.classList.add("nopad");  // Add "nopad" class to images
                image.setAttribute("src", cellValue);
                cell.appendChild(image);
            } else {
                // Otherwise, set the cell content as HTML (for icons)
                cell.innerHTML = cellValue;
            }

            rowElement.appendChild(cell); // Add the cell to the row
        });

        // Append the completed row to the table body
        tbody.appendChild(rowElement);
    });
}

//episode 1
const oaklab = [
    ["Bulbasaur <i class='fa-solid fa-gift'></i>", "Charmander <i class='fa-solid fa-gift'></i>", "<span class='succenc'>Squirtle <i class='fa-solid fa-gift'></i></span>"],
    ["sprites/firered-leafgreen/1.png", "sprites/firered-leafgreen/4.png", "sprites/firered-leafgreen/7.png"],
    ["Gift - Lv.5", "Gift - Lv.5", "Gift - Lv.5"],
];
const route1 = [
    ["<span class='succenc'>Pidgey <i class='fa-solid fa-seedling'></i><span>", "Rattata <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/19.png"],
    ["50% - Lv.2-5", "50% - Lv.2-4"],
];

const route2 = [
    ["<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "Rattata <i class='fa-solid fa-seedling'></i>", "Caterpie <i class='fa-solid fa-seedling'></i>", "<span class='succenc'>Weedle <i class='fa-solid fa-seedling'></i> </span>"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/13.png"],
    ["45% - Lv.2-5", "45% - Lv.2-5", "5% - Lv.4-5", "5% - Lv.4-5"],
];

const route22 =[
    ["<span class='succenc'>Rattata <i class='fa-solid fa-seedling'></i></span>", "Mankey <i class='fa-solid fa-seedling'></i>", "Spearow <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/56.png", "sprites/firered-leafgreen/21.png"],
    ["45% - Lv.2-5", "45% - Lv.2-5", "10% - Lv.3-5"],
];

const viridian1 =[
    ["<span class='succenc'>Caterpie <i class='fa-solid fa-seedling'></i></span>", "Weedle <i class='fa-solid fa-seedling'></i>", "Metapod <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/11.png"],
    ["40% - Lv.3-5", "40% - Lv.3-5", "10% - Lv.4-6"],
];

const viridian2 =[
    ["Kakuna <i class='fa-solid fa-seedling'></i>", "Pikachu <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/14.png", "sprites/firered-leafgreen/25.png"],
    ["5% - Lv.5", "5% - Lv.3-5"],
];
//episode 2


//episode1
populateTable(oaklab, "oaklab");
populateTable(route1, "route1"); 
populateTable(route2, "route2");
populateTable(route22, "route22");
populateTable(viridian1, "viridian1");
populateTable(viridian2, "viridian2");
//episode2
