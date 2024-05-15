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
const party1 =[
    ["GILAMONSTR", "LIZARD", "NEWT", "CAIMAN"],
    ["sprites/firered-leafgreen/7.png","sprites/firered-leafgreen/13.png","sprites/firered-leafgreen/19.png","sprites/firered-leafgreen/10.png"],
    ["Lv.9","Lv.4","Lv.3","Lv.4"],
    ["Water", "Bug / Poison", "Normal","Bug"]
];

//episode1
populateTable(party1, "party1");