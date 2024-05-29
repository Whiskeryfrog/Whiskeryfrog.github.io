//create card function
function trainerCard1(trainerName, name, imagePath, insight, cssClass = "", difficulty = "") {
    let starRatings;
    switch (difficulty.toLowerCase()) {
      case "extremely easy":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "easy":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "normal":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "hard":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "challenging":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> ";
        break;
      default:
        starRatings = " <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
    }
  
    // Define the HTML template with string interpolation
    const template = `
      <div class="containerMain2 clickable" onclick="toggleElement('display${name}')">
        <span class="bigtext slightlysmall titlealign ${cssClass}"> 
          ${trainerName} <br>
          ${starRatings}
        </span>
        <img src="${imagePath}">
        <p class="titlealign">${insight}
        </p>
        <div id="display${name}" class="rules-content" style="overflow-x: auto; height: 0;">
          <table border="1" class="customTable" id="${name}">
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    `;
  
    // No return statement with format method needed - simply return the template string
    return template;
  }

function trainerCard2(trainerName, name, name2, imagePath, insight, cssClass = "", difficulty = "") {
    let starRatings;
    switch (difficulty.toLowerCase()) {
      case "extremely easy":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i><i class=\"fa-regular fa-star\"></i> ";
        break;
      case "easy":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "normal":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "hard":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
        break;
      case "challenging":
        starRatings = " <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> <i class=\"fa-solid fa-star\"></i> ";
        break;
      default:
        starRatings = " <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> <i class=\"fa-regular fa-star\"></i> ";
    }
  
    // Define the HTML template with string interpolation
    const template = `
      <div class="containerMain2 clickable" onclick="toggleElement('display${name}')">
        <span class="bigtext slightlysmall titlealign ${cssClass}"> 
          ${trainerName} <br>
          ${starRatings}
        </span>
        <img src="${imagePath}">
        <p class="titlealign">${insight}
        </p>
        <div id="display${name}" class="rules-content" style="overflow-x: auto; height: 0;">
          <table border="1" class="customTable" id="${name}">
            <tbody>
            </tbody>
          </table>
          <table border="1" class="customTable" id="${name2}">
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    `;
  
    // No return statement with format method needed - simply return the template string
    return template;
  }

//trainer Sprites
const bugCatcher = "sprites/7.png";
const camperMale = "sprites/Spr_FRLG_Camper.png";
const camperFemale = "sprites/26.png";
const lass = "sprites/Spr_FRLG_Lass.png";
const youngster = "sprites/Spr_FRLG_Youngster.png";
const nerd = "sprites/53.png";
const rocketGruntMale = "sprites/57.png";
const hiker = "sprites/26.png";
const swimmerMale = "sprites/Spr_FRLG_Swimmer_M.png";
const gambler = "sprites/24.png";
const engineer = "sprites/22.png";

//important Trainer Sprites
const rivalsprite1 = "sprites/Blue1.webp";
const brocksprite = "sprites/Brock_FRLG.webp";
const mistysprite = "sprites/31.png";



//EPISODE 1
const episode1 = [
    { name: 'TOADMAN (Rival)', 
        id: 'rival1', 
     image: rivalsprite1, 
   insight: 'This will be the very first battle that you will ever do in this challenge and if you ask me, if you want, you can not consider this battle part of the challenge since technically the challenge will only start once you can start catch Pokemon in the wild so losing here does not really matter (If you want to at least).',
  classimp: 'importantname',
difficulty: 'normal' },
  ];
//EPISODE 2
const episode2 = [
    { name: 'TOADMAN (Rival)', 
        id: 'rival2', 
     image: rivalsprite1, 
   insight: 'This is the second time you will challenge your rival in a battle and is completely optional since you can just go straight ahead of Viridian forest and move on with your adventure. This fight is not that hard if you prepare accordingly and caught some Pokemon that can help with your rival\'s two party members.',
  classimp: 'importantname',
difficulty: 'easy' },

    { name: 'Rick', 
        id: 'rick', 
     image: bugCatcher, 
   insight: 'It\'s just bugs, if you chose charmander this would be a piece of cake but if you chose the other two then it is still very easy. Just don\'t forget your antidotes, you\'re gonna need it.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Doug', 
        id: 'doug', 
     image: bugCatcher, 
   insight: 'You really need to that antidote now.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Anthony', 
        id: 'anthony', 
     image: bugCatcher, 
   insight: 'EZ, just press A.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Charlie', 
        id: 'charlie', 
     image: bugCatcher, 
   insight: 'Even easier, but with more EXP because of Metapods.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Sammy', 
        id: 'sammy', 
     image: bugCatcher, 
   insight: 'Just a Weedle, after all of the battles you went through.', 
  classimp: '',
difficulty: 'extremely easy' },

  ];
