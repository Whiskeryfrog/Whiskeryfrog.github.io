function populateTable(pokemonData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

    // Check if the table exists
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;  // Exit the function if no table found
    }

    const tbody = table.getElementsByTagName("tbody")[0]; // Get the table body

    // Loop through each row in the data
    pokemonData.forEach(row => {
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

//episode1
const rival1 =[
    ["Bulbasaur"],
    ["sprites/firered-leafgreen/1.png"],
    ["Lv.5"],
    ["Grass / Poison"]
];
//episode2


const marcos = [
    ["Geodude", "Geodude", "Onix"],
    ["sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/95.png"],
    ["Lv.10", "Lv.10", "Lv.10"],
    ["Rock / Ground", "Rock / Ground", "Rock / Ground"]
];


//episode1
populateTable(rival1, "rival1");


populateTable(marcos, "marcos");