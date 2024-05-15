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

//episode1
const death1 =[
    ["ALLIGATOR"],
    ["sprites/firered-leafgreen/16.png"],
    ["Episode 1"],
    ["Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit."]
];

//episode1
populateTable(death1, "death1");