//EPISODE 3
const episode3 = [
    { name: 'Liam', 
        id: 'liam', 
     image: camperMale, 
   insight: 'This is the only gym trainer in Pewter City gym and its actually skippable if you want to. Also extremely easy if you have a water or grass type Pokemon.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Brock', 
        id: 'brock', 
     image: brocksprite, 
   insight: 'Easiest gym leader you will ever face if you chose Squirtle or Bulbasaur. Charmander could also stand a chance with its metal claw although you would need to be careful with it.',
  classimp: 'importantname',
difficulty: 'extremely easy' },

    { name: 'Janice', 
        id: 'janice', 
     image: lass, 
   insight: 'Probably an easy match considering you already fought a gym leader prior to this fight.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Colton', 
        id: 'colton', 
     image: bugCatcher, 
   insight: 'Having bug catcher this late will not really cause you any problems.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Ben', 
        id: 'ben', 
     image: youngster, 
   insight: 'I guess he likes his shorts? Watch out for intimidate Ekans.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Greg', 
        id: 'greg', 
     image: bugCatcher, 
   insight: 'Another bug catcher this late in the game.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Sally', 
        id: 'sally', 
     image: lass, 
   insight: 'Another fodder trainer, I\'m pretty you guys get the jist of this route. Though be careful with poison point Nidoran♀', 
  classimp: '',
difficulty: 'easy' },

    { name: 'James', 
        id: 'james', 
     image: bugCatcher, 
   insight: 'BUG', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Robin', 
        id: 'robin', 
     image: lass, 
   insight: 'Just a jigglypuff, nothing too crazy', 
  classimp: '',
difficulty: 'easy' }

  ];
  
  /*
//EPISODE 4
const episode4 = [
    { name: 'Calvin', 
        id: 'calvin', 
     image: youngster, 
   insight: 'I\'m basically just cleaning up here.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Iris', 
        id: 'iris', 
     image: lass, 
   insight: 'Not the champion from Black 2 and White 2.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Jovan', 
        id: 'jovan', 
     image: nerd, 
   insight: 'If you are not prepared, this fight would be a lot more difficult considering he has a Magnemite which is very tanky.',
  classimp: '',
difficulty: 'normal' },

    { name: 'Robby', 
        id: 'robby', 
     image: bugCatcher, 
   insight: 'Another Bug Catcher, nothing too special.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntMtMoon1', 
     image: rocketGruntMale, 
   insight: 'Your very first Rocket grunt battle. Nothing too special to be honest', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Kent', 
        id: 'kent', 
     image: bugCatcher, 
   insight: 'What is up with these bug catchers', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Miriam', 
        id: 'miriam', 
     image: lass, 
   insight: 'You know what, I\'m going to stop adding these side comments for trainers who are just fodders.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntMtMoon2', 
     image: rocketGruntMale, 
   insight: 'I have nothing to say about this particular trainer.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Josh', 
        id: 'josh', 
     image: youngster, 
   insight: 'I forgot to speed this up in the video.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Marcos', 
        id: 'marcos', 
     image: hiker, 
   insight: 'I have nothing to say about this particular trainer.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntMtMoon3', 
     image: rocketGruntMale, 
   insight: 'I have nothing to say about this particular trainer.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntMtMoon4', 
     image: rocketGruntMale, 
   insight: 'I have nothing to say about this particular trainer.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Miguel', 
        id: 'miguel', 
     image: nerd, 
   insight: 'Despacito', 
  classimp: '',
difficulty: 'easy' }

  ];  
  
//EPISODE 5
const episode5 = [
    { name: 'TOADMAN (Rival)', 
        id: 'rival3', 
     image: rivalsprite1, 
   insight: 'If you are not ready for this fight, it might cause you a bit of trouble.<br> But would you lose?<br> Nahh, I\'d Win. <br>In all seriousness, the only members that could cause you trouble are Pidgeotto and Bulbasaur especially if you have nothing against them.',
  classimp: 'importantname',
difficulty: 'normal' },

    { name: 'Cale', 
        id: 'cale', 
     image: bugCatcher, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Ali', 
        id: 'ali', 
     image: lass, 
   insight: 'Just be extra careful with her grass types but she is mostly easy considering the Pokemon that I have.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Timmy', 
        id: 'timmy', 
     image: youngster, 
   insight: 'I don\'t what to say other than be careful with Ekans.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Reli', 
        id: 'reli', 
     image: lass, 
   insight: 'Extremely easy other than the part where both Nidorans have poison point.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Ethan', 
        id: 'ethan', 
     image: camperMale, 
   insight: 'A flying move should do the trick', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntRoute24_1', 
     image: rocketGruntMale, 
   insight: 'Again, Psychic type moves are your key to this battle.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Shane', 
        id: 'shane', 
     image: camperMale, 
   insight: 'A flying move should do the trick', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Franklin', 
        id: 'franklin', 
     image: hiker, 
   insight: 'Just be careful with Machop since I am pretty sure it can knock out any normal types that you have.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Joey', 
        id: 'joey', 
     image: youngster, 
   insight: 'Not the iconic Youngster Joey from Pokemon Crystal and also not threatening at all.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Wayne', 
        id: 'wayne', 
     image: hiker, 
   insight: 'Any water or grass move should do the trick.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Dan', 
        id: 'dan', 
     image: youngster, 
   insight: 'He has a Slowpoke which is tanky but its the only thing you are going to be dealing with so not really a problem.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Dan', 
        id: 'dan', 
     image: youngster, 
   insight: 'He has a Slowpoke which is tanky but its the only thing you are going to be dealing with so not really a problem.', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Kelsey', 
        id: 'kelsey', 
     image: camperFemale, 
   insight: 'Just be watchful of poison point from her two Nidorans.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Nob', 
        id: 'nob', 
     image: hiker, 
   insight: 'Free EXP. Also, what a name.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Flint', 
        id: 'flint', 
     image: camperMale, 
   insight: 'What is up with these team compositions, by now I am pretty sure that we have encountered this team composition many times now.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Chad', 
        id: 'chad', 
     image: youngster, 
   insight: 'Not really chad in my opinion.', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Haley', 
        id: 'haley', 
     image: lass, 
   insight: 'I have nothing to say about this particular trainer.', 
  classimp: '',
difficulty: 'extremely easy' }

  ];
//EPISODE 6
const episode6 = [
    { name: 'Luis', 
        id: 'luis', 
     image: swimmerMale, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Diana', 
        id: 'diana', 
     image: camperFemale, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Misty', 
        id: 'misty', 
     image: mistysprite, 
   insight: 'This fight is probably the first fight that I would consider as somewhat challenging considering the options that I had during the playthrough. <br><br> If you chose Bulbasaur as your starter, you would probably have an easier time considering that her Starmie does not have any Psychic type moves. <br><br> If you somehow did not encounter a Bellsprout (or Oddish in FireRed), this gym will probably give you some trouble.',
  classimp: 'importantname',
difficulty: 'normal' }

  ];
//EPISODE 7
const episode7 = [
    { name: 'Rocket Grunt', 
        id: 'rocketCeruleanCity', 
     image: rocketGruntMale, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Keigo', 
        id: 'keigo', 
     image: bugCatcher, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Ricky', 
        id: 'ricky', 
     image: camperMale, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremeley easy' },

    { name: 'Nancy', 
        id: 'nancy', 
     image: camperFemale, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Elijah', 
        id: 'elijah', 
     image: bugCatcher, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Isabelle', 
        id: 'isabelle', 
     image: camperFemale, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Jeff', 
        id: 'jeff', 
     image: camperMale, 
   insight: 'My name a Jeff',
  classimp: '',
difficulty: 'easy' },

    { name: 'Eddie', 
        id: 'eddie', 
     image: youngster, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Dillon', 
        id: 'dillon', 
     image: youngster, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Jasper', 
        id: 'jasper', 
     image: gambler, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Braxton', 
        id: 'braxton', 
     image: engineer, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Hugo', 
        id: 'hugo', 
     image: gambler, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Bernie', 
        id: 'bernie', 
     image: engineer, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'normal' },

    { name: 'Dave', 
        id: 'dave', 
     image: youngster, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Dirk', 
        id: 'dirk', 
     image: engineer, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Yasu', 
        id: 'yasu', 
     image: youngster, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' },

    { name: 'Darian', 
        id: 'darian', 
     image: engineer, 
   insight: 'I have nothing to say about this particular trainer.',
  classimp: '',
difficulty: 'easy' }
  ];
*/


