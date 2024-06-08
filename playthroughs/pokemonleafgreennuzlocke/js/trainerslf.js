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

function trainerCard2(trainerName, name, name1, name2, imagePath, insight, cssClass = "", difficulty = "") {
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
          <table border="1" class="customTable" id="${name1}">
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
const camperFemale = "sprites/39.png";
const lass = "sprites/Spr_FRLG_Lass.png";
const youngster = "sprites/Spr_FRLG_Youngster.png";
const nerd = "sprites/53.png";
const rocketGruntMale = "sprites/57.png";
const hiker = "sprites/26.png";
const swimmerMale = "sprites/Spr_FRLG_Swimmer_M.png";
const gambler = "sprites/24.png";
const engineer = "sprites/22.png";
const gentleman = "sprites/gentleman.png";
const sailor = "sprites/sailor.png";
const fisherman = "sprites/fisherman.png";
const pokemaniac = "sprites/pokemaniac.png";
const twins = "sprites/twins.png";
const biker = "sprites/biker.png";
const youngCouple = "sprites/Spr_FRLG_Young_Couple.png";
const beauty = "sprites/Spr_FRLG_Beauty.png";
const cooltrainerFemale = "sprites/Spr_FRLG_Cooltrainer_F.png";
const chaneller = "sprites/chaneller.png";

//important Trainer Sprites
const rivalsprite1 = "sprites/Blue1.webp";
const brocksprite = "sprites/Brock_FRLG.webp";
const mistysprite = "sprites/31.png";
const rivalsprite2 = "sprites/rival2.png";
const ltsurgesprite = "sprites/ltsurge.png";
const erikasprite = "sprites/Spr_FRLG_Erika.png";
const giovannisprite = "sprites/giovannie.png";
/*
//colton
const coltonCard = trainerCard1('Colton',
                               'colton', 
                               bugCatcher, 
                               'Having bug catcher this late will not really cause you any problems.',
                               "", 
                               "extremely easy");
const coltonContainer = document.getElementById('coltonContainer');
coltonContainer.innerHTML = coltonCard;
//ben
const benCard = trainerCard1('Ben',
                               'ben', 
                               youngster, 
                               'I guess he likes his shorts? Watch out for intimidate Ekans.',
                               "", 
                               "extremely easy");
const benContainer = document.getElementById('benContainer');
benContainer.innerHTML = benCard; 
*/

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
   insight: '', 
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
   insight: '', 
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntMtMoon3', 
     image: rocketGruntMale, 
   insight: '', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Rocket Grunt', 
        id: 'rocketGruntMtMoon4', 
     image: rocketGruntMale, 
   insight: '', 
  classimp: '',
difficulty: 'easy' },

    { name: 'Miguel', 
        id: 'miguel', 
     image: nerd, 
   insight: 'Despacito', 
  classimp: '',
difficulty: 'easy' }
];
  
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
   insight: '',
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
        id: 'rocketGruntRoute24', 
     image: rocketGruntMale, 
   insight: 'Psychic type moves are your key to this battle.', 
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
   insight: '', 
  classimp: '',
difficulty: 'extremely easy' }

];
//EPISODE 6
const episode6 = [
    { name: 'Luis', 
        id: 'luis', 
     image: swimmerMale, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Diana', 
        id: 'diana', 
     image: camperFemale, 
   insight: '',
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
   insight: '',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Keigo', 
        id: 'keigo', 
     image: bugCatcher, 
   insight: '',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Ricky', 
        id: 'ricky', 
     image: camperMale, 
   insight: '',
  classimp: '',
difficulty: 'extremeley easy' },

    { name: 'Nancy', 
        id: 'nancy', 
     image: camperFemale, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Elijah', 
        id: 'elijah', 
     image: bugCatcher, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Isabelle', 
        id: 'isabelle', 
     image: camperFemale, 
   insight: '',
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
   insight: '',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Dillon', 
        id: 'dillon', 
     image: youngster, 
   insight: '',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Jasper', 
        id: 'jasper', 
     image: gambler, 
   insight: '',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Braxton', 
        id: 'braxton', 
     image: engineer, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Hugo', 
        id: 'hugo', 
     image: gambler, 
   insight: '',
  classimp: '',
difficulty: 'extremely easy' },

    { name: 'Bernie', 
        id: 'bernie', 
     image: engineer, 
   insight: '',
  classimp: '',
difficulty: 'normal' },

    { name: 'Dave', 
        id: 'dave', 
     image: youngster, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Dirk', 
        id: 'dirk', 
     image: engineer, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Yasu', 
        id: 'yasu', 
     image: youngster, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'Darian', 
        id: 'darian', 
     image: engineer, 
   insight: '',
  classimp: '',
difficulty: 'easy' }
  ];
