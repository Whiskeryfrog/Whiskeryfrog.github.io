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
            if (typeof cellValue === "string" && cellValue.endsWith(".png") || cellValue.endsWith(".gif")) {
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
    [bulbasaur],
    ["Lv.5"],
    [grassPoison]
];
//episode2
const rival2 =[
    ["Pidgey", "Bulbasaur"],
    [pidgey, bulbasaur],
    ["Lv.9", "Lv.9"],
    [normalFlying, grassPoison]
];
const rick =[
    ["Weedle", "Caterpie"],
    [weedle, caterpie],
    ["Lv.6", "Lv.6"],
    [bugPoison, bug]
];
const doug =[
    ["Weedle", "Kakuna", "Weedle"],
    [weedle, kakuna, weedle],
    ["Lv.7", "Lv.7", "Lv.7"],
    [bugPoison, bugPoison, bugPoison]
];
const anthony =[
    ["Catepie", "Caterpie"],
    [caterpie, caterpie],
    ["Lv.7", "Lv.8"],
    [bug, bug]
];
const charlie =[
    ["Metapod", "Caterpie", "Metapod"],
    [metapod, caterpie, metapod],
    ["Lv.7", "Lv.7", "Lv.7"],
    [bug, bug, bug]
];
const sammy =[
    ["Weedle"],
    [weedle],
    ["Lv.9"],
    [bugPoison]
];  
//episode3
const liam =[
    ["Geodude", "Sandshrew"],
    [geodude, sandshrew],
    ["Lv.10", "Lv.11"],
    [rockGround, ground]
];
const brock =[
    ["Geodude", "Onix"],
    [geodude, onix],
    ["Lv.12", "Lv.14"],
    [rockGround, rockGround]
];
const janice =[
    ["Pidgey", "Pidgey"],
    [pidgey, pidgey],
    ["Lv.9", "Lv.9"],
    [normalFlying, normalFlying]
];
const colton =[
    ["Caterpie", "Weedle", "Caterpie"],
    [caterpie, weedle, caterpie],
    ["Lv.10", "Lv.10", "Lv.10"],
    [bug, bugPoison, bug]
];
const ben =[
    ["Rattata", "Ekans"],
    [rattata, ekans],
    ["Lv.11", "Lv.11"],
    [normal, poison]
];
const greg =[
    ["Weedle", "Kakuna", "Caterpie", "Metapod"],
    [weedle, kakuna, caterpie, metapod],
    ["Lv.9", "Lv.9", "Lv.9", "Lv. 9"],
    [bugPoison, bugPoison, bug, bug]
];
const sally =[
    ["Rattata", "Nidoran♀"],
    [rattata, nidoranf],
    ["Lv.10", "Lv.10"],
    [normal, poison]
];
const james =[
    ["Caterpie", "Metapod"],
    [caterpie, metapod],
    ["Lv.11", "Lv.11"],
    [bug, bug]
];
const robin =[
    ["Jigglypuff"],
    [jigglypuff],
    ["Lv.14"],
    [normal]
];
//episode4
const calvin =[
    ["Spearow"],
    [spearow],
    ["Lv.14"],
    [normalFlying]
];
const iris =[
    ["Clefairy"],
    [clefairy],
    ["Lv.14"],
    [normal]
];
const jovan =[
    ["Magnemite", "Voltorb"],
    [magnemite, voltorb],
    ["Lv.11", "Lv.11"],
    [electricSteel, electric]
];
const robby = [
    ["Caterpie", "Metapod", "Caterpie"],
    [caterpie, metapod, caterpie],
    ["Lv.10", "Lv.10", "Lv.10"],
    [bug, bug, bug]
];
const rocketGruntMtMoon1 = [
    ["Sandshrew", "Rattata", "Zubat"],
    [sandshrew, rattata, zubat],
    ["Lv.11", "Lv.11", "Lv.11"],
    [ground, normal, poisonFlying]
];
const kent =[
    ["Weedle", "Kakuna"],
    [weedle, kakuna],
    ["Lv.11", "Lv.11"],
    [bugPoison, bugPoison]
];
const miriam =[
    ["Oddish", "Bellsprout"],
    [oddish, bellsprout],
    ["Lv.11", "Lv.11"],
    [grassPoison, grassPoison]
];
const rocketGruntMtMoon2 =[
    ["Zubat", "Ekans"],
    [zubat, ekans],
    ["Lv.11", "Lv.11"],
    [poisonFlying, poison]
];
const josh = [
    ["Rattata", "Rattata", "Zubat"],
    [rattata, rattata, zubat],
    ["Lv.10", "Lv.10", "Lv.10"],
    [normal, normal, poisonFlying]
];
const marcos = [
    ["Geodude", "Geodude", "Onix"],
    [geodude, geodude, onix],
    ["Lv.10", "Lv.10", "Lv.10"],
    [rockGround, rockGround, rockGround]
];
const rocketGruntMtMoon3 =[
    ["Rattata", "Sandshrew"],
    [rattata, sandshrew],
    ["Lv.13", "Lv.13"],
    [normal, ground]
];
const rocketGruntMtMoon4 =[
    ["Rattata", "Zubat"],
    [rattata, zubat],
    ["Lv.13", "Lv.13"],
    [normal, poisonFlying]
];
const miguel = [
    ["Grimer", "Voltorb", "Koffing"],
    [grimer, voltorb, koffing],
    ["Lv.12", "Lv.12", "Lv.12"],
    [poison, electric, poison]
];
//episode5
const rival3 = [
    ["Pidgeotto", "Abra", "Rattata", "Bulbasaur"],
    [pidgeotto, abra, rattata, bulbasaur],
    ["Lv.17", "Lv.16", "Lv.15", "Lv.18"],
    [normalFlying, psychic, normal, grassPoison]
];

