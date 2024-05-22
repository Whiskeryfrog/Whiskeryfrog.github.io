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
const rival2 =[
    ["Pidgey", "Bulbasaur"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/1.png"],
    ["Lv.9", "Lv.9"],
    ["Normal / Flying", "Grass / Poison"]
];
const rick =[
    ["Weedle", "Caterpie"],
    ["sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/10.png"],
    ["Lv.6", "Lv.6"],
    ["Bug/ Poison", "Bug"]
];
const doug =[
    ["Weedle", "Kakuna", "Weedle"],
    ["sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/14.png", "sprites/firered-leafgreen/13.png"],
    ["Lv.7", "Lv.7", "Lv.7"],
    ["Bug/ Poison", "Bug/ Poison", "Bug/ Poison"]
];
const anthony =[
    ["Catepie", "Caterpie"],
    ["sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/10.png"],
    ["Lv.7", "Lv.8"],
    ["Bug", "Bug"]
];
const charlie =[
    ["Metapod", "Caterpie", "Metapod"],
    ["sprites/firered-leafgreen/11.png", "sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/11.png"],
    ["Lv.7", "Lv.7", "Lv.7"],
    ["Bug", "Bug", "Bug"]
];
const sammy =[
    ["Weedle"],
    ["sprites/firered-leafgreen/13.png"],
    ["Lv.9"],
    ["Bug/ Poison"]
];  
//episode3
const liam =[
    ["Geodude", "Sandshrew"],
    ["sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/27.png"],
    ["Lv.10", "Lv.11"],
    ["Rock / Ground", "Ground"]
];
const brock =[
    ["Geodude", "Onix"],
    ["sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/95.png"],
    ["Lv.12", "Lv.14"],
    ["Rock / Ground", "Rock / Ground"]
];
const janice =[
    ["Pidgey", "Pidgey"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/16.png"],
    ["Lv.9", "Lv.9"],
    ["Normal / Flying", "Normal / Flying"]
];
const colton =[
    ["Caterpie", "Weedle", "Caterpie"],
    ["sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/10.png"],
    ["Lv.10", "Lv.10", "Lv.10"],
    ["Bug", "Bug / Poison", "Bug"]
];
const ben =[
    ["Rattata", "Ekans"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/23.png"],
    ["Lv.11", "Lv.11"],
    ["Normal", "Poison"]
];
const greg =[
    ["Weedle", "Kakuna", "Caterpie", "Metapod"],
    ["sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/14.png", "sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/11.png"],
    ["Lv.9", "Lv.9", "Lv.9", "Lv. 9"],
    ["Bug / Poison", "Bug / Poison", "Bug", "Bug"]
];
const sally =[
    ["Rattata", "Nidoran♀"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/29.png"],
    ["Lv.10", "Lv.10"],
    ["Normal", "Poison"]
];
const james =[
    ["Caterpie", "Metapod"],
    ["sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/11.png"],
    ["Lv.11", "Lv.11"],
    ["Bug", "Bug"]
];
const robin =[
    ["Jigglypuff"],
    ["sprites/firered-leafgreen/39.png"],
    ["Lv.14"],
    ["Normal"]
];
//episode4
const calvin =[
    ["Spearow"],
    ["sprites/firered-leafgreen/21.png"],
    ["Lv.14"],
    ["Normal / Flying"]
];
const iris =[
    ["Clefairy"],
    ["sprites/firered-leafgreen/35.png"],
    ["Lv.14"],
    ["Normal"]
];
const jovan =[
    ["Magnemite", "Voltorb"],
    ["sprites/firered-leafgreen/81.png", "sprites/firered-leafgreen/100.png"],
    ["Lv.11", "Lv.11"],
    ["Electric / Steel", "Electric"]
];
const robby = [
    ["Caterpie", "Metapod", "Caterpie"],
    ["sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/11.png", "sprites/firered-leafgreen/10.png"],
    ["Lv.10", "Lv.10", "Lv.10"],
    ["Bug", "Bug", "Bug"]
];
const rocketGruntMtMoon1 = [
    ["Sandshrew", "Rattata", "Zubat"],
    ["sprites/firered-leafgreen/27.png", "sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/41.png"],
    ["Lv.11", "Lv.11", "Lv.11"],
    ["Ground", "Normal", "Poison / Flying"]
];
const kent =[
    ["Weedle", "Kakuna"],
    ["sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/14.png"],
    ["Lv.11", "Lv.11"],
    ["Bug / Poison", "Bug / Poison"]
];
const miriam =[
    ["Oddish", "Bellsprout"],
    ["sprites/firered-leafgreen/43.png", "sprites/firered-leafgreen/69.png"],
    ["Lv.11", "Lv.11"],
    ["Grass / Poison", "Grass / Poison"]
];
const rocketGruntMtMoon2 =[
    ["Zubat", "Ekans"],
    ["sprites/firered-leafgreen/41.png", "sprites/firered-leafgreen/23.png"],
    ["Lv.11", "Lv.11"],
    ["Poison / Flying", "Poison"]
];
const josh = [
    ["Rattata", "Rattata", "Zubat"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/41.png"],
    ["Lv.10", "Lv.10", "Lv.10"],
    ["Normal", "Normal", "Poison / Flying"]
];
const marcos = [
    ["Geodude", "Geodude", "Onix"],
    ["sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/95.png"],
    ["Lv.10", "Lv.10", "Lv.10"],
    ["Rock / Ground", "Rock / Ground", "Rock / Ground"]
];
const rocketGruntMtMoon3 =[
    ["Rattata", "Sandshrew"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/27.png"],
    ["Lv.13", "Lv.13"],
    ["Normal", "Ground"]
];
const rocketGruntMtMoon4 =[
    ["Rattata", "Zubat"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/41.png"],
    ["Lv.13", "Lv.13"],
    ["Normal", "Poison / Flying"]
];
const miguel = [
    ["Grimer", "Voltorb", "Koffing"],
    ["sprites/firered-leafgreen/88.png", "sprites/firered-leafgreen/100.png", "sprites/firered-leafgreen/109.png"],
    ["Lv.12", "Lv.12", "Lv.12"],
    ["Poison", "Electric", "Poison"]
];


//episode1
populateTable(rival1, "rival1");
//episode2
populateTable(rival2, "rival2");
populateTable(rick, "rick");
populateTable(doug, "doug");
populateTable(anthony, "anthony");
populateTable(charlie, "charlie");
populateTable(sammy, "sammy");
//episode3
populateTable(liam, "liam");
populateTable(brock, "brock");
populateTable(janice, "janice");
populateTable(colton, "colton");
populateTable(ben, "ben");
populateTable(greg, "greg");
populateTable(sally, "sally");
populateTable(james, "james");
populateTable(robin, "robin");
//episode4
populateTable(calvin, "calvin");
populateTable(iris, "iris");
populateTable(jovan, "jovan");
populateTable(robby, "robby");
populateTable(rocketGruntMtMoon1, "rocketGruntMtMoon1");
populateTable(kent, "kent");
populateTable(miriam, "miriam");
populateTable(rocketGruntMtMoon2, "rocketGruntMtMoon2");
populateTable(josh, "josh");
populateTable(marcos, "marcos");
populateTable(rocketGruntMtMoon3, "rocketGruntMtMoon3");
populateTable(rocketGruntMtMoon4, "rocketGruntMtMoon4");
populateTable(miguel, "miguel");
//episode5

