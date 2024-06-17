function populateTable(partyData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

    const tbody = table.getElementsByTagName("tbody")[0]; // Get the table body

    // Loop through each row in the data
    partyData.forEach(row => {
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
const party1 =[
    ["GILAMONSTR", "LIZARD", "NEWT", "CAIMAN"],
    [squirtle,weedle,rattata,caterpie],
    ["Lv.9","Lv.4","Lv.3","Lv.4"],
    [water, bugPoison, normal,bug]
];

//episode2
const party2 =[
    ["GILAMONSTR", "LIZARD", "NEWT", "CAIMAN"],
    [squirtle,beedrill,rattata,butterfree],
    ["Lv.12","Lv.10","Lv.10","Lv.10"],
    [water, bugPoison, normal,bugFlying]
];
//episode3
const party3_1 =[
    ["GILAMONSTR", "LIZARD", "NEWT"],
    [wartortle,beedrill,rattata],
    ["Lv.16","Lv.14","Lv.14"],
    [water, bugPoison, normal]
];
const party3_2 =[
    ["CAIMAN", "IGUANA"],
    [butterfree,nidoranf],
    ["Lv.15","Lv.7"],
    [bugFlying, poison]
];
//episode4
const party4_1 =[
    ["GILAMONSTR", "LIZARD", "NEWT"],
    [wartortle,beedrill,rattata],
    ["Lv.17","Lv.14","Lv.14"],
    [water, bugPoison, normal]
];
const party4_2 =[
    ["CAIMAN", "IGUANA", "FLYLIZARD"],
    [butterfree,nidorina, zubat],
    ["Lv.17","Lv.16", "Lv.10"],
    [bugFlying, poison, poisonFlying]
];
//episode5
const party5_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,bellsprout,rattata],
    ["Lv.20","Lv.13","Lv.14"],
    [water, grassPoison, normal]
];
const party5_2 =[
    ["CAIMAN", "IGUANA", "FLYLIZARD"],
    [butterfree,nidorina, zubat],
    ["Lv.20","Lv.18", "Lv.13"],
    [bugFlying, poison, poisonFlying]
];
//episode6
const party6_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,bellsprout,raticate],
    ["Lv.21","Lv.18","Lv.20"],
    [water, grassPoison, normal]
];
const party6_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.20","Lv.20", "Lv.20"],
    [bugFlying, poison, normalFlying]
];
//episode7
const party7_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.21","Lv.23","Lv.21"],
    [water, grassPoison, normal]
];
const party7_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.21","Lv.21", "Lv.20"],
    [bugFlying, poison, normalFlying]
];
//episode8
const party8_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.23","Lv.23","Lv.22"],
    [water, grassPoison, normal]
];
const party8_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.21","Lv.22", "Lv.22"],
    [bugFlying, poison, normalFlying]
];
//episode9
const party9_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.23","Lv.23","Lv.24"],
    [water, grassPoison, normal]
];
const party9_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.21","Lv.22", "Lv.22"],
    [bugFlying, poison, normalFlying]
];  
//episode10
const party10_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.24","Lv.23","Lv.24"],
    [water, grassPoison, normal]
];
const party10_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.24","Lv.22", "Lv.24"],
    [bugFlying, poison, normalFlying]
];      
//episode11
const party11_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.28","Lv.26","Lv.24"],
    [water, grassPoison, normal]
];
const party11_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.24","Lv.22", "Lv.24"],
    [bugFlying, poison, normalFlying]
];  
//episode12
const party12_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.28","Lv.27","Lv.26"],
    [water, grassPoison, normal]
];
const party12_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.25","Lv.27", "Lv.26"],
    [bugFlying, poison, normalFlying]
];  
//episode13
const party13_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.29","Lv.27","Lv.27"],
    [water, grassPoison, normal]
];
const party13_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.26","Lv.28", "Lv.28"],
    [bugFlying, poison, normalFlying]
];
//episode14
const party14_1 =[
    ["GILAMONSTR", "GECKO", "NEWT"],
    [wartortle,weepinbell,raticate],
    ["Lv.29","Lv.28","Lv.28"],
    [water, grassPoison, normal]
];
const party14_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.30","Lv.29", "Lv.28"],
    [bugFlying, poison, normalFlying]
];
//episode15
const party15_1 =[
    ["GILAMONSTR", "GECKO", "KOMODO"],
    [wartortle,weepinbell,sandshrew],
    ["Lv.30","Lv.28","Lv.12"],
    [water, grassPoison, ground]
];
const party15_2 =[
    ["CAIMAN", "IGUANA", "CROCODILE"],
    [butterfree,nidorina, fearow],
    ["Lv.30","Lv.30", "Lv.30"],
    [bugFlying, poison, normalFlying]
];
//episode16
const party16_1 =[
    ["GILAMONSTR", "EGG", "KOMODO"],
    [wartortle,voltorb,sandslash],
    ["Lv.33","Lv.16","Lv.22"],
    [water, electric, ground]
];
const party16_2 =[
    ["ANACONDA", "IGUANA", "CROCODILE"],
    [snorlax,nidorina, fearow],
    ["Lv.32","Lv.31", "Lv.32"],
    [normal, poison, normalFlying]
];
//episode17
const party17_1 =[
    ["GILAMONSTR", "EGG", "KOMODO"],
    [blastoise,electrode,sandslash],
    ["Lv.39","Lv.38","Lv.39"],
    [water, electric, ground]
];
const party17_2 =[
    ["RATTLESNEK", "IGUANA", "CROCODILE"],
    [starmie,nidorina, fearow],
    ["Lv.37","Lv.36", "Lv.38"],
    [waterPsychic, poison, normalFlying]
];
//episode18
const party18_1 =[
    ["GILAMONSTR", "EGG", "KOMODO"],
    [blastoise,electrode,sandslash],
    ["Lv.40","Lv.40","Lv.40"],
    [water, electric, ground]
];
const party18_2 =[
    ["RATTLESNEK", "IGUANA", "CROCODILE"],
    [starmie,nidorina, fearow],
    ["Lv.39","Lv.40", "Lv.40"],
    [waterPsychic, poison, normalFlying]
];
//episode19
const party19_1 =[
    ["GILAMONSTR", "EGG", "KOMODO"],
    [blastoise,electrode,sandslash],
    ["Lv.40","Lv.40","Lv.40"],
    [water, electric, ground]
];
const party19_2 =[
    ["RATTLESNEK", "IGUANA", "CROCODILE"],
    [starmie,nidorina, fearow],
    ["Lv.41","Lv.40", "Lv.40"],
    [waterPsychic, poison, normalFlying]
];
//episode20
const party20_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.25","Lv.40","Lv.25"],
    [fighting, electric, waterIce]
];
const party20_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidorina, doduo],
    ["Lv.41","Lv.40", "Lv.24"],
    [waterPsychic, poison, normalFlying]
];
//episode21
const party21_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.40","Lv.46","Lv.40"],
    [fighting, electric, waterIce]
];
const party21_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidorina, dodrio],
    ["Lv.42","Lv.40", "Lv.42"],
    [waterPsychic, poison, normalFlying]
];
//episode22
const party22_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.47","Lv.47","Lv.47"],
    [fighting, electric, waterIce]
];
const party22_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidorina, dodrio],
    ["Lv.44","Lv.47", "Lv.47"],
    [waterPsychic, poison, normalFlying]
];
//episode23
const party23_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.50","Lv.50","Lv.50"],
    [fighting, electric, waterIce]
];
const party23_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidorina, dodrio],
    ["Lv.48","Lv.50", "Lv.50"],
    [waterPsychic, poison, normalFlying]
];
//episode24
const party24_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.50","Lv.50","Lv.50"],
    [fighting, electric, waterIce]
];
const party24_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidorina, dodrio],
    ["Lv.50","Lv.50", "Lv.50"],
    [waterPsychic, poison, normalFlying]
];
//episode25
const party25_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.51","Lv.50","Lv.50"],
    [fighting, electric, waterIce]
];
const party25_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidoqueen, dodrio],
    ["Lv.50","Lv.53", "Lv.50"],
    [waterPsychic, poison, normalFlying]
];
//episode26
const party26_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.51","Lv.52","Lv.51"],
    [fighting, electric, waterIce]
];
const party26_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidoqueen, dodrio],
    ["Lv.53","Lv.53", "Lv.53"],
    [waterPsychic, poison, normalFlying]
];
//episode27
const party27_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.59","Lv.59","Lv.59"],
    [fighting, electric, waterIce]
];
const party27_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidoqueen, dodrio],
    ["Lv.59","Lv.59", "Lv.59"],
    [waterPsychic, poison, normalFlying]
];
//episode28
const party28_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.59","Lv.59","Lv.59"],
    [fighting, electric, waterIce]
];
const party28_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidoqueen, dodrio],
    ["Lv.59","Lv.59", "Lv.59"],
    [waterPsychic, poison, normalFlying]
];
//episode29 
const party29_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.59","Lv.59","Lv.59"],
    [fighting, electric, waterIce]
];
const party29_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidoqueen, dodrio],
    ["Lv.60","Lv.59", "Lv.59"],
    [waterPsychic, poison, normalFlying]
];
//episode30 
const party30_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.59","Lv.59","Lv.60"],
    [fighting, electric, waterIce]
];
const party30_2 =[
    ["RATTLESNEK", "IGUANA", "BOA"],
    [starmie,nidoqueen, dodrio],
    ["Lv.60","Lv.59", "Lv.59"],
    [waterPsychic, poison, normalFlying]
];
//episodefinale  
const partyfinale_1 =[
    ["CHAMELEON", "EGG", "MESOSAURUS"],
    [hitmonlee,electrode,lapras],
    ["Lv.59","Lv.59","Lv.60"],
    [fighting, electric, waterIce]
];
const partyfinale_2 =[
    ["RATTLESNEK", "IGUANA"],
    [starmie,nidoqueen],
    ["Lv.60","Lv.59"],
    [waterPsychic, poison]
];