//EPISODE 8
const episode8 = [
  { name: 'Thomas', 
      id: 'thomas', 
   image: gentleman, 
 insight: 'Not really too difficult considering I have Gilamonstr with me although I never really used him here in this fight for some reason.',
classimp: '',
difficulty: 'normal' },

  { name: 'Arthur', 
      id: 'arthur', 
   image: gentleman, 
 insight: 'Just be careful with the Nidorans that has both Poison point and Poison sting.',
classimp: '',
difficulty: 'easy' },

  { name: 'Ann', 
      id: 'ann', 
   image: lass, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Tyler', 
      id: 'tyler', 
   image: youngster, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Trevor', 
      id: 'trevor', 
   image: sailor, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Edmond', 
      id: 'edmond', 
   image: sailor, 
 insight: '',
classimp: '',
difficulty: 'easy' },

    { name: 'Dale', 
        id: 'dale', 
     image: fisherman, 
   insight: '',
  classimp: '',
difficulty: 'normal' },

    { name: 'Brooks', 
        id: 'brooks', 
     image: gentleman, 
   insight: '',
  classimp: '',
difficulty: 'normal' },

    { name: 'Dawn', 
        id: 'dawn', 
     image: lass, 
   insight: '',
  classimp: '',
difficulty: 'normal' },

{ name: 'Lamar', 
        id: 'lamar', 
     image: gentleman, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

    { name: 'TOADMAN (Rival)', 
        id: 'rival4', 
     image: rivalsprite2, 
   insight: 'You might get in trouble if you don\'t play your cards correctly but overall not too bad of a fight.',
  classimp: 'importantname',
difficulty: 'normal' },
];
//EPISODE 9
const episode9 = [
  { name: 'Dwayne', 
      id: 'dwayne', 
   image: sailor, 
 insight: 'Just read the heads up for the whole gym and you will know what you are up against.',
classimp: '',
difficulty: 'normal' },

  { name: 'Baily', 
      id: 'baily', 
   image: engineer, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Tucker', 
      id: 'tucker', 
   image: gentleman, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Lt. Surge', 
      id: 'ltsurge', 
   image: ltsurgesprite, 
 insight: 'You are dealing with fast mons here so just watch out and expect to be paralyzed from this fight. Me not using items in battle really added some challenge to this fight.',
classimp: 'importantname',
difficulty: 'normal' }

];
//EPISODE 10
const episode10 = [
  { name: 'Alicia', 
      id: 'alicia', 
   image: camperFemale, 
 insight: 'An easy fight considering I have a lot of Pokemon good againsts grass and poison types',
classimp: '',
difficulty: 'easy' },

  { name: 'Jeremy', 
      id: 'jeremy', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Chris', 
      id: 'chris', 
   image: camperMale, 
 insight: 'Maybe I was training but I decided to not use GILAMONSTR throughout the fight.',
classimp: '',
difficulty: 'easy' },

  { name: 'Brent', 
      id: 'brent', 
   image: bugCatcher, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Conner', 
      id: 'conner', 
   image: bugCatcher, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Drew', 
      id: 'drew', 
   image: camperMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Brice', 
      id: 'brice', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Caitlin', 
      id: 'caitlin', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' }

];
//EPISODE 11
const episode11= [
  { name: 'Heidi', 
      id: 'heidi', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Ashton', 
      id: 'ashton', 
   image: pokemaniac, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Winston', 
      id: 'winston', 
   image: pokemaniac, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Marth', 
      id: 'marth', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Eric', 
      id: 'eric', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Oliver', 
      id: 'oliver', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Lucas', 
      id: 'lucas', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Sofia', 
      id: 'sofia', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Dudley', 
      id: 'dudley', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Cooper', 
      id: 'cooper', 
   image: pokemaniac, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Leah', 
      id: 'leah', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Dana', 
      id: 'dana', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Carol', 
      id: 'carol', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Clark', 
      id: 'clark', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Herman', 
      id: 'herman', 
   image: pokemaniac, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Trent', 
      id: 'trent', 
   image: hiker, 
 insight: '',
classimp: '',
difficulty: 'easy' }

];
//EPISODE12
//rival5
const rival5Card = trainerCard2('TOADMAN (Rival)',
                               'rival5',
                               'rival5_1',
                               'rival5_2',
                               rivalsprite2, 
                               'Not that easy, not that difficult but that Gyarados really gave me a challenge because I don\'t have anything against it.',
                               "importantname", 
                               "normal");
const rival5Container = document.getElementById('rival5Container');
rival5Container.innerHTML = rival5Card;
const meganCard = trainerCard2('Megan',
                               'megan',
                               'megan1',
                               'megan2',
                               lass, 
                               'Not really difficult, just way too many Pokémon.',
                               "", 
                               "easy");
const meganContainer = document.getElementById('meganContainer');
meganContainer.innerHTML = meganCard;

const episode12= [
  { name: 'Julia', 
      id: 'julia', 
   image: lass, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Rich', 
      id: 'rich', 
   image: gambler, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Glenn', 
      id: 'glenn', 
   image: nerd, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Eli & Anne', 
      id: 'eliandanne', 
   image: twins, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Andrea', 
      id: 'andrea', 
   image: lass, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Leslie', 
      id: 'leslie', 
   image: nerd, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Paige', 
      id: 'paige', 
   image: lass, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Jaren', 
      id: 'jaren', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Ricardo', 
      id: 'ricardo', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Aidan', 
      id: 'aidan', 
   image: nerd, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Stan', 
      id: 'stan', 
   image: gambler, 
 insight: '',
classimp: '',
difficulty: 'easy' }

];
//EPISODE13
const maryCard = trainerCard2('Mary',
                               'mary',
                               'mary1',
                               'mary2',
                               cooltrainerFemale, 
                               'Way too many Pokémon for regular trainer in a gym.',
                               "", 
                               "normal");
const maryContainer = document.getElementById('maryContainer');
maryContainer.innerHTML = maryCard;

const episode13= [
  { name: 'Lea & Jed', 
      id: 'leaandjed', 
   image: youngCouple, 
 insight: 'My team was somewhat underleveled and this double battle gave me a challenge even though their Pokémon type is only fire type.',
classimp: '',
difficulty: 'hard' },

  { name: 'Kay', 
      id: 'kay', 
   image: lass, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Bridget', 
      id: 'bridget', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Tina', 
      id: 'tina', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Tamia', 
      id: 'tamia', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Lisa', 
      id: 'lisa', 
   image: lass, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Lori', 
      id: 'lori', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Erika', 
      id: 'erika', 
   image: erikasprite, 
 insight: '',
classimp: '',
difficulty: 'hard' }

];
//EPISODE 14
const rocketGruntHideout7Card = trainerCard2('Rocket Grunt',
                               'rocketGruntHideout7',
                               'rocketGruntHideout71',
                               'rocketGruntHideout72',
                               rocketGruntMale, 
                               '',
                               "", 
                               "easy");
const rocketGruntHideout7Container = document.getElementById('rocketGruntHideout7Container');
rocketGruntHideout7Container.innerHTML = rocketGruntHideout7Card;

const episode14= [
  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout1', 
   image: rocketGruntMale, 
 insight: 'Trust me, you will be fighting grunts that have very similar team variation to this grunt.',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout2', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout3', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout4', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout5', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout8', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntHideout9', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{ name: 'Rocket Grunt', 
      id: 'rocketGruntHideout10', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Rocket Grunt', 
      id: 'rocketGruntHideout11', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Rocket Grunt', 
      id: 'rocketGruntHideout12', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Giovanni', 
      id: 'giovanni1', 
   image: giovannisprite, 
 insight: 'The first time you will be fighting him and to be honest its pretty dissapointing.',
classimp: 'importantname',
difficulty: 'easy' }

];
//EPISODE 15
const episode15= [
  { name: 'Patricia', 
      id: 'patricia', 
   image: chaneller, 
 insight: 'This will not be the last time you fight a team similar to this.',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Carly', 
      id: 'carly', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Hope', 
      id: 'hope', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Laurel', 
      id: 'laurel', 
   image: chaneller, 
 insight: 'Finally! Some variation... kinda',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Jody', 
      id: 'jody', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Paula', 
      id: 'paula', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Ruth', 
      id: 'ruth', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Tammy', 
      id: 'tammy', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Karina', 
      id: 'karina', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Janae', 
      id: 'janae', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Angelica', 
      id: 'angelica', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Jennifer', 
      id: 'jennifer', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Emilia', 
      id: 'emilia', 
   image: chaneller, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntTower1', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntTower2', 
   image: rocketGruntMale, 
 insight: 'Just be very careful with the selfdistructing Koffing. Trust me, I learned it the hard way.',
classimp: '',
difficulty: 'normal' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntTower3', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },
];
//EPISODE 16


function displayTrainerCard(trainer) {
    const card = trainerCard1(trainer.name, trainer.id, trainer.image, trainer.insight, trainer.classimp, trainer.difficulty);
    const container = document.getElementById(trainer.id + 'Container');
    container.innerHTML = card;
  }
  
episode1.forEach(displayTrainerCard);
episode2.forEach(displayTrainerCard);
episode3.forEach(displayTrainerCard);
episode4.forEach(displayTrainerCard);
episode5.forEach(displayTrainerCard);
episode6.forEach(displayTrainerCard);
episode7.forEach(displayTrainerCard);
episode8.forEach(displayTrainerCard);
episode9.forEach(displayTrainerCard);
episode10.forEach(displayTrainerCard);
episode11.forEach(displayTrainerCard);
episode12.forEach(displayTrainerCard);
episode13.forEach(displayTrainerCard);
episode14.forEach(displayTrainerCard);
episode15.forEach(displayTrainerCard);


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

const rocketGruntRoute24 = [
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
//episode8
const thomas = [
  ["Growlithe", "Growlithe"],
  [growlithe, growlithe],
  ["Lv.18", "Lv.19"],
  [fire, fire]
];
const arthur = [
  ["Nidoran♂", "Nidoran♀"],
  [nidoranm, nidoranf],
  ["Lv.19", "Lv.19"],
  [poison, poison]
];
const ann = [
  ["Pidgey", "Nidoran♀"],
  [pidgey, nidoranf],
  ["Lv.18", "Lv.18"],
  [normalFlying, poison]
];
const tyler = [
  ["Nidoran♂"],
  [nidoranm],
  ["Lv.21"],
  [poison]
];
const trevor = [
  ["Machop", "Tentacool"],
  [machop, tentacool],
  ["Lv.17", "Lv.17"],
  [fighting, waterPoison]
];
const edmond = [
  ["Machop", "Shellder"],
  [machop, shellder],
  ["Lv.18", "Lv.18"],
  [fighting, water]
];
const dale = [
  ["Goldeen", "Tentacool", "Goldeen"],
  [goldeen, tentacool, goldeen],
  ["Lv.17", "Lv.17", "Lv.17"],
  [water, waterPoison, water]
];
const brooks = [
  ["Pikachu"],
  [pikachu],
  ["Lv.23"],
  [electric]
];
const dawn = [
  ["Rattata", "Pikachu"],
  [rattata, pikachu],
  ["Lv.18", "Lv.18"],
  [normal, electric]
];
const lamar = [
  ["Growlithe", "Ponyta"],
  [growlithe, ponyta],
  ["Lv.17", "Lv.17"],
  [fire, fire]
];

const rival4 = [
  ["Pidgeotto", "Raticate", "Kadabra", "Ivysaur"],
  [pidgeotto, raticate, kadabra, ivysaur],
  ["Lv.19", "Lv.16", "Lv.18", "Lv.20"],
  [normalFlying, normal, psychic, grassPoison]
];
//episode9
const dwayne= [
  ["Pikachu", "Pikachu"],
  [pikachu, pikachu],
  ["Lv.21", "Lv.21"],
  [electric, electric]
];
const baily= [
  ["Voltorb", "Magnemite"],
  [voltorb, magnemite],
  ["Lv.21", "Lv.21"],
  [electric, electricSteel]
];
const tucker= [
  ["Pikachu"],
  [pikachu],
  ["Lv.23"],
  [electric]
];
const ltsurge = [
  ["Voltorb", "Pikachu", "Raichu"],
  [voltorb, pikachu, raichu],
  ["Lv.21", "Lv.18", "Lv.24"],
  [electric, electric, electric]
];
//episode10
const alicia = [
  ["Oddish", "Bellsprout", "Oddish", "Bellsprout"],
  [oddish, bellsprout, oddish, bellsprout],
  ["Lv.18", "Lv.18", "Lv.18", "lv.18"],
  [grassPoison, grassPoison, grassPoison, grassPoison]
];
const jeremy = [
  ["Machop", "Onix"],
  [machop, onix],
  ["Lv.20", "Lv.20"],
  [fighting, rockGround]
];
const chris = [
  ["Growlithe", "Charmander"],
  [growlithe, charmander],
  ["Lv.21", "Lv.21"],
  [fire, fire]
];
const brent = [
  ["Beedrill", "Beedrill"],
  [beedrill, beedrill],
  ["Lv.19", "Lv.19"],
  [bugPoison, bugPoison]
];
const conner = [
  ["Caterpie", "Weedle", "Venonat"],
  [caterpie, weedle, venonat],
  ["Lv.20", "Lv.20", "Lv.20"],
  [bug, bugPoison, bugPoison]
];
const alan = [
  ["Geodude", "Onix"],
  [geodude, onix],
  ["Lv.21", "Lv.21"],
  [rockGround, rockGround]
];
const drew = [
  ["Rattata", "Sandshrew", "Ekans", "Sandshrew"],
  [rattata, sandshrew, ekans, sandshrew],
  ["Lv.19", "Lv.19", "Lv.19", "lv.19"],
  [normal, ground, poison, ground]
];
const brice = [
  ["Geodude", "Machop", "Geodude"],
  [geodude, machop, geodude],
  ["Lv.20", "Lv.20", "Lv.20"],
  [rockGround, fighting, rockGround]
];
const caitlin = [
  ["Meowth"],
  [meowth],
  ["Lv.23"],
  [normal]
];
//episode11
const heidi = [
  ["Pikachu", "Clefairy"],
  [pikachu, clefairy],
  ["Lv.20", "Lv.20"],
  [electric, normal]
];
const ashton = [
  ["Cubone", "Slowpoke"],
  [cubone, slowpoke],
  ["Lv.23", "Lv.23"],
  [ground, waterPsychic]
];
const winston = [
  ["Slowpoke"],
  [slowpoke],
  ["Lv.25"],
  [waterPsychic]
];
const marth = [
  ["Oddish", "Bulbasaur"],
  [oddish, bulbasaur],
  ["Lv.22", "Lv.22"],
  [grassPoison, grassPoison]
];
const eric = [
  ["Machop", "Onix"],
  [machop, onix],
  ["Lv.20", "Lv.20"],
  [fighting, rockGround]
];
const oliver = [
  ["Onix", "Onix", "Geodude"],
  [onix, onix, geodude],
  ["Lv.20", "Lv.20", "Lv.20"],
  [rockGround, rockGround, rockGround]
];
const lucas = [
  ["Geodude", "Graveler"],
  [geodude, graveler],
  ["Lv.21", "Lv.21"],
  [rockGround, rockGround]
];
const sofia = [
  ["Jigglypuff", "Pidgey", "Meowth"],
  [jigglypuff, pidgey, meowth],
  ["Lv.21", "Lv.21", "Lv.21"],
  [normal, normalFlying, normal]
];
const dudley = [
  ["Geodude", "Geodude","Graveler"],
  [geodude, geodude,graveler],
  ["Lv.21", "Lv.21", "Lv.21"],
  [rockGround, rockGround, rockGround]
];
const cooper = [
  ["Slowpoke", "Slowpoke","Slowpoke"],
  [slowpoke, slowpoke, slowpoke],
  ["Lv.20", "Lv.20", "Lv.20"],
  [waterPsychic, waterPsychic, waterPsychic]
];
const leah = [
  ["Bellsprout", "Clefairy"],
  [bellsprout, clefairy],
  ["Lv.22", "Lv.22"],
  [grassPoison, normal]
];
const dana = [
  ["Meowth", "Oddish", "Pidgey"],
  [meowth, oddish, pidgey],
  ["Lv.20", "Lv.20", "Lv.20"],
  [normal, grassPoison, normalFlying]
];
const carol = [
  ["Pidgey", "Pidgeotto"],
  [pidgey, pidgeotto],
  ["Lv.21", "Lv.21"],
  [normalFlying, normalFlying]
];
const clark = [
  ["Geodude", "Onix"],
  [geodude, onix],
  ["Lv.21", "Lv.21"],
  [rockGround, rockGround]
];
const herman = [
  ["Cubone", "Slowpoke"],
  [cubone, slowpoke],
  ["Lv.20", "Lv.20"],
  [ground, waterPsychic]
];
const trent = [
  ["Onix", "Graveler"],
  [onix, graveler],
  ["Lv.19", "Lv.19"],
  [rockGround, rockGround]
];
//episode12
const rival5_1 = [
  ["Pidgeotto", "Gyarados", "Growlithe"],
  [pidgeotto, gyarados, growlithe],
  ["Lv.25", "Lv.23", "Lv.22"],
  [normalFlying, waterFlying, fire]
];
const rival5_2 = [
  ["Kadabra", "Ivysaur"],
  [kadabra, ivysaur],
  ["Lv.20", "Lv.25"],
  [psychic, grassPoison]
];
const julia = [
  ["Clefairy", "Clefairy"],
  [clefairy, clefairy],
  ["Lv.22", "Lv.22"],
  [normal, normal]
];
const rich = [
  ["Grolithe", "Vulpix"],
  [vulpix, vulpix],
  ["Lv.24", "Lv.24"],
  [fire, fire]
];
const glenn = [
  ["Grimer", "Muk", "Grimer"],
  [grimer, muk, grimer],
  ["Lv.22", "Lv.22", "Lv.22"],
  [poison, poison, poison]
];
const eliandanne = [
  ["Clefairy", "Jigglypuff"],
  [clefairy, jigglypuff],
  ["Lv.22", "Lv.22"],
  [normal, normal]
];
const megan1 = [
  ["Pidgey", "Rattata", "Nidoran♂"],
  [pidgey, rattata, nidoranm],
  ["Lv.19", "Lv.19", "Lv.19"],
  [normalFlying, normal, poison]
];
const megan2 = [
  ["Meowth", "Pikachu"],
  [meowth, pikachu],
  ["Lv.19", "Lv.19"],
  [normal, electric]
];
const andrea = [
  ["Meowth", "Meowth", "Meowth"],
  [meowth, meowth, meowth],
  ["Lv.24", "Lv.24", "Lv.24"],
  [normal, normal, normal]
];
const leslie = [
  ["Koffing"],
  [koffing],
  ["Lv.26"],
  [poison]
];
const paige = [
  ["Nidoran♀", "Nidorina"],
  [nidoranf, nidorina],
  ["Lv.23", "Lv.23"],
  [poison, poison]
];
const jaren = [
  ["Grimer", "Grimer"],
  [grimer, grimer],
  ["Lv.24", "Lv.24"],
  [poison, poison]
];
const ricardo = [
  ["Koffing", "Koffing", "Grimer"],
  [koffing, koffing, grimer],
  ["Lv.22", "Lv.22", "Lv.23"],
  [poison, poison, poison]
];
const aidan = [
  ["Voltorb", "Koffing", "Voltorb", "Magnemite"],
  [voltorb, koffing, voltorb, magnemite],
  ["Lv.20", "Lv.20", "Lv.20", "Lv.20"],
  [electric, poison, electric, electricSteel]
];
const stan = [
  ["Poliwag", "Poliwag", "Poliwhirl"],
  [poliwag, poliwag, poliwhirl],
  ["Lv.22", "Lv.22", "Lv.22"],
  [water, water, water]
];
//episode13
const leaandjed = [
  ["Ninetales", "Rapidash"],
  [ninetales, rapidash],
  ["Lv.29", "Lv.29"],
  [fire, fire]
];
const kay = [
  ["Bellsprout", "Weepinbell"],
  [bellsprout, weepinbell],
  ["Lv.23", "Lv.23"],
  [grassPoison, grassPoison]
];
const bridget = [
  ["Oddish", "Oddish", "Bellsprout", "Bellsprout"],
  [oddish, oddish, bellsprout, bellsprout],
  ["Lv.21", "Lv.21", "Lv.21", "Lv.21"],
  [grassPoison, grassPoison, grassPoison, grassPoison]
];
const mary1 = [
  ["Bellsprout", "Oddish", "Weepinbell"],
  [bellsprout, oddish, weepinbell],
  ["Lv.22", "Lv.22", "Lv.22"],
  [grassPoison, grassPoison, grassPoison]
];
const mary2 = [
  ["Gloom", "Ivysaur"],
  [gloom, ivysaur],
  ["Lv.22", "Lv.22"],
  [grassPoison, grassPoison]
];
const lisa = [
  ["Oddish", "Gloom"],
  [oddish, gloom],
  ["Lv.23", "Lv.23"],
  [grassPoison, grassPoison]
];
const tina = [
  ["Bulbasaur", "Ivysaur"],
  [bulbasaur, ivysaur],
  ["Lv.24", "Lv.24"],
  [grassPoison, grassPoison]
];
const lori = [
  ["Exeggcute"],
  [exeggcute],
  ["Lv.24"],
  [grassPsychic]
];
const tamia = [
  ["Bellsprout", "Bellsprout"],
  [bellsprout, bellsprout],
  ["Lv.24", "Lv.24"],
  [grassPoison, grassPoison]
];
const erika = [
  ["Victreebel", "Tangela", "Vileplume"],
  [victreebel, tangela, vileplume],
  ["Lv.29", "Lv.24", "Lv.29"],
  [grassPoison, grass, grassPoison]
];
//episode14
const rocketGruntHideout1 = [
  ["Raticate", "Zubat"],
  [raticate, zubat],
  ["Lv.20", "Lv.20"],
  [normal, poisonFlying]
];
const rocketGruntHideout2 = [
  ["Raticate", "Raticate"],
  [raticate, raticate],
  ["Lv.21", "Lv.21"],
  [normal, normal]
];
const rocketGruntHideout3 = [
  ["Drowzee", "Machop"],
  [drowzee, machop],
  ["Lv.21", "Lv.21"],
  [psychic, fighting]
];
const rocketGruntHideout4 = [
  ["Rattata", "Rattata", "Raticate", "Raticate"],
  [rattata, rattata, raticate, raticate],
  ["Lv.19", "Lv.19", "Lv.19", "Lv.19"],
  [normal, normal, normal, normal]
];
const rocketGruntHideout5 = [
  ["Grimer", "Koffing", "Koffing"],
  [grimer, koffing, koffing],
  ["Lv.20", "Lv.20", "Lv.20"],
  [poison, poison, poison]
];
const rocketGruntHideout6 = [
  ["Grimer", "Koffing"],
  [grimer, koffing],
  ["Lv.22", "Lv.22"],
  [poison, poison]
];
const rocketGruntHideout71 = [
  ["Zubat", "Koffing", "Grimer"],
  [zubat, koffing, grimer],
  ["Lv.17", "Lv.17", "Lv.17"],
  [poisonFlying, poison, poison]
];
const rocketGruntHideout72 = [
  ["Zubat", "raticate"],
  [zubat, raticate],
  ["Lv.17", "Lv.17"],
  [poisonFlying, normal]
];
const rocketGruntHideout8 = [
  ["Machop", "Machop"],
  [machop, machop],
  ["Lv.21", "Lv.21"],
  [fighting, fighting]
];
const rocketGruntHideout9 = [
  ["Rattata", "Raticate", "Drowzee"],
  [rattata, raticate, drowzee],
  ["Lv.20", "Lv.20", "Lv.20"],
  [normal, normal, psychic]
];
const rocketGruntHideout10 = [
  ["Koffing", "Zubat"],
  [koffing, zubat],
  ["Lv.21", "Lv.21"],
  [poison, poisonFlying]
];
const rocketGruntHideout11 = [
  ["Sandshrew", "Ekans", "Sandslash"],
  [sandshrew, ekans, sandslash],
  ["Lv.23", "Lv.23", "Lv.23"],
  [ground, poison, ground]
];
const rocketGruntHideout12 = [
  ["Ekans", "Sandshrew", "Arbok"],
  [ekans, sandshrew, arbok],
  ["Lv.23", "Lv.23", "Lv.23"],
  [poison, ground, poison]
];
const giovanni1 = [
  ["Onix", "Rhyhorn", "Kangaskhan"],
  [onix, rhyhorn, kangaskhan],
  ["Lv.25", "Lv.24", "Lv.29"],
  [rockGround, groundRock, normal]
];
//episode15
const hope = [
  ["Ghastly"],
  [ghastly],
  ["Lv.23"],
  [ghostPoison]
];
const patricia = [
  ["Ghastly"],
  [ghastly],
  ["Lv.22"],
  [ghostPoison]
];
const carly = [
  ["Ghastly"],
  [ghastly],
  ["Lv.24"],
  [ghostPoison]
];
const laurel = [
  ["Ghastly", "Ghastly"],
  [ghastly, ghastly],
  ["Lv.23", "Lv.23"],
  [ghostPoison, ghostPoison]
];
const jody = [
  ["Ghastly"],
  [ghastly],
  ["Lv.22"],
  [ghostPoison]
];
const paula = [
  ["Ghastly"],
  [ghastly],
  ["Lv.24"],
  [ghostPoison]
];
const ruth = [
  ["Ghastly"],
  [ghastly],
  ["Lv.22"],
  [ghostPoison]
];
const tammy = [
  ["Haunter"],
  [haunter],
  ["Lv.23"],
  [ghostPoison]
];
const karina = [
  ["Ghastly"],
  [ghastly],
  ["Lv.24"],
  [ghostPoison]
];
const janae = [
  ["Ghastly"],
  [ghastly],
  ["Lv.22"],
  [ghostPoison]
];
const angelica = [
  ["Ghastly", "Ghastly", "Ghastly"],
  [ghastly, ghastly, ghastly],
  ["Lv.22", "Lv.22", "Lv.22"],
  [ghostPoison, ghostPoison, ghostPoison]
];
const jennifer = [
  ["Ghastly"],
  [ghastly],
  ["Lv.24"],
  [ghostPoison]
];
const emilia = [
  ["Ghastly"],
  [ghastly],
  ["Lv.24"],
  [ghostPoison]
];
const rocketGruntTower1 = [
  ["Zubat", "Zubat", "Golbat"],
  [zubat, zubat, golbat],
  ["Lv.25", "Lv.25", "Lv.25"],
  [poisonFlying, poisonFlying, poisonFlying]
];
const rocketGruntTower2 = [
  ["Koffing", "Drowzee"],
  [koffing, drowzee],
  ["Lv.26", "Lv.26"],
  [poison, psychic]
];
const rocketGruntTower3 = [
  ["Zubat", "Rattata", "Raticate", "Zubat"],
  [zubat, rattata, raticate, zubat],
  ["Lv.23", "Lv.23", "Lv.23", "Lv.23"],
  [poisonFlying, normal, normal, poisonFlying]
];
//episode16




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
populateTable(rocketGruntRoute24, "rocketGruntRoute24");
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
//episode8
populateTable(thomas, "thomas");
populateTable(arthur, "arthur");
populateTable(ann, "ann");
populateTable(tyler, "tyler");
populateTable(trevor, "trevor");
populateTable(edmond, "edmond");
populateTable(dale, "dale");
populateTable(brooks, "brooks");
populateTable(dawn, "dawn");
populateTable(lamar, "lamar");
populateTable(rival4, "rival4");
//episode9
populateTable(dwayne, "dwayne");
populateTable(baily, "baily");
populateTable(tucker, "tucker");
populateTable(ltsurge, "ltsurge");
//episode10
populateTable(alicia, "alicia");
populateTable(jeremy, "jeremy");
populateTable(chris, "chris");
populateTable(brent, "brent");
populateTable(conner, "conner");
populateTable(alan, "alan");
populateTable(drew, "drew");
populateTable(brice, "brice");
populateTable(caitlin, "caitlin");
//episode11
populateTable(heidi, "heidi");
populateTable(ashton, "ashton");
populateTable(winston, "winston");
populateTable(marth, "marth");
populateTable(eric, "eric");
populateTable(oliver, "oliver");
populateTable(lucas, "lucas");
populateTable(sofia, "sofia");
populateTable(dudley, "dudley");
populateTable(cooper, "cooper");
populateTable(leah, "leah");
populateTable(dana, "dana");
populateTable(carol, "carol");
populateTable(clark, "clark");
populateTable(herman, "herman");
populateTable(trent, "trent");
//episode12
populateTable(rival5_1, "rival5_1");
populateTable(rival5_2, "rival5_2");
populateTable(julia, "julia");
populateTable(rich, "rich");
populateTable(glenn, "glenn");
populateTable(eliandanne, "eliandanne");
populateTable(megan1, "megan1");
populateTable(megan2, "megan2");
populateTable(andrea, "andrea");
populateTable(leslie, "leslie");
populateTable(paige, "paige");
populateTable(jaren, "jaren");
populateTable(ricardo, "ricardo");
populateTable(aidan, "aidan");
populateTable(stan, "stan");
//episode13
populateTable(leaandjed, "leaandjed");
populateTable(kay, "kay");
populateTable(bridget, "bridget");
populateTable(tina, "tina");
populateTable(tamia, "tamia");
populateTable(mary1, "mary1");
populateTable(mary2, "mary2");
populateTable(lisa, "lisa");
populateTable(lori, "lori");
populateTable(erika, "erika");
//episode14
populateTable(rocketGruntHideout1, "rocketGruntHideout1");
populateTable(rocketGruntHideout2, "rocketGruntHideout2");
populateTable(rocketGruntHideout3, "rocketGruntHideout3");
populateTable(rocketGruntHideout4, "rocketGruntHideout4");
populateTable(rocketGruntHideout5, "rocketGruntHideout5");
populateTable(rocketGruntHideout6, "rocketGruntHideout6");
populateTable(rocketGruntHideout71, "rocketGruntHideout71");
populateTable(rocketGruntHideout72, "rocketGruntHideout72");
populateTable(rocketGruntHideout8, "rocketGruntHideout8");
populateTable(rocketGruntHideout9, "rocketGruntHideout9");
populateTable(rocketGruntHideout10, "rocketGruntHideout10");
populateTable(rocketGruntHideout11, "rocketGruntHideout11");
populateTable(rocketGruntHideout12, "rocketGruntHideout12");
populateTable(giovanni1, "giovanni1");
//episode15
populateTable(patricia, "patricia");
populateTable(carly, "carly");
populateTable(hope, "hope");
populateTable(laurel, "laurel");
populateTable(jody, "jody");
populateTable(paula, "paula");
populateTable(ruth, "ruth");
populateTable(karina, "karina");
populateTable(janae, "janae");
populateTable(tammy, "tammy");
populateTable(angelica, "angelica");
populateTable(jennifer, "jennifer");
populateTable(emilia, "emilia");
populateTable(rocketGruntTower1, "rocketGruntTower1");
populateTable(rocketGruntTower2, "rocketGruntTower2");
populateTable(rocketGruntTower3, "rocketGruntTower3");
//episode16