function displayTrainerCard(trainer) {
    const card = trainerCard1(trainer.name, trainer.id, trainer.image, trainer.insight, trainer.classimp, trainer.difficulty);
    const container = document.getElementById(trainer.id + 'Container');
    container.innerHTML = card;
  }
  
episode1.forEach(displayTrainerCard);
episode2.forEach(displayTrainerCard);
episode3.forEach(displayTrainerCard);
/*
episode4.forEach(displayTrainerCard);
episode5.forEach(displayTrainerCard);
episode6.forEach(displayTrainerCard);
episode7.forEach(displayTrainerCard);
*/

//populate Table function
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
//episode6
const luis = [
    ["Horsea", "Shellder"],
    [horsea, shellder],
    ["Lv.16", "Lv.16"],
    [water, water]
];
const diana = [
    ["Goldeen"],
    [goldeen],
    ["Lv.19"],
    [water]
];
const misty = [
    ["Staryu", "Starmie"],
    [staryu, starmie],
    ["Lv.18", "Lv.21"],
    [water, waterPsychic]
];
//episode7
const rocketCeruleanCity = [
    ["Machop", "Drowzee"],
    [machop, drowzee],
    ["Lv.17", "Lv.17"],
    [fighting, psychic]
];

const keigo = [
    ["Weedle", "Caterpie", "Weedle"],
    [weedle, caterpie, weedle],
    ["Lv.16", "Lv.16", "Lv.16"],
    [bugPoison, bug, bugPoison]
];