const cale = [
    ["Caterpie", "Weedle", "Metapod", "Kakuna"],
    [caterpie, weedle, metapod, kakuna],
    ["Lv.10", "Lv.10", "Lv.10", "Lv.10"],
    [bug, bugPoison, bug, bugPoison]
];

const ali = [
    ["Pidgey", "Oddish", "Bellsprout"],
    [pidgey, oddish, bellsprout],
    ["Lv.12", "Lv.12", "Lv.12"],
    [normalFlying, grassPoison, grassPoison]
];

const timmy = [
    ["Sandshrew", "Ekans"],
    [sandshrew, ekans],
    ["Lv.14", "Lv.14"],
    [ground, poison]
];

const reli = [
    ["Nidoran♂", "Nidoran♀"],
    [nidoranm, nidoranf],
    ["Lv.16", "Lv.16"],
    [poison, poison]
];

const ethan = [
    ["Mankey"],
    [mankey],
    ["Lv.18"],
    [fighting]
];

const rocketGruntRoute24_1 = [
    ["Ekans", "Zubat"],
    [ekans, zubat],
    ["Lv.15", "Lv.15"],
    [poison, poisonFlying]
];

const shane = [
    ["Rattata", "Ekans"],
    [rattata, ekans],
    ["Lv.14", "Lv.14"],
    [normal, poison]
];

const franklin = [
    ["Machop", "Geodude"],
    [machop, geodude],
    ["Lv.15", "Lv.15"],
    [fighting, rockGround]
];

const wayne = [
    ["Onix"],
    [onix],
    ["Lv.17"],
    [rockGround]
];

const joey = [
    ["Rattata", "Spearow"],
    [rattata, spearow],
    ["Lv.15", "Lv.15"],
    [normal, normalFlying]
];

const dan = [
    ["Slowpoke"],
    [slowpoke],
    ["Lv.17"],
    [waterPsychic]
];

const kelsey = [
    ["Nidoran♂", "Nidoran♀"],
    [nidoranm, nidoranf],
    ["Lv.15", "Lv.15"],
    [poison, poison]
];

const nob = [
    ["Geodude", "Geodude", "Machop", "Geodude"],
    [geodude, geodude, machop, geodude],
    ["Lv.13", "Lv.13", "Lv.13", "Lv.13"],
    [rockGround, rockGround, fighting, rockGround]
];

const flint = [
    ["Rattata", "Ekans"],
    [rattata, ekans],
    ["Lv.14", "Lv.14"],
    [normal, poison]
];

const chad = [
    ["Ekans", "Sandshrew"],
    [ekans, sandshrew],
    ["Lv.14", "Lv.14"],
    [poison, ground]
];

const haley = [
    ["Oddish", "Pidgey", "Oddish"],
    [oddish, pidgey, oddish],
    ["Lv.13", "Lv.13", "Lv.13"],
    [grassPoison, normalFlying, grassPoison]
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
populateTable(rival3, "rival3");
populateTable(cale, "cale");
populateTable(ali, "ali");
populateTable(timmy, "timmy");
populateTable(reli, "reli");
populateTable(ethan, "ethan");
populateTable(rocketGruntRoute24_1, "rocketGruntRoute24_1");
populateTable(shane, "shane");
populateTable(franklin, "franklin");
populateTable(wayne, "wayne");
populateTable(joey, "joey");
populateTable(dan, "dan");
populateTable(kelsey, "kelsey");
populateTable(nob, "nob");
populateTable(flint, "flint");
populateTable(chad, "chad");
populateTable(haley, "haley");