populateTable(party1, "party1");

populateTable(party2, "party2");

populateTable(party3_1, "party3_1");
populateTable(party3_2, "party3_2");

populateTable(party4_1, "party4_1");
populateTable(party4_2, "party4_2");

populateTable(party5_1, "party5_1");
populateTable(party5_2, "party5_2");

populateTable(party6_1, "party6_1");
populateTable(party6_2, "party6_2");

populateTable(party7_1, "party7_1");
populateTable(party7_2, "party7_2");

populateTable(party8_1, "party8_1");
populateTable(party8_2, "party8_2");

populateTable(party9_1, "party9_1");
populateTable(party9_2, "party9_2");

populateTable(party10_1, "party10_1");
populateTable(party10_2, "party10_2");

populateTable(party11_1, "party11_1");
populateTable(party11_2, "party11_2");

populateTable(party12_1, "party12_1");
populateTable(party12_2, "party12_2");

populateTable(party13_1, "party13_1");
populateTable(party13_2, "party13_2");

populateTable(party14_1, "party14_1");
populateTable(party14_2, "party14_2");

populateTable(party15_1, "party15_1");
populateTable(party15_2, "party15_2");

populateTable(party16_1, "party16_1");
populateTable(party16_2, "party16_2");

populateTable(party17_1, "party17_1");
populateTable(party17_2, "party17_2");

populateTable(party18_1, "party18_1");
populateTable(party18_2, "party18_2");

populateTable(party19_1, "party19_1");
populateTable(party19_2, "party19_2");

populateTable(party20_1, "party20_1");
populateTable(party20_2, "party20_2");

populateTable(party21_1, "party21_1");
populateTable(party21_2, "party21_2");

populateTable(party22_1, "party22_1");
populateTable(party22_2, "party22_2");

populateTable(party23_1, "party23_1");
populateTable(party23_2, "party23_2");

populateTable(party24_1, "party24_1");
populateTable(party24_2, "party24_2");

populateTable(party25_1, "party25_1");
populateTable(party25_2, "party25_2");

populateTable(party26_1, "party26_1");
populateTable(party26_2, "party26_2");

populateTable(party27_1, "party27_1");
populateTable(party27_2, "party27_2");

populateTable(party28_1, "party28_1");
populateTable(party28_2, "party28_2");

populateTable(party29_1, "party29_1");
populateTable(party29_2, "party29_2");

populateTable(party30_1, "party30_1");
populateTable(party30_2, "party30_2");

populateTable(partyfinale_1, "partyfinale_1");
populateTable(partyfinale_2, "partyfinale_2");