const ricky = [
    ["Squirtle"],
    [squirtle],
    ["Lv.20"],
    [water]
];

const nancy = [
    ["Rattata", "Pikachu"],
    [rattata, pikachu],
    ["Lv.16", "Lv.16"],
    [normal, electric]
];

const elijah = [
    ["Butterfree"],
    [butterfree],
    ["Lv.20"],
    [bugFlying]
];

const isabelle = [
    ["Pidgey", "Pidgey", "Pidgey"],
    [pidgey, pidgey, pidgey],
    ["Lv.16", "Lv.16", "Lv.16"],
    [normalFlying, normalFlying, normalFlying]
];

const jeff = [
    ["Spearow", "Raticate"],
    [spearow, raticate],
    ["Lv.16", "Lv.16"],
    [normalFlying, normal]
];

const eddie = [
    ["Ekans"],
    [ekans],
    ["Lv.21"],
    [poison]
];

const hugo = [
    ["Poliwag", "Horsea"],
    [poliwag, horsea],
    ["Lv.18", "Lv.18"],
    [water, water]
];

const bernie = [
    ["Magnemite", "Magnemite", "Magneton"],
    [magnemite, magnemite, magneton],
    ["Lv.18", "Lv.18", "Lv.18"],
    [electricSteel, electricSteel, electricSteel]
];

const jasper = [
    ["Bellsprout", "Oddish"],
    [bellsprout, oddish],
    ["Lv.18", "Lv.18"],
    [grassPoison, grassPoison]
];

const dave = [
    ["Nidoran♂", "Nidorino"],
    [nidoranm, nidorino],
    ["Lv.18", "Lv.18"],
    [poison, poison]
];

const dillon = [
    ["Sandshrew", "Zubat"],
    [sandshrew, zubat],
    ["Lv.19", "Lv.19"],
    [ground, poisonFlying]
];

const braxton = [
    ["Magnemite"],
    [magnemite],
    ["Lv.21"],
    [electricSteel]
];

const yasu = [
    ["Rattata", "Rattata", "Raticate"],
    [rattata, rattata, raticate],
    ["Lv.17", "Lv.17", "Lv.17"],
    [normal, normal, normal]
];

const darian = [
    ["Growlithe", "Vulpix"],
    [growlithe, vulpix],
    ["Lv.18", "Lv.18"],
    [fire, fire]
];

const dirk = [
    ["Voltorb", "Magnemite"],
    [voltorb, magnemite],
    ["Lv.18", "Lv.18"],
    [electric, electricSteel]
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
//episode6
populateTable(luis, "luis");
populateTable(diana, "diana");
populateTable(misty, "misty");
//episode7
populateTable(rocketCeruleanCity, "rocketCeruleanCity");
populateTable(keigo, "keigo");
populateTable(ricky, "ricky");
populateTable(nancy, "nancy");
populateTable(elijah, "elijah");
populateTable(isabelle, "isabelle");
populateTable(jeff, "jeff");
populateTable(eddie, "eddie");
populateTable(hugo, "hugo");
populateTable(bernie, "bernie");
populateTable(jasper, "jasper");
populateTable(dave, "dave");
populateTable(dillon, "dillon");
populateTable(braxton, "braxton");
populateTable(yasu, "yasu");
populateTable(darian, "darian");
populateTable(dirk, "dirk");
