//create card function
function trainerCard1(trainerName, name, imagePath, insight, cssClass = "", difficulty = "") {
    let starRatings;
    switch (difficulty.toLowerCase()) {
      case "extremely easy":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first xeasy\"></div> <div class=\"nofill\"></div> <div class=\"nofill\"></div> <div class=\"nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "easy":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first easy\"></div> <div class=\"easy\"></div> <div class=\"nofill\"></div> <div class=\"nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "normal":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first normal\"></div> <div class=\"fill normal\"></div> <div class=\"fill normal\"></div> <div class=\"fill nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "hard":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first hard\"></div> <div class=\"fill hard\"></div> <div class=\"fill hard\"></div> <div class=\"fill hard\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "challenging":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first challenging\"></div> <div class=\"fill challenging\"></div> <div class=\"fill challenging\"></div> <div class=\"fill challenging\"></div> <div class=\"last challenging slightspace\"></div> </div> ";
        break;
      default:
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first nofill\"></div> <div class=\"fill nofill\"></div> <div class=\"fill nofill\"></div> <div class=\"fill nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
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
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first xeasy\"></div> <div class=\"nofill\"></div> <div class=\"nofill\"></div> <div class=\"nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "easy":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first easy\"></div> <div class=\"easy\"></div> <div class=\"nofill\"></div> <div class=\"nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "normal":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first normal\"></div> <div class=\"fill normal\"></div> <div class=\"fill normal\"></div> <div class=\"nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "hard":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first hard\"></div> <div class=\"fill hard\"></div> <div class=\"fill hard\"></div> <div class=\"fill hard\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
        break;
      case "challenging":
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first challenging\"></div> <div class=\"fill challenging\"></div> <div class=\"fill challenging\"></div> <div class=\"fill challenging\"></div> <div class=\"last challenging slightspace\"></div> </div> ";
        break;
      default:
        starRatings = " <div class=\"difficultycontainer\"> <div class=\"first nofill\"></div> <div class=\"fill nofill\"></div> <div class=\"fill nofill\"></div> <div class=\"fill nofill\"></div> <div class=\"last nofill slightspace\"></div> </div> ";
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
const rocker = "sprites/Spr_FRLG_Rocker.png";
const birdKeeper = "sprites/4.png";
const crushkin = "sprites/crushkin.png";
const cueball = "sprites/cueball.png";
const scientist = "sprites/scientist.png";
const juggler = "sprites/juggler.png";
const blackbelt = "sprites/blackbelt.png";
const tamer = "sprites/tamer.png";
const psychicMale = "sprites/psychicMale.png";
const swimmerFemale = "sprites/swimmerFemale.png";
const scubaSquad = "sprites/scubaSquad.png";
const burglar = "sprites/burglar.png";
const cooltrainerMale = "sprites/cooltrainerMale.png";
const crushgirl = "sprites/crushgirl.png";
const aromagirl = "sprites/aromagirl.png";
const scubaFemale = "sprites/scubaFemale.png";
const coolcouple = "sprites/coolcouple.png";

//important Trainer Sprites
const rivalsprite1 = "sprites/Blue1.webp";
const brocksprite = "sprites/Brock_FRLG.webp";
const mistysprite = "sprites/31.png";
const rivalsprite2 = "sprites/rival2.png";
const ltsurgesprite = "sprites/ltsurge.png";
const erikasprite = "sprites/Spr_FRLG_Erika.png";
const giovannisprite = "sprites/giovannie.png";
const kogasprite = "sprites/koga.png";
const sabrinasprite = "sprites/sabrina.png";
const blainesprite = "sprites/blaine.png";
const loreleisprite = "sprites/lorelei.png";
const brunosprite = "sprites/bruno.png";
const agathasprite = "sprites/agatha.png";
const lancesprite = "sprites/lance.png";
const championsprite = "sprites/champion.png";
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
   insight: 'It\'s just bugs, if you chose charmanderImage this would be a piece of cake but if you chose the other two then it is still very easy. Just don\'t forget your antidotes, you\'re gonna need it.',
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
   insight: 'Just a jigglypuffImage, nothing too crazy', 
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

  { name: 'Megan', 
      id: 'megan', 
   image: lass, 
 insight: 'Not really difficult, just way too many Pokémon.',
classimp: '',
difficulty: 'easy' },

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

  { name: 'Mary', 
      id: 'mary', 
   image: cooltrainerFemale, 
 insight: 'Way too many Pokémon for regular trainer in a gym.',
classimp: '',
difficulty: 'normal' },

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
classimp: 'importantname',
difficulty: 'hard' }

];
//EPISODE 14
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
      id: 'rocketGruntHideout7', 
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
const episode16= [
  { name: 'Ned', 
      id: 'ned', 
   image: fisherman, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Chip', 
      id: 'chip', 
   image: fisherman, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Hank', 
      id: 'hank', 
   image: fisherman, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Elliot', 
      id: 'elliot', 
   image: fisherman, 
 insight: 'Finally! Some variation... kinda',
classimp: '',
difficulty: 'easy' },

  { name: 'Gia & Jes', 
      id: 'giaandjes', 
   image: youngCouple, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Luca', 
      id: 'luca', 
   image: rocker, 
 insight: 'Be careful with static',
classimp: '',
difficulty: 'easy' },

  { name: 'Justin', 
      id: 'justin', 
   image: camperMale, 
 insight: 'Be careful with poison point',
classimp: '',
difficulty: 'easy' },

  { name: 'Andrew', 
      id: 'andrew', 
   image: fisherman, 
 insight: 'Just Magikarp',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Alma', 
      id: 'alma', 
   image: camperFemale, 
 insight: 'Identical to Fisherman Ned\'s team for some reason.',
classimp: '',
difficulty: 'easy' },

  { name: 'Sebastian', 
      id: 'sebastian', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Susie', 
      id: 'susie', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Sheila', 
      id: 'sheila', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Lola', 
      id: 'lola', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Valerie', 
      id: 'valerie', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Perry', 
      id: 'perry', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Gwen', 
      id: 'gwen', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Robert', 
      id: 'robert', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Jared', 
      id: 'jared', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Carter', 
      id: 'carter', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Mitch', 
      id: 'mitch', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Marlon', 
      id: 'marlon', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Beck', 
      id: 'beck', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Donald', 
      id: 'donald', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Benny', 
      id: 'benny', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Kiri and Jan', 
      id: 'kiriandjan', 
   image: twins, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Gerald', 
      id: 'gerald', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Lukas', 
      id: 'lukas', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Malik', 
      id: 'malik', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Isaac', 
      id: 'isaac', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Donald', 
      id: 'donald', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Becky', 
      id: 'becky', 
   image: camperFemale, 
 insight: 'Be careful with static',
classimp: '',
difficulty: 'normal' },

  { name: 'Ron & Mya', 
      id: 'ronandmya', 
   image: crushkin, 
 insight: 'If you are not ready then you will have a bad time.',
classimp: '',
difficulty: 'hard' },

  { name: 'Celia', 
      id: 'celia', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' }

];
//EPISODE 16
const episode17= [
  { name: 'Yazmin', 
      id: 'yazmin', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Edwin', 
      id: 'edwin', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Chester', 
      id: 'chester', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Kindra', 
      id: 'kindra', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Olivia', 
      id: 'olivia', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Grace', 
      id: 'grace', 
   image: beauty, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Alex', 
      id: 'alex', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Ernest', 
      id: 'ernest', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Jacob', 
      id: 'jacob', 
   image: birdKeeper, 
 insight: 'A good place to train if you have a VS. seeker',
classimp: '',
difficulty: 'normal' },

  { name: 'Wilton', 
      id: 'wilton', 
   image: birdKeeper, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Ramiro', 
      id: 'ramiro', 
   image: birdKeeper, 
 insight: 'Be very careful because of the potential level gap.',
classimp: '',
difficulty: 'normal' },

  { name: 'William', 
      id: 'william', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Corey', 
      id: 'corey', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Zeek', 
      id: 'zeek', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Nikolas', 
      id: 'nikolas', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Raul', 
      id: 'raul', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Isaiah', 
      id: 'isaiah', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Virgil', 
      id: 'virgil', 
   image: biker, 
 insight: 'Will not bury the light',
classimp: '',
difficulty: 'normal' },

  { name: 'Billy', 
      id: 'billy', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Jamal', 
      id: 'jamal', 
   image: cueball, 
 insight: 'Normal types worst nightmare!',
classimp: '',
difficulty: 'normal' },

  { name: 'Jaxon', 
      id: 'jaxon', 
   image: biker, 
 insight: 'Too much bulk, be very careful.',
classimp: '',
difficulty: 'normal' },

  { name: 'Lao', 
      id: 'lao', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Koji', 
      id: 'koji', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Hideo', 
      id: 'hideo', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Luke', 
      id: 'luke', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Camron', 
      id: 'camron', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Ruben', 
      id: 'ruben', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntSilph1', 
   image: rocketGruntMale, 
 insight: 'Too many Pokémon',
classimp: '',
difficulty: 'easy' },

  { name: 'Jerry', 
      id: 'jerry', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntSilph2', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Parker', 
      id: 'parker', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntSilph3', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  { name: 'Rocket Grunt', 
      id: 'rocketGruntSilph4', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

  {   name: 'Rocket Grunt', 
        id: 'rocketGruntSilph5', 
     image: rocketGruntMale, 
   insight: '',
  classimp: '',
difficulty: 'easy' },
  
  {   name: 'Joshua', 
        id: 'joshua', 
     image: scientist, 
   insight: '',
  classimp: '',
difficulty: 'normal' },

{     name: 'Rocket Grunt', 
        id: 'rocketGruntSilph6', 
     image: rocketGruntMale, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

{     name: 'Rocket Grunt', 
        id: 'rocketGruntSilph7', 
     image: rocketGruntMale, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

{     name: 'Rocket Grunt', 
        id: 'rocketGruntSilph8', 
     image: rocketGruntMale, 
   insight: '',
  classimp: '',
difficulty: 'easy' },

{   name: 'Taylor', 
      id: 'taylor', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'normal' },

{   name: 'Rodney', 
      id: 'rodney', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph9', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph10', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph11', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Travis', 
      id: 'travis', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph12', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph13', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'normal' },

{   name: 'Ed', 
      id: 'ed', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph14', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph15', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Jose', 
      id: 'jose', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'normal' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph16', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph17', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Beau', 
      id: 'beau', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'normal' },

{   name: 'Dalton', 
      id: 'dalton', 
   image: juggler, 
 insight: 'What on earth is a juggler doing here?',
classimp: '',
difficulty: 'normal' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph18', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Rocket Grunt', 
      id: 'rocketGruntSilph19', 
   image: rocketGruntMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

{   name: 'Giovanni', 
      id: 'giovanni2', 
   image: giovannisprite, 
 insight: '',
classimp: 'importantname',
difficulty: 'normal' },
];
const rival6Card = trainerCard2('TOADMAN (Rival)',
                               'rival6',
                               'rival6_1',
                               'rival6_2',
                               rivalsprite2, 
                               'Surprisingly easier than the last time I fought him.',
                               "importantname", 
                               "easy");
const rival6Container = document.getElementById('rival6Container');
rival6Container.innerHTML = rival6Card;
//EPISODE18
const episode18= [
  { name: 'Hitoshi', 
      id: 'hitoshi', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Hideki', 
      id: 'hideki', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Aaron', 
      id: 'aaron', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Mike', 
      id: 'mike', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Koichi', 
      id: 'koichi', 
   image: blackbelt, 
 insight: 'I\'m not sure why decided to not speed up the fight here. After defeating him, you get to choose between Hitmonlee or Hitmonchan. I\'m not too sure if those were his.',
classimp: '',
difficulty: 'easy' },
];
//EPISODE19
const episode19= [
  { name: 'Kayden', 
      id: 'kayden', 
   image: juggler, 
 insight: 'How is this team allowed in this Gym.',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Kirk', 
      id: 'kirk', 
   image: juggler, 
 insight: 'Just HOW ARE THESE SUPPOSE TO BE POISON TYPES',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Edgar', 
      id: 'edgar', 
   image: tamer, 
 insight: 'Now some real poison types',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Phil', 
      id: 'phil', 
   image: tamer, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Shawn', 
      id: 'shawn', 
   image: juggler, 
 insight: 'Just when you though the psychic types are done.',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Koga', 
    id: 'koga', 
 image: kogasprite, 
insight: 'A cake walk with a psychic type Pokémon.',
classimp: 'importantname',
difficulty: 'extremely easy' },
];
//EPISODE20
const episode20= [
  { name: 'Cameron', 
      id: 'cameron', 
   image: psychicMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Johan', 
      id: 'johan', 
   image: psychicMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Tyron', 
      id: 'tyron', 
   image: psychicMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Tasha', 
      id: 'tasha', 
   image: chaneller, 
 insight: 'Be very careful with destiny bond. (I\'m not sure if her Pokémon has it.)',
classimp: '',
difficulty: 'easy' },

  { name: 'Preston', 
      id: 'preston', 
   image: psychicMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Amanda', 
      id: 'amanda', 
   image: chaneller, 
 insight: 'Be very careful with destiny bond.',
classimp: '',
difficulty: 'easy' },

{ name: 'Sabrina', 
    id: 'sabrina', 
 image: sabrinasprite, 
insight: 'Don\'t let her Pokémon setup on you.',
classimp: 'importantname',
difficulty: 'normal' },
];
//EPISODE21
const episode21= [
  { name: 'Richard', 
      id: 'richard', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Reece', 
      id: 'reece', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Tony', 
      id: 'tony', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'David', 
      id: 'david', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Douglas', 
      id: 'douglas', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Wade', 
      id: 'wade', 
   image: fisherman, 
 insight: 'Just Magikarp',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Ronald', 
    id: 'ronald', 
 image: fisherman, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Lil & Ian', 
    id: 'lilandian', 
 image: scubaSquad, 
insight: '',
classimp: '',
difficulty: 'easy' },

{ name: 'Spencer', 
    id: 'spencer', 
 image: swimmerMale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Claude', 
    id: 'claude', 
 image: fisherman, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Nolan', 
    id: 'nolan', 
 image: fisherman, 
insight: 'Think Mark!',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Jack', 
    id: 'jack', 
 image: swimmerMale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Roland', 
    id: 'roland', 
 image: swimmerMale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Jerome', 
    id: 'jerome', 
 image: swimmerMale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Melissa', 
    id: 'melissa', 
 image: swimmerFemale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Missy', 
    id: 'missy', 
 image: camperFemale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Missy', 
    id: 'missy', 
 image: camperFemale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Dean', 
    id: 'dean', 
 image: swimmerMale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Nora', 
    id: 'nora', 
 image: swimmerFemale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Roger', 
    id: 'roger', 
 image: birdKeeper, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Irene', 
    id: 'irene', 
 image: camperFemale, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },
];
//EPISODE22
const episode22= [
  { name: 'Johnson', 
      id: 'johnson', 
   image: youngster, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Arnie', 
      id: 'arnie', 
   image: burglar, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Braydon', 
      id: 'braydon', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Ted', 
      id: 'ted', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Lewis', 
      id: 'lewis', 
   image: burglar, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Ivan', 
      id: 'ivan', 
   image: scientist, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Simon', 
    id: 'simon', 
 image: burglar, 
insight: '',
classimp: '',
difficulty: 'extremely easy' },
];
//EPISODE23
const episode23= [
  { name: 'Quinn', 
      id: 'quinn', 
   image: burglar, 
 insight: 'The answer is YES',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Erik', 
      id: 'erik', 
   image: nerd, 
 insight: 'For some reason does not have an assigned quiz so you can totally skip this one.',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Avery', 
      id: 'avery', 
   image: nerd, 
 insight: 'The answer is NO',
classimp: '',
difficulty: 'easy' },

  { name: 'Ramon', 
      id: 'ramon', 
   image: burglar, 
 insight: 'The answer is NO',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Derek', 
      id: 'derek', 
   image: nerd, 
 insight: 'The answer is NO',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Dusty', 
      id: 'dusty', 
   image: burglar, 
 insight: 'The answer is YES',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Zac', 
    id: 'zac', 
 image: nerd, 
insight: 'The answer is NO',
classimp: '',
difficulty: 'extremely easy' },

{ name: 'Blaine', 
    id: 'blaine', 
 image: blainesprite, 
insight: 'Don\'t forget your burn heal!',
classimp: 'importantname',
difficulty: 'easy' },
];
//EPISODE24
const episode24= [
  { name: 'Yuji', 
      id: 'yuji', 
   image: cooltrainerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Warren', 
      id: 'warren', 
   image: cooltrainerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Takashi', 
      id: 'takashi', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },
];
const giovanni3Card = trainerCard2('Giovanni',
                               'giovannie3',
                               'giovanni3_1',
                               'giovanni3_2',
                               giovannisprite, 
                               'I just used Rattlesnek and won',
                               "importantname", 
                               "extremely easy");
const giovanni3Container = document.getElementById('giovanni3Container');
giovanni3Container.innerHTML = giovanni3Card;

const rival7Card = trainerCard2('TOADMAN (Rival)',
                               'rival7',
                               'rival7_1',
                               'rival7_2',
                               rivalsprite2, 
                               'Surprisingly easier than the last time I fought him.',
                               "importantname", 
                               "easy");
const rival7Container = document.getElementById('rival7Container');
rival7Container.innerHTML = rival7Card;
//EPISODE25
const episode25= [
  { name: 'Abigail', 
      id: 'abigail', 
   image: swimmerFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Claire', 
      id: 'claire', 
   image: camperFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Bryce', 
      id: 'bryce', 
   image: camperMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Tanya', 
      id: 'tanya', 
   image: crushgirl, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Garrett', 
      id: 'garrett', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Mik & Kia', 
      id: 'mikandkia', 
   image: crushkin, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Hugh', 
      id: 'hugh', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Shea', 
      id: 'shea', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Maria', 
      id: 'maria', 
   image: swimmerFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Tommy', 
      id: 'tommy', 
   image: fisherman, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Finn', 
      id: 'finn', 
   image: swimmerMale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Sharon', 
      id: 'sharon', 
   image: crushgirl, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Goon', 
      id: 'goon1', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Goon', 
      id: 'goon2', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Goon', 
      id: 'goon3', 
   image: biker, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Paxton', 
      id: 'paxton', 
   image: cueball, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Joy & Meg', 
      id: 'joyandmeg', 
   image: twins, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Violet', 
      id: 'violet', 
   image: aromagirl, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Alexis', 
      id: 'alexis', 
   image: scubaFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Amira', 
      id: 'amira', 
   image: scubaFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Nikki', 
      id: 'nikki', 
   image: aromagirl, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },
];
//EPISODE26
const episode26= [
  { name: 'Naomi', 
      id: 'naomi', 
   image: cooltrainerFemale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Rolando', 
      id: 'rolando', 
   image: cooltrainerMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Daisuke', 
      id: 'daisuke', 
   image: blackbelt, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Nelson', 
      id: 'nelson', 
   image: juggler, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Gregory', 
      id: 'gregory', 
   image: juggler, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },


  { name: 'Vincent', 
      id: 'vincent', 
   image: tamer, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'George', 
      id: 'george', 
   image: cooltrainerMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Dawson', 
      id: 'dawson', 
   image: pokemaniac, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Alexa', 
      id: 'alexa', 
   image: cooltrainerFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Colby', 
      id: 'colby', 
   image: cooltrainerMale, 
 insight: '',
classimp: '',
difficulty: 'easy' },

  { name: 'Caroline', 
      id: 'caroline', 
   image: cooltrainerFemale, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },

  { name: 'Ray & Tyra', 
      id: 'rayandtyra', 
   image: coolcouple, 
 insight: '',
classimp: '',
difficulty: 'extremely easy' },
];
//EPISODE27
const loreleiCard = trainerCard2('Lorelei',
                               'lorelei',
                               'lorelei_1',
                               'lorelei_2',
                               loreleisprite, 
                               'Surprisingly tough just like the title says.',
                               "importantname", 
                               "normal");
const loreleiContainer = document.getElementById('loreleiContainer');
loreleiContainer.innerHTML = loreleiCard;
//EPISODE28
const brunoCard = trainerCard2('Bruno',
                               'bruno',
                               'bruno_1',
                               'bruno_2',
                               brunosprite, 
                               'Look at the length of the episode and see how easy this battle was.',
                               "importantname", 
                               "extremely easy");
const brunoContainer = document.getElementById('brunoContainer');
brunoContainer.innerHTML = brunoCard;
//EPISODE29
const agathaCard = trainerCard2('Agatha',
                               'agatha',
                               'agatha_1',
                               'agatha_2',
                               agathasprite, 
                               'Even shorter than the last episode.',
                               "importantname", 
                               "extremely easy");
const agathaContainer = document.getElementById('agathaContainer');
agathaContainer.innerHTML = agathaCard;
//EPISODE30
const lanceCard = trainerCard2('Lance',
                               'lance',
                               'lance_1',
                               'lance_2',
                               lancesprite, 
                               'I only used lapras',
                               "importantname", 
                               "extremely easy");
const lanceContainer = document.getElementById('lanceContainer');
lanceContainer.innerHTML = lanceCard;
//FINALE
const championCard = trainerCard2('Champion Toadman',
                               'champion',
                               'champion_1',
                               'champion_2',
                               championsprite, 
                               'It was easy but at what cost?',
                               "importantname", 
                               "easy");
const championContainer = document.getElementById('championContainer');
championContainer.innerHTML = championCard;

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
episode16.forEach(displayTrainerCard);
episode17.forEach(displayTrainerCard);
episode18.forEach(displayTrainerCard);
episode19.forEach(displayTrainerCard);
episode20.forEach(displayTrainerCard);
episode21.forEach(displayTrainerCard);
episode22.forEach(displayTrainerCard);
episode23.forEach(displayTrainerCard);
episode24.forEach(displayTrainerCard);
episode25.forEach(displayTrainerCard);
episode26.forEach(displayTrainerCard);

//populate Table function
function populateTable(pokemonData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

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
                image.setAttribute("src", cellValue);
                image.setAttribute("alt", cellValue);
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
    [weedleImage, caterpieImage],
    ["Lv.6", "Lv.6"],
    [bugPoison, bug]
];
const doug =[
    ["Weedle", "Kakuna", "Weedle"],
    [weedleImage, kakunaImage, weedleImage],
    ["Lv.7", "Lv.7", "Lv.7"],
    [bugPoison, bugPoison, bugPoison]
];
const anthony =[
    ["Catepie", "Caterpie"],
    [caterpieImage, caterpieImage],
    ["Lv.7", "Lv.8"],
    [bug, bug]
];
const charlie =[
    ["Metapod", "Caterpie", "Metapod"],
    [metapodImage, caterpieImage, metapodImage],
    ["Lv.7", "Lv.7", "Lv.7"],
    [bug, bug, bug]
];
const sammy =[
    ["Weedle"],
    [weedleImage],
    ["Lv.9"],
    [bugPoison]
];  
//episode3
const liam =[
    ["Geodude", "Sandshrew"],
    [geodudeImage, sandshrewImage],
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
    [pidgeyImage, pidgeyImage],
    ["Lv.9", "Lv.9"],
    [normalFlying, normalFlying]
];
const colton =[
    ["Caterpie", "Weedle", "Caterpie"],
    [caterpieImage, weedleImage, caterpieImage],
    ["Lv.10", "Lv.10", "Lv.10"],
    [bug, bugPoison, bug]
];
const ben =[
    ["Rattata", "Ekans"],
    [rattataImage, ekansImage],
    ["Lv.11", "Lv.11"],
    [normal, poison]
];
const greg =[
    ["Weedle", "Kakuna", "Caterpie", "Metapod"],
    [weedleImage, kakunaImage, caterpieImage, metapodImage],
    ["Lv.9", "Lv.9", "Lv.9", "Lv. 9"],
    [bugPoison, bugPoison, bug, bug]
];
const sally =[
    ["Rattata", "Nidoran♀"],
    [rattataImage, nidoranFImage],
    ["Lv.10", "Lv.10"],
    [normal, poison]
];
const james =[
    ["Caterpie", "Metapod"],
    [caterpieImage, metapodImage],
    ["Lv.11", "Lv.11"],
    [bug, bug]
];
const robin =[
    ["Jigglypuff"],
    [jigglypuffImage],
    ["Lv.14"],
    [normal]
];
//episode4
const calvin =[
    ["Spearow"],
    [spearowImage],
    ["Lv.14"],
    [normalFlying]
];
const iris =[
    ["Clefairy"],
    [clefairyImage],
    ["Lv.14"],
    [normal]
];
const jovan =[
    ["Magnemite", "Voltorb"],
    [magnemiteImage, voltorbImage],
    ["Lv.11", "Lv.11"],
    [electricSteel, electric]
];
const robby = [
    ["Caterpie", "Metapod", "Caterpie"],
    [caterpieImage, metapodImage, caterpieImage],
    ["Lv.10", "Lv.10", "Lv.10"],
    [bug, bug, bug]
];
const rocketGruntMtMoon1 = [
    ["Sandshrew", "Rattata", "Zubat"],
    [sandshrewImage, rattataImage, zubatImage],
    ["Lv.11", "Lv.11", "Lv.11"],
    [ground, normal, poisonFlying]
];
const kent =[
    ["Weedle", "Kakuna"],
    [weedleImage, kakunaImage],
    ["Lv.11", "Lv.11"],
    [bugPoison, bugPoison]
];
const miriam =[
    ["Oddish", "Bellsprout"],
    [oddishImage, bellsproutImage],
    ["Lv.11", "Lv.11"],
    [grassPoison, grassPoison]
];
const rocketGruntMtMoon2 =[
    ["Zubat", "Ekans"],
    [zubatImage, ekansImage],
    ["Lv.11", "Lv.11"],
    [poisonFlying, poison]
];
const josh = [
    ["Rattata", "Rattata", "Zubat"],
    [rattataImage, rattataImage, zubatImage],
    ["Lv.10", "Lv.10", "Lv.10"],
    [normal, normal, poisonFlying]
];
const marcos = [
    ["Geodude", "Geodude", "Onix"],
    [geodudeImage, geodudeImage, onixImage],
    ["Lv.10", "Lv.10", "Lv.10"],
    [rockGround, rockGround, rockGround]
];
const rocketGruntMtMoon3 =[
    ["Rattata", "Sandshrew"],
    [rattataImage, sandshrewImage],
    ["Lv.13", "Lv.13"],
    [normal, ground]
];
const rocketGruntMtMoon4 =[
    ["Rattata", "Zubat"],
    [rattataImage, zubatImage],
    ["Lv.13", "Lv.13"],
    [normal, poisonFlying]
];
const miguel = [
    ["Grimer", "Voltorb", "Koffing"],
    [grimerImage, voltorbImage, koffingImage],
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
    [caterpieImage, weedleImage, metapodImage, kakunaImage],
    ["Lv.10", "Lv.10", "Lv.10", "Lv.10"],
    [bug, bugPoison, bug, bugPoison]
];

const ali = [
    ["Pidgey", "Oddish", "Bellsprout"],
    [pidgeyImage, oddishImage, bellsproutImage],
    ["Lv.12", "Lv.12", "Lv.12"],
    [normalFlying, grassPoison, grassPoison]
];

const timmy = [
    ["Sandshrew", "Ekans"],
    [sandshrewImage, ekansImage],
    ["Lv.14", "Lv.14"],
    [ground, poison]
];

const reli = [
    ["Nidoran♂", "Nidoran♀"],
    [nidoranMImage, nidoranFImage],
    ["Lv.16", "Lv.16"],
    [poison, poison]
];

const ethan = [
    ["Mankey"],
    [mankeyImage],
    ["Lv.18"],
    [fighting]
];

const rocketGruntRoute24 = [
    ["Ekans", "Zubat"],
    [ekansImage, zubatImage],
    ["Lv.15", "Lv.15"],
    [poison, poisonFlying]
];

const shane = [
    ["Rattata", "Ekans"],
    [rattataImage, ekansImage],
    ["Lv.14", "Lv.14"],
    [normal, poison]
];

const franklin = [
    ["Machop", "Geodude"],
    [machopImage, geodudeImage],
    ["Lv.15", "Lv.15"],
    [fighting, rockGround]
];

const wayne = [
    ["Onix"],
    [onixImage],
    ["Lv.17"],
    [rockGround]
];

const joey = [
    ["Rattata", "Spearow"],
    [rattataImage, spearowImage],
    ["Lv.15", "Lv.15"],
    [normal, normalFlying]
];

const dan = [
    ["Slowpoke"],
    [slowpokeImage],
    ["Lv.17"],
    [waterPsychic]
];

const kelsey = [
    ["Nidoran♂", "Nidoran♀"],
    [nidoranMImage, nidoranFImage],
    ["Lv.15", "Lv.15"],
    [poison, poison]
];

const nob = [
    ["Geodude", "Geodude", "Machop", "Geodude"],
    [geodudeImage, geodudeImage, machopImage, geodudeImage],
    ["Lv.13", "Lv.13", "Lv.13", "Lv.13"],
    [rockGround, rockGround, fighting, rockGround]
];

const flint = [
    ["Rattata", "Ekans"],
    [rattataImage, ekansImage],
    ["Lv.14", "Lv.14"],
    [normal, poison]
];

const chad = [
    ["Ekans", "Sandshrew"],
    [ekansImage, sandshrewImage],
    ["Lv.14", "Lv.14"],
    [poison, ground]
];

const haley = [
    ["Oddish", "Pidgey", "Oddish"],
    [oddishImage, pidgeyImage, oddishImage],
    ["Lv.13", "Lv.13", "Lv.13"],
    [grassPoison, normalFlying, grassPoison]
];
//episode6
const luis = [
    ["Horsea", "Shellder"],
    [horseaImage, shellderImage],
    ["Lv.16", "Lv.16"],
    [water, water]
];
const diana = [
    ["Goldeen"],
    [goldeenImage],
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
    [machopImage, drowzeeImage],
    ["Lv.17", "Lv.17"],
    [fighting, psychic]
];

const keigo = [
    ["Weedle", "Caterpie", "Weedle"],
    [weedleImage, caterpieImage, weedleImage],
    ["Lv.16", "Lv.16", "Lv.16"],
    [bugPoison, bug, bugPoison]
];

const ricky = [
    ["Squirtle"],
    [squirtleImage],
    ["Lv.20"],
    [water]
];

const nancy = [
    ["Rattata", "Pikachu"],
    [rattataImage, pikachuImage],
    ["Lv.16", "Lv.16"],
    [normal, electric]
];

const elijah = [
    ["Butterfree"],
    [butterfreeImage],
    ["Lv.20"],
    [bugFlying]
];

const isabelle = [
    ["Pidgey", "Pidgey", "Pidgey"],
    [pidgeyImage, pidgeyImage, pidgeyImage],
    ["Lv.16", "Lv.16", "Lv.16"],
    [normalFlying, normalFlying, normalFlying]
];

const jeff = [
    ["Spearow", "Raticate"],
    [spearowImage, raticateImage],
    ["Lv.16", "Lv.16"],
    [normalFlying, normal]
];

const eddie = [
    ["Ekans"],
    [ekansImage],
    ["Lv.21"],
    [poison]
];

const hugo = [
    ["Poliwag", "Horsea"],
    [poliwagImage, horseaImage],
    ["Lv.18", "Lv.18"],
    [water, water]
];

const bernie = [
    ["Magnemite", "Magnemite", "Magneton"],
    [magnemiteImage, magnemiteImage, magnetonImage],
    ["Lv.18", "Lv.18", "Lv.18"],
    [electricSteel, electricSteel, electricSteel]
];

const jasper = [
    ["Bellsprout", "Oddish"],
    [bellsproutImage, oddishImage],
    ["Lv.18", "Lv.18"],
    [grassPoison, grassPoison]
];

const dave = [
    ["Nidoran♂", "Nidorino"],
    [nidoranMImage, nidorinoImage],
    ["Lv.18", "Lv.18"],
    [poison, poison]
];

const dillon = [
    ["Sandshrew", "Zubat"],
    [sandshrewImage, zubatImage],
    ["Lv.19", "Lv.19"],
    [ground, poisonFlying]
];

const braxton = [
    ["Magnemite"],
    [magnemiteImage],
    ["Lv.21"],
    [electricSteel]
];

const yasu = [
    ["Rattata", "Rattata", "Raticate"],
    [rattataImage, rattataImage, raticateImage],
    ["Lv.17", "Lv.17", "Lv.17"],
    [normal, normal, normal]
];

const darian = [
    ["Growlithe", "Vulpix"],
    [growlitheImage, vulpixImage],
    ["Lv.18", "Lv.18"],
    [fire, fire]
];

const dirk = [
    ["Voltorb", "Magnemite"],
    [voltorbImage, magnemiteImage],
    ["Lv.18", "Lv.18"],
    [electric, electricSteel]
];
//episode8
const thomas = [
  ["Growlithe", "Growlithe"],
  [growlitheImage, growlitheImage],
  ["Lv.18", "Lv.19"],
  [fire, fire]
];
const arthur = [
  ["Nidoran♂", "Nidoran♀"],
  [nidoranMImage, nidoranFImage],
  ["Lv.19", "Lv.19"],
  [poison, poison]
];
const ann = [
  ["Pidgey", "Nidoran♀"],
  [pidgeyImage, nidoranFImage],
  ["Lv.18", "Lv.18"],
  [normalFlying, poison]
];
const tyler = [
  ["Nidoran♂"],
  [nidoranMImage],
  ["Lv.21"],
  [poison]
];
const trevor = [
  ["Machop", "Tentacool"],
  [machopImage, tentacoolImage],
  ["Lv.17", "Lv.17"],
  [fighting, waterPoison]
];
const edmond = [
  ["Machop", "Shellder"],
  [machopImage, shellderImage],
  ["Lv.18", "Lv.18"],
  [fighting, water]
];
const dale = [
  ["Goldeen", "Tentacool", "Goldeen"],
  [goldeenImage, tentacoolImage, goldeenImage],
  ["Lv.17", "Lv.17", "Lv.17"],
  [water, waterPoison, water]
];
const brooks = [
  ["Pikachu"],
  [pikachuImage],
  ["Lv.23"],
  [electric]
];
const dawn = [
  ["Rattata", "Pikachu"],
  [rattataImage, pikachuImage],
  ["Lv.18", "Lv.18"],
  [normal, electric]
];
const lamar = [
  ["Growlithe", "Ponyta"],
  [growlitheImage, ponytaImage],
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
  [pikachuImage, pikachuImage],
  ["Lv.21", "Lv.21"],
  [electric, electric]
];
const baily= [
  ["Voltorb", "Magnemite"],
  [voltorbImage, magnemiteImage],
  ["Lv.21", "Lv.21"],
  [electric, electricSteel]
];
const tucker= [
  ["Pikachu"],
  [pikachuImage],
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
  [oddishImage, bellsproutImage, oddishImage, bellsproutImage],
  ["Lv.18", "Lv.18", "Lv.18", "lv.18"],
  [grassPoison, grassPoison, grassPoison, grassPoison]
];
const jeremy = [
  ["Machop", "Onix"],
  [machopImage, onixImage],
  ["Lv.20", "Lv.20"],
  [fighting, rockGround]
];
const chris = [
  ["Growlithe", "Charmander"],
  [growlitheImage, charmanderImage],
  ["Lv.21", "Lv.21"],
  [fire, fire]
];
const brent = [
  ["Beedrill", "Beedrill"],
  [beedrillImage, beedrillImage],
  ["Lv.19", "Lv.19"],
  [bugPoison, bugPoison]
];
const conner = [
  ["Caterpie", "Weedle", "Venonat"],
  [caterpieImage, weedleImage, venonatImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [bug, bugPoison, bugPoison]
];
const drew = [
  ["Rattata", "Sandshrew", "Ekans", "Sandshrew"],
  [rattataImage, sandshrewImage, ekansImage, sandshrewImage],
  ["Lv.19", "Lv.19", "Lv.19", "lv.19"],
  [normal, ground, poison, ground]
];
const brice = [
  ["Geodude", "Machop", "Geodude"],
  [geodudeImage, machopImage, geodudeImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [rockGround, fighting, rockGround]
];
const caitlin = [
  ["Meowth"],
  [meowthImage],
  ["Lv.23"],
  [normal]
];
//episode11
const heidi = [
  ["Pikachu", "Clefairy"],
  [pikachuImage, clefairyImage],
  ["Lv.20", "Lv.20"],
  [electric, normal]
];
const ashton = [
  ["Cubone", "Slowpoke"],
  [cuboneImage, slowpokeImage],
  ["Lv.23", "Lv.23"],
  [ground, waterPsychic]
];
const winston = [
  ["Slowpoke"],
  [slowpokeImage],
  ["Lv.25"],
  [waterPsychic]
];
const marth = [
  ["Oddish", "Bulbasaur"],
  [oddishImage, bulbasaurImage],
  ["Lv.22", "Lv.22"],
  [grassPoison, grassPoison]
];
const eric = [
  ["Machop", "Onix"],
  [machopImage, onixImage],
  ["Lv.20", "Lv.20"],
  [fighting, rockGround]
];
const oliver = [
  ["Onix", "Onix", "Geodude"],
  [onixImage, onixImage, geodudeImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [rockGround, rockGround, rockGround]
];
const lucas = [
  ["Geodude", "Graveler"],
  [geodudeImage, gravelerImage],
  ["Lv.21", "Lv.21"],
  [rockGround, rockGround]
];
const sofia = [
  ["Jigglypuff", "Pidgey", "Meowth"],
  [jigglypuffImage, pidgeyImage, meowthImage],
  ["Lv.21", "Lv.21", "Lv.21"],
  [normal, normalFlying, normal]
];
const dudley = [
  ["Geodude", "Geodude","Graveler"],
  [geodudeImage, geodudeImage,gravelerImage],
  ["Lv.21", "Lv.21", "Lv.21"],
  [rockGround, rockGround, rockGround]
];
const cooper = [
  ["Slowpoke", "Slowpoke","Slowpoke"],
  [slowpokeImage, slowpokeImage, slowpokeImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [waterPsychic, waterPsychic, waterPsychic]
];
const leah = [
  ["Bellsprout", "Clefairy"],
  [bellsproutImage, clefairyImage],
  ["Lv.22", "Lv.22"],
  [grassPoison, normal]
];
const dana = [
  ["Meowth", "Oddish", "Pidgey"],
  [meowthImage, oddishImage, pidgeyImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [normal, grassPoison, normalFlying]
];
const carol = [
  ["Pidgey", "Pidgeotto"],
  [pidgeyImage, pidgeottoImage],
  ["Lv.21", "Lv.21"],
  [normalFlying, normalFlying]
];
const clark = [
  ["Geodude", "Onix"],
  [geodudeImage, onixImage],
  ["Lv.21", "Lv.21"],
  [rockGround, rockGround]
];
const herman = [
  ["Cubone", "Slowpoke"],
  [cuboneImage, slowpokeImage],
  ["Lv.20", "Lv.20"],
  [ground, waterPsychic]
];
const trent = [
  ["Onix", "Graveler"],
  [onixImage, gravelerImage],
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
  [clefairyImage, clefairyImage],
  ["Lv.22", "Lv.22"],
  [normal, normal]
];
const rich = [
  ["Grolithe", "Vulpix"],
  [vulpixImage, vulpixImage],
  ["Lv.24", "Lv.24"],
  [fire, fire]
];
const glenn = [
  ["Grimer", "Muk", "Grimer"],
  [grimerImage, mukImage, grimerImage],
  ["Lv.22", "Lv.22", "Lv.22"],
  [poison, poison, poison]
];
const eliandanne = [
  ["Clefairy", "Jigglypuff"],
  [clefairyImage, jigglypuffImage],
  ["Lv.22", "Lv.22"],
  [normal, normal]
];
const megan = [
  ["Pidgey", "Rattata", "Nidoran♂", "Meowth", "Pikachu"],
  [pidgeyImage, rattataImage, nidoranMImage, meowthImage, pikachuImage],
  ["Lv.19", "Lv.19", "Lv.19", "Lv.19", "Lv.19"],
  [normalFlying, normal, poison, normal, electric]
];
const andrea = [
  ["Meowth", "Meowth", "Meowth"],
  [meowthImage, meowthImage, meowthImage],
  ["Lv.24", "Lv.24", "Lv.24"],
  [normal, normal, normal]
];
const leslie = [
  ["Koffing"],
  [koffingImage],
  ["Lv.26"],
  [poison]
];
const paige = [
  ["Nidoran♀", "Nidorina"],
  [nidoranFImage, nidorinaImage],
  ["Lv.23", "Lv.23"],
  [poison, poison]
];
const jaren = [
  ["Grimer", "Grimer"],
  [grimerImage, grimerImage],
  ["Lv.24", "Lv.24"],
  [poison, poison]
];
const ricardo = [
  ["Koffing", "Koffing", "Grimer"],
  [koffingImage, koffingImage, grimerImage],
  ["Lv.22", "Lv.22", "Lv.23"],
  [poison, poison, poison]
];
const aidan = [
  ["Voltorb", "Koffing", "Voltorb", "Magnemite"],
  [voltorbImage, koffingImage, voltorbImage, magnemiteImage],
  ["Lv.20", "Lv.20", "Lv.20", "Lv.20"],
  [electric, poison, electric, electricSteel]
];
const stan = [
  ["Poliwag", "Poliwag", "Poliwhirl"],
  [poliwagImage, poliwagImage, poliwhirlImage],
  ["Lv.22", "Lv.22", "Lv.22"],
  [water, water, water]
];
//episode13
const leaandjed = [
  ["Ninetales", "Rapidash"],
  [ninetalesImage, rapidashImage],
  ["Lv.29", "Lv.29"],
  [fire, fire]
];
const kay = [
  ["Bellsprout", "Weepinbell"],
  [bellsproutImage, weepinbellImage],
  ["Lv.23", "Lv.23"],
  [grassPoison, grassPoison]
];
const bridget = [
  ["Oddish", "Oddish", "Bellsprout", "Bellsprout"],
  [oddishImage, oddishImage, bellsproutImage, bellsproutImage],
  ["Lv.21", "Lv.21", "Lv.21", "Lv.21"],
  [grassPoison, grassPoison, grassPoison, grassPoison]
];
const mary = [
  ["Bellsprout", "Oddish", "Weepinbell", "Gloom", "Ivysaur"],
  [bellsproutImage, oddishImage, weepinbellImage, gloomImage, ivysaurImage],
  ["Lv.22", "Lv.22", "Lv.22", "Lv.22", "Lv.22"],
  [grassPoison, grassPoison, grassPoison, grassPoison, grassPoison]
];
const lisa = [
  ["Oddish", "Gloom"],
  [oddishImage, gloomImage],
  ["Lv.23", "Lv.23"],
  [grassPoison, grassPoison]
];
const tina = [
  ["Bulbasaur", "Ivysaur"],
  [bulbasaurImage, ivysaurImage],
  ["Lv.24", "Lv.24"],
  [grassPoison, grassPoison]
];
const lori = [
  ["Exeggcute"],
  [exeggcuteImage],
  ["Lv.24"],
  [grassPsychic]
];
const tamia = [
  ["Bellsprout", "Bellsprout"],
  [bellsproutImage, bellsproutImage],
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
  [raticateImage, zubatImage],
  ["Lv.20", "Lv.20"],
  [normal, poisonFlying]
];
const rocketGruntHideout2 = [
  ["Raticate", "Raticate"],
  [raticateImage, raticateImage],
  ["Lv.21", "Lv.21"],
  [normal, normal]
];
const rocketGruntHideout3 = [
  ["Drowzee", "Machop"],
  [drowzeeImage, machopImage],
  ["Lv.21", "Lv.21"],
  [psychic, fighting]
];
const rocketGruntHideout4 = [
  ["Rattata", "Rattata", "Raticate", "Raticate"],
  [rattataImage, rattataImage, raticateImage, raticateImage],
  ["Lv.19", "Lv.19", "Lv.19", "Lv.19"],
  [normal, normal, normal, normal]
];
const rocketGruntHideout5 = [
  ["Grimer", "Koffing", "Koffing"],
  [grimerImage, koffingImage, koffingImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [poison, poison, poison]
];
const rocketGruntHideout7 = [
  ["Zubat", "Koffing", "Grimer", "Zubat", "raticateImage"],
  [zubatImage, koffingImage, grimerImage, zubatImage, raticateImage],
  ["Lv.17", "Lv.17", "Lv.17", "Lv.17", "Lv.17"],
  [poisonFlying, poison, poison, poisonFlying, normal]
];
const rocketGruntHideout8 = [
  ["Machop", "Machop"],
  [machopImage, machopImage],
  ["Lv.21", "Lv.21"],
  [fighting, fighting]
];
const rocketGruntHideout9 = [
  ["Rattata", "Raticate", "Drowzee"],
  [rattataImage, raticateImage, drowzeeImage],
  ["Lv.20", "Lv.20", "Lv.20"],
  [normal, normal, psychic]
];
const rocketGruntHideout10 = [
  ["Koffing", "Zubat"],
  [koffingImage, zubatImage],
  ["Lv.21", "Lv.21"],
  [poison, poisonFlying]
];
const rocketGruntHideout11 = [
  ["Sandshrew", "Ekans", "Sandslash"],
  [sandshrewImage, ekansImage, sandslashImage],
  ["Lv.23", "Lv.23", "Lv.23"],
  [ground, poison, ground]
];
const rocketGruntHideout12 = [
  ["Ekans", "Sandshrew", "Arbok"],
  [ekansImage, sandshrewImage, arbokImage],
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
  ["Gastly"],
  [gastlyImage],
  ["Lv.23"],
  [ghostPoison]
];
const patricia = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.22"],
  [ghostPoison]
];
const carly = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.24"],
  [ghostPoison]
];
const laurel = [
  ["Gastly", "Gastly"],
  [gastlyImage, gastlyImage],
  ["Lv.23", "Lv.23"],
  [ghostPoison, ghostPoison]
];
const jody = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.22"],
  [ghostPoison]
];
const paula = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.24"],
  [ghostPoison]
];
const ruth = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.22"],
  [ghostPoison]
];
const tammy = [
  ["Haunter"],
  [haunterImage],
  ["Lv.23"],
  [ghostPoison]
];
const karina = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.24"],
  [ghostPoison]
];
const janae = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.22"],
  [ghostPoison]
];
const angelica = [
  ["Gastly", "Gastly", "Gastly"],
  [gastlyImage, gastlyImage, gastlyImage],
  ["Lv.22", "Lv.22", "Lv.22"],
  [ghostPoison, ghostPoison, ghostPoison]
];
const jennifer = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.24"],
  [ghostPoison]
];
const emilia = [
  ["Gastly"],
  [gastlyImage],
  ["Lv.24"],
  [ghostPoison]
];
const rocketGruntTower1 = [
  ["Zubat", "Zubat", "Golbat"],
  [zubatImage, zubatImage, golbatImage],
  ["Lv.25", "Lv.25", "Lv.25"],
  [poisonFlying, poisonFlying, poisonFlying]
];
const rocketGruntTower2 = [
  ["Koffing", "Drowzee"],
  [koffingImage, drowzeeImage],
  ["Lv.26", "Lv.26"],
  [poison, psychic]
];
const rocketGruntTower3 = [
  ["Zubat", "Rattata", "Raticate", "Zubat"],
  [zubatImage, rattataImage, raticateImage, zubatImage],
  ["Lv.23", "Lv.23", "Lv.23", "Lv.23"],
  [poisonFlying, normal, normal, poisonFlying]
];
//episode16
const ned = [
  ["Goldeen", "Poliwag", "Goldeen"],
  [goldeenImage, poliwagImage, goldeenImage],
  ["Lv.22", "Lv.22", "Lv.22"],
  [water, water, water]
];
const chip = [
  ["Tentacool", "Goldeen"],
  [tentacoolImage, goldeenImage],
  ["Lv.24", "Lv.24"],
  [water, waterPoison]
];
const hank = [
  ["Goldeen"],
  [goldeenImage],
  ["Lv.27"],
  [water]
];
const elliot = [
  ["Poliwag", "Shellder", "Goldeen", "Horsea"],
  [poliwagImage, shellderImage, goldeenImage, horseaImage],
  ["Lv.21", "Lv.21", "Lv.21", "Lv.21"],
  [water, water, water, water]
];
const giaandjes = [
  ["Nidoran♀", "Nidoran♂"],
  [nidoranFImage, nidoranMImage],
  ["Lv.24", "Lv.24"],
  [poison, poison]
];
const luca = [
  ["Voltorb", "Electrode"],
  [voltorbImage, electrodeImage],
  ["Lv.29", "Lv.29"],
  [electric, electric]
];
const justin = [
  ["Nidoran♂", "Nidorino"],
  [nidoranMImage, nidorinoImage],
  ["Lv.29", "Lv.29"],
  [poison, poison]
];
const andrew = [
  ["Magikarp", "Magikarp"],
  [magikarpImage, magikarpImage],
  ["Lv.24", "Lv.24"],
  [water, water]
];
const alma = [
  ["Goldeen", "Poliwag", "Goldeen"],
  [goldeenImage, poliwagImage, goldeenImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [water, water, water]
];
const sebastian = [
  ["Pidgey", "Pidgeotto"],
  [pidgeyImage, pidgeottoImage],
  ["Lv.29", "Lv.29"],
  [normalFlying, normalFlying]
];
const susie = [
  ["Pidgey", "Meowth", "Rattata", "Pikachu", "Meowth"],
  [pidgeyImage, meowthImage, rattataImage, pikachuImage, meowthImage],
  ["Lv.24", "Lv.24", "Lv.24", "Lv.24", "Lv.24"],
  [normalFlying, normal, normal, electric, normal]
];
const sheila = [
  ["Clefairy", "Meowth"],
  [clefairyImage, meowthImage],
  ["Lv.29", "Lv.29"],
  [normal, normal]
];
const lola = [
  ["Rattata", "Pikachu", "Rattata"],
  [rattataImage, pikachuImage, rattataImage],
  ["Lv.27", "Lv.27", "Lv.27"],
  [normal, electric, normal]
];
const valerie = [
  ["Poliwag", "Poliwag"],
  [poliwagImage, poliwagImage],
  ["Lv.30", "Lv.30"],
  [water, water]
];
const perry = [
  ["Spearow", "Pidgey", "Pidgey", "Spearow", "Spearow"],
  [spearowImage, pidgeyImage, pidgeyImage, spearowImage, spearowImage],
  ["Lv.25", "Lv.25", "Lv.25", "Lv.25", "Lv.25"],
  [normalFlying, normalFlying, normalFlying, normalFlying, normalFlying]
];
const gwen = [
  ["Pidgey", "Meowth", "Pidgey", "Pidgeotto"],
  [pidgeyImage, meowthImage, pidgeyImage, pidgeottoImage],
  ["Lv.27", "Lv.27", "Lv.27", "Lv.27"],
  [normalFlying, normal, normalFlying, normalFlying]
];
const robert = [
  ["Pidgey", "Pidgeotto", "Spearow", "Fearow"],
  [pidgeyImage, pidgeottoImage, spearowImage, fearowImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [normalFlying, normalFlying, normalFlying, normalFlying]
];
const jared = [
  ["Koffing", "Koffing", "Koffing"],
  [koffingImage, koffingImage, koffingImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poison, poison]
];
const carter = [
  ["Pidgey", "Doduo", "Pidgeotto"],
  [pidgeyImage, doduoImage, pidgeottoImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [normalFlying, normalFlying, normalFlying]
];
const mitch = [
  ["Pidgey", "Spearow", "Pidgey", "Fearow"],
  [pidgeyImage, spearowImage, pidgeyImage, fearowImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [normalFlying, normalFlying, normalFlying, normalFlying]
];
const marlon = [
  ["Spearow", "Doduo", "Fearow"],
  [spearowImage, doduoImage, fearowImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [normalFlying, normalFlying, normalFlying]
];
const beck = [
  ["Pidgeotto", "Fearow"],
  [pidgeottoImage, fearowImage],
  ["Lv.29", "Lv.29"],
  [normalFlying, normalFlying]
];
const donald = [
  ["Farfetch'd"],
  [farfetchdImage],
  ["Lv.33"],
  [normalFlying]
];
const benny = [
  ["Spearow", "Fearow"],
  [spearowImage, fearowImage],
  ["Lv.29", "Lv.29"],
  [normalFlying, normalFlying]
];
const kiriandjan = [
  ["Squirtle", "Charmander"],
  [squirtleImage, charmanderImage],
  ["Lv.29", "Lv.29"],
  [water, fire]
];
const gerald = [
  ["Koffing", "Muk"],
  [koffingImage, mukImage],
  ["Lv.29", "Lv.29"],
  [poison, poison]
];
const lukas = [
  ["Koffing", "Koffing", "Grimer", "Koffing"],
  [koffingImage, koffingImage, grimerImage, koffingImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [poison, poison, poison, poison]
];
const malik = [
  ["Koffing", "Grimer"],
  [koffingImage, grimerImage],
  ["Lv.29", "Lv.29"],
  [poison, poison]
];
const isaac = [
  ["Grimer", "Grimer", "Koffing"],
  [grimerImage, grimerImage, koffingImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poison, poison]
];
const becky = [
  ["Pikachu", "Raichu"],
  [pikachuImage, raichuImage],
  ["Lv.29", "Lv.29"],
  [electric, electric]
];
const ronandmya = [
  ["Hitmonchan", "Hitmonlee"],
  [hitmonchanImage, hitmonleeImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const celia = [
  ["Clefairy"],
  [clefairyImage],
  ["Lv.33"],
  [normal]
];
//episode17
const yazmin = [
  ["Bellsprout", "Oddish", "Tangela"],
  [bellsproutImage,oddishImage,tangelaImage],
  ["Lv.29", "Lv.29", "Lv.29"],
  [grassPoison, grassPoison, grass]
];
const edwin = [
  ["Pidgeotto", "Farfetch'd", "Doduo", "Pidgey"],
  [pidgeottoImage,farfetchdImage,doduoImage,pidgeyImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [normalFlying, normalFlying, normalFlying, normalFlying]
];
const chester = [
  ["Dodrio", "Doduo", "Doduo"],
  [dodrioImage,doduoImage,doduoImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [normalFlying, normalFlying, normalFlying]
];
const kindra = [
  ["Gloom", "Oddish", "Oddish"],
  [gloomImage,oddishImage,oddishImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [grassPoison, grassPoison, grassPoison]
];
const olivia = [
  ["Bulbasaur", "Ivysaur"],
  [bulbasaurImage,ivysaurImage],
  ["Lv.29", "Lv.29"],
  [grassPoison, grassPoison]
];
const grace = [
  ["Pidgeotto", "Wigglytuff"],
  [pidgeottoImage, wigglytuffImage],
  ["Lv.29", "Lv.29"],
  [normalFlying, normal]
];
const alex = [
  ["Koffing", "Grimer", "Weezing"],
  [koffingImage, grimerImage, weezingImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poison, poison]
];
const ernest = [
  ["Koffing", "Koffing", "Weezing", "Koffing", "Grimer"],
  [koffingImage, koffingImage, weezingImage, koffingImage, grimerImage],
  ["Lv.25", "Lv.25", "Lv.25", "Lv.25", "Lv.25" ],
  [poison, poison, poison, poison, poison]
];
const jacob = [
  ["Spearow", "Spearow", "Fearow", "Spearow"],
  [spearowImage,spearowImage,fearowImage,spearowImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [normalFlying, normalFlying, normalFlying, normalFlying]
];
const wilton = [
  ["Spearow", "Fearow"],
  [spearowImage,fearowImage],
  ["Lv.29", "Lv.29"],
  [normalFlying, normalFlying]
];
const ramiro = [
  ["Dodrio"],
  [dodrioImage],
  ["Lv.34"],
  [normalFlying]
];
const william = [
  ["Koffing", "Weezing", "Koffing", "Koffing", "Weezing"],
  [koffingImage, weezingImage, koffingImage, koffingImage, weezingImage],
  ["Lv.25", "Lv.25", "Lv.25", "Lv.25", "Lv.25" ],
  [poison, poison, poison, poison, poison]
];
const corey = [
  ["Primeape", "Machoke"],
  [primeapeImage, machokeImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const zeek = [
  ["Machoke"],
  [machokeImage],
  ["Lv.33"],
  [fighting]
];
const nikolas = [
  ["Voltorb", "Voltorb"],
  [voltorbImage, voltorbImage],
  ["Lv.29", "Lv.29"],
  [electric, electric]
];
const raul = [
  ["Mankey", "Primeape"],
  [mankeyImage, primeapeImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const isaiah = [
  ["Machop", "Machamp"],
  [machopImage, machampImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const virgil = [
  ["Weezing", "Koffing", "Weezing"],
  [weezingImage, koffingImage, weezingImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poison, poison]
];
const billy = [
  ["Muk"],
  [mukImage],
  ["Lv.33"],
  [poison]
];
const jamal = [
  ["Mankey", "Mankey", "Machamp", "Machop"],
  [mankeyImage, mankeyImage, machampImage, machopImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [fighting, fighting, fighting, fighting]
];
const jaxon = [
  ["Weezing", "Muk"],
  [weezingImage, mukImage],
  ["Lv.29", "Lv.29"],
  [poison, poison]
];
const lao = [
  ["Grimer", "Koffing"],
  [grimerImage, koffingImage],
  ["Lv.29", "Lv.29"],
  [poison, poison]
];
const koji = [
  ["Machop", "Mankey", "Machop"],
  [machopImage, mankeyImage, machopImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [fighting, fighting, fighting]
];
const hideo = [
  ["Weezing"],
  [weezingImage],
  ["Lv.33"],
  [poison]
];
const luke = [
  ["Mankey", "Machop"],
  [mankeyImage, machopImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const camron = [
  ["Mankey", "Machop"],
  [mankeyImage, machopImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const ruben = [
  ["Weezing", "Koffing", "Weezing"],
  [weezingImage, koffingImage, weezingImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poison, poison]
];
const rocketGruntSilph1 = [
  ["Golbat", "Zubat", "Zubat", "Raticate", "Zubat"],
  [golbatImage, zubatImage, zubatImage, raticateImage, zubatImage],
  ["Lv.25", "Lv.25", "Lv.25", "Lv.25", "Lv.25"],
  [poisonFlying, poisonFlying, poisonFlying, normal, poisonFlying]
];
const jerry = [
  ["Magnemite", "Voltorb", "Mageton"],
  [magnemiteImage, voltorbImage, magnetonImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [electricSteel, electric, electricSteel]
];
const rocketGruntSilph2 = [
  ["Cubone", "Zubat"],
  [cuboneImage, zubatImage],
  ["Lv.29", "Lv.29"],
  [ground, poisonFlying]
];
const parker = [
  ["Grimer", "Electrode"],
  [grimerImage, electrodeImage],
  ["Lv.29", "Lv.29"],
  [poison, electric]
];
const rocketGruntSilph3 = [
  ["Weezing", "Golbat", "Koffing"],
  [weezingImage, golbatImage, koffingImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poisonFlying, poison]
];
const rocketGruntSilph4 = [
  ["Raticate", "Arbok", "Koffing", "Golbat"],
  [raticateImage, arbokImage, koffingImage, golbatImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [normal, poison, poison, poisonFlying]
];
const rocketGruntSilph5 = [
  ["Cubone", "Cubone"],
  [cuboneImage, cuboneImage],
  ["Lv.29", "Lv.29"],
  [ground, ground]
];
const joshua = [
  ["Electrode", "Muk"],
  [electrodeImage, mukImage],
  ["Lv.29", "Lv.29"],
  [electric, poison]
];
const rocketGruntSilph6 = [
  ["Raticate", "Zubat", "Golbat", "Rattata"],
  [raticateImage, zubatImage, golbatImage, rattataImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [normal, poisonFlying, poisonFlying, normal]
];
const rocketGruntSilph7 = [
  ["Machop", "Machoke"],
  [machopImage, machokeImage],
  ["Lv.29", "Lv.29"],
  [fighting, fighting]
];
const rocketGruntSilph8 = [
  ["Zubat", "Zubat", "Golbat"],
  [zubatImage, zubatImage, golbatImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poisonFlying, poisonFlying, poisonFlying]
];
const taylor = [
  ["Voltorb", "Koffing", "Magneton", "Magnemite", "Koffing"],
  [voltorbImage, koffingImage, magnetonImage, magnemiteImage, koffingImage],
  ["Lv.25", "Lv.25", "Lv.25", "Lv.25", "Lv.25"],
  [electric, poison, electricSteel, electricSteel, poison]
];
const rodney = [
  ["Electrode"],
  [electrodeImage],
  ["Lv.33"],
  [electric]
];
const rocketGruntSilph9 = [
  ["Machop", "Drowzee"],
  [machopImage, drowzeeImage],
  ["Lv.29", "Lv.29"],
  [fighting, psychic]
];
const rocketGruntSilph10 = [
  ["Ekans", "Zubat", "Cubone"],
  [ekansImage, zubatImage, cuboneImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poison, poisonFlying, ground]
];
const rocketGruntSilph11 = [
  ["Machoke"],
  [machokeImage],
  ["Lv.33"],
  [poison]
];
const travis = [
  ["Magnemite", "Koffing"],
  [magnemiteImage, koffingImage],
  ["Lv.29", "Lv.29"],
  [electricSteel, poison]
];
const rocketGruntSilph12 = [
  ["Rattata", "Rattata", "Zubat", "Rattata", "Ekans"],
  [rattataImage, rattataImage, zubatImage, rattataImage, ekansImage],
  ["Lv.25", "Lv.25", "Lv.25", "Lv.25", "Lv.25"],
  [normal, normal, poisonFlying, normal, poison]
];
const rocketGruntSilph13 = [
  ["Golbat", "Drowzee", "Hypno"],
  [golbatImage, drowzeeImage, hypnoImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [poisonFlying, psychic, psychic]
];
const ed = [
  ["Voltorb", "Koffing", "Magneton"],
  [voltorbImage, koffingImage, magnetonImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [electric, poison, electricSteel]
];
const rocketGruntSilph14 = [
  ["Arbok"],
  [arbokImage],
  ["Lv.33"],
  [poison]
];
const rocketGruntSilph15 = [
  ["Hypno"],
  [hypnoImage],
  ["Lv.33"],
  [psychic]
];
const jose = [
  ["Electrode", "Weezing"],
  [electrodeImage, weezingImage],
  ["Lv.29", "Lv.29"],
  [electric, poison]
];
const rocketGruntSilph16 = [
  ["Raticate","Hypno","Raticate"],
  [raticateImage, hypnoImage, raticateImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [normal, psychic, normal]
];
const rocketGruntSilph17 = [
  ["Drowzee","Grimer","Machop"],
  [drowzeeImage, grimerImage, machopImage],
  ["Lv.28", "Lv.28", "Lv.28"],
  [psychic, poison, fighting]
];
const beau = [
  ["Magneton","Koffing","Weezing", "Magnemite"],
  [magnetonImage, koffingImage, weezingImage, magnemiteImage],
  ["Lv.26", "Lv.26", "Lv.26", "Lv.26"],
  [electricSteel, poison, poison, electricSteel]
];
const dalton = [
  ["Kadabra","Mr. Mime"],
  [kadabraImage, mrMimeImage],
  ["Lv.29", "Lv.29"],
  [psychic, psychic]
];
const rocketGruntSilph18 = [
  ["Sandshrew","Sandshrew"],
  [sandshrewImage, sandshrewImage],
  ["Lv.29", "Lv.29"],
  [ground, ground]
];
const rival6_1 = [
  ["Pidgeot","Gyarados", "Growlithe"],
  [pidgeot, gyarados, growlithe],
  ["Lv.37", "Lv.38", "Lv.35"],
  [normalFlying, waterFlying, fire]
];
const rival6_2 = [
  ["Alakazam", "Venusaur"],
  [alakazam, venusaur],
  ["Lv.35", "Lv.40"],
  [psychic, grassPoison]
];
const rocketGruntSilph19 = [
  ["Cubone", "Drowzee", "Marowak"],
  [cuboneImage, drowzeeImage, marowakImage],
  ["Lv.32", "Lv.32", "Lv.32"],
  [ground, psychic, ground]
];
const giovanni2 = [
  ["Nidorino", "Kangaskan", "Rhyhorn", "Nidoqueen"],
  [nidorino, kangaskhan, rhyhorn, nidoqueen],
  ["Lv.37", "Lv.35", "Lv.37", "Lv.41"],
  [poison, normal, groundRock, poisonGround]
];
//episode18
const hitoshi = [
  ["Machop", "Mankey", "Primeape"],
  [machopImage, mankeyImage, primeapeImage],
  ["Lv.31", "Lv.31", "Lv.31"],
  [fighting, fighting, fighting]
];
const hideki = [
  ["Machop", "Machoke"],
  [machopImage, machokeImage],
  ["Lv.32", "Lv.32"],
  [fighting, fighting]
];
const aaron = [
  ["Primeape"],
  [primeapeImage],
  ["Lv.36"],
  [fighting]
];
const mike = [
  ["Mankey", "Mankey", "Primeape"],
  [mankeyImage, mankeyImage, primeapeImage],
  ["Lv.31", "Lv.31", "Lv.31"],
  [fighting, fighting, fighting]
];
const koichi = [
  ["Hitmonlee", "Hitmonchan"],
  [hitmonleeImage, hitmonchanImage],
  ["Lv.37", "Lv.37"],
  [fighting, fighting]
];
//episode19
const kayden = [
  ["Hypno"],
  [hypnoImage],
  ["Lv.38"],
  [psychic]
];
const kirk = [
  ["Drowzee", "Drowzee", "Kadabra", "Drowzee"],
  [drowzeeImage, drowzeeImage, kadabraImage, drowzeeImage],
  ["Lv.31", "Lv.31", "Lv.31", "Lv.31"],
  [psychic, psychic, psychic, psychic]
];
const edgar = [
  ["Arbok", "Sandslash", "Arbok"],
  [arbokImage, sandslashImage, arbokImage],
  ["Lv.33", "Lv.33", "Lv.33"],
  [poison, ground, poison]
];
const phil = [
  ["Sandslash", "Arbok"],
  [sandslashImage, arbokImage],
  ["Lv.34", "Lv.34"],
  [ground, poison]
];
const shawn = [
  ["Drowzee", "Hypno"],
  [drowzeeImage, hypnoImage],
  ["Lv.34", "Lv.34"],
  [psychic, psychic]
];
const koga = [
  ["Koffing", "Muk", "Koffing", "Weezing"],
  [koffing, muk, koffing, weezing],
  ["Lv.37", "Lv.39", "Lv.37", "Lv.43"],
  [poison, poison, poison, poison]
];
//episode20
const cameron = [
  ["Slowpoke", "Slowpoke", "Slowbro"],
  [slowpokeImage, slowpokeImage, slowbroImage],
  ["Lv.33", "Lv.33", "Lv.33"],
  [waterPsychic, waterPsychic, waterPsychic]
];
const johan = [
  ["Kadabra", "Slowpoke", "Mr.Mime", "Kadabra"],
  [kadabraImage, slowpokeImage, mrMimeImage, kadabraImage],
  ["Lv.31", "Lv.31", "Lv.31", "Lv.31"],
  [psychic, waterPsychic, psychic, psychic]
];
const tyron = [
  ["Mr.Mime", "Kadabra"],
  [mrMimeImage, kadabraImage],
  ["Lv.34", "Lv.34"],
  [psychic, psychic]
];
const tasha = [
  ["Ghastly", "Ghastly", "Haunter"],
  [gastlyImage, gastlyImage, haunterImage],
  ["Lv.33", "Lv.33", "Lv.33"],
  [ghostPoison, ghostPoison, ghostPoison]
];
const preston = [
  ["Slowbro"],
  [slowbroImage],
  ["Lv.38"],
  [waterPsychic]
];
const amanda = [
  ["Ghastly", "Haunter"],
  [gastlyImage, haunterImage],
  ["Lv.34", "Lv.34"],
  [ghostPoison, ghostPoison]
];
const sabrina = [
  ["Kadabra", "Mr.Mime", "Venomoth", "Alakazam"],
  [kadabra, mr_mime, venomoth, alakazam],
  ["Lv.38", "Lv.37", "Lv.38", "Lv.43"],
  [psychic, psychic, bugPoison, psychic]
];
//episode21
const richard = [
  ["Tentacool", "Shellder"],
  [tentacoolImage, shellderImage],
  ["Lv.30", "Lv.30"],
  [waterPoison, water]
];
const reece = [
  ["Goldeen", "Horsea", "Staryu"],
  [goldeenImage, horseaImage, staryuImage],
  ["Lv.29", "Lv.29", "Lv.29"],
  [water, water, water]
];
const tony = [
  ["Horsea", "Horsea"],
  [horseaImage, horseaImage],
  ["Lv.30", "Lv.30"],
  [water, water]
];
const david = [
  ["Goldeen", "Shellder", "Seaking"],
  [goldeenImage, shellderImage, seakingImage],
  ["Lv.29", "Lv.29", "Lv.29"],
  [water, water, water]
];
const douglas = [
  ["Horsea", "Tentacool", "Tentacool", "Goldeen"],
  [horseaImage, tentacoolImage, tentacoolImage, goldeenImage],
  ["Lv.27", "Lv.27", "Lv.27", "Lv.27"],
  [water, waterPoison, waterPoison, water]
];
const wade = [
  ["Magikarp", "Magikarp", "Magikarp", "Magikarp", "Magikarp", "Magikarp"],
  [magikarpImage, magikarpImage, magikarpImage, magikarpImage, magikarpImage, magikarpImage],
  ["Lv.27", "Lv.27", "Lv.27", "Lv.27", "Lv.27", "Lv.27"],
  [water, water, water, water, water, water]
];
const ronald = [
  ["Seaking", "Goldeen", "Seaking", "Seaking"],
  [seakingImage, seakingImage, seakingImage, seakingImage],
  ["Lv.28", "Lv.28", "Lv.28", "Lv.28"],
  [water, water, water, water]
];
const lilandian = [
  ["Seadra", "Starmie"],
  [seadraImage, starmieImage],
  ["Lv.33", "Lv.33"],
  [water, waterPsychic]
];
const spencer = [
  ["Seadra", "Tentacruel"],
  [seadraImage, tentacruelImage],
  ["Lv.33", "Lv.33"],
  [water, waterPoison]
];
const claude = [
  ["Shellder", "Cloyster"],
  [shellderImage, cloysterImage],
  ["Lv.31", "Lv.31"],
  [water, waterIce]
];
const nolan = [
  ["Seaking", "Goldeen"],
  [seakingImage, goldeenImage],
  ["Lv.33", "Lv.33"],
  [water, water]
];
const jack = [
  ["Starmie"],
  [starmieImage],
  ["Lv.37"],
  [waterPsychic]
];
const roland = [
  ["Poliwhirl", "Tentacool", "Seadra"],
  [poliwhirlImage, tentacoolImage, seadraImage],
  ["Lv.32", "Lv.32", "Lv.32"],
  [water, waterPoison, water]
];
const jerome = [
  ["Staryu", "Wartortle"],
  [staryuImage, wartortleImage],
  ["Lv.33", "Lv.33"],
  [water, water]
];
const melissa = [
  ["Poliwag", "Seaking"],
  [poliwagImage, seakingImage],
  ["Lv.31", "Lv.31"],
  [water, water]
];
const missy = [
  ["Goldeen", "Seaking"],
  [goldeenImage, seakingImage],
  ["Lv.31", "Lv.31"],
  [water, water]
];
const dean = [
  ["Staryu"],
  [staryuImage],
  ["Lv.35"],
  [water]
];
const nora = [
  ["Shellder", "Shellder", "Cloyster"],
  [shellderImage, shellderImage, cloysterImage],
  ["Lv.30", "Lv.30", "Lv.30"],
  [water, water, waterIce]
];
const roger = [
  ["Fearow", "Fearow", "Pidgeotto"],
  [fearowImage, fearowImage, pidgeottoImage],
  ["Lv.30", "Lv.30", "Lv.30"],
  [normalFlying, normalFlying, normalFlying]
];
const irene = [
  ["Tentacool", "Horsea", "Seel"],
  [tentacoolImage, horseaImage, seelImage],
  ["Lv.30", "Lv.30", "Lv.30"],
  [waterPoison, water, water]
];
//episode22
const johnson = [
  ["Ekans", "Ekans", "Raticate"],
  [ekansImage, ekansImage, raticateImage],
  ["Lv.33", "Lv.33", "Lv.34"],
  [poison, poison, normal]
];
const ted = [
  ["Electrode", "Weezing"],
  [electrodeImage, weezingImage],
  ["Lv.29", "Lv.29"],
  [electric, poison]
];
const arnie = [
  ["Charmander", "Charmeleon"],
  [charmanderImage, charmeleonImage],
  ["Lv.34", "Lv.34"],
  [fire, fire]
];
const braydon = [
  ["Magnemite", "Magneton", "Voltorb"],
  [magnemiteImage, magnetonImage, voltorbImage],
  ["Lv.34", "Lv.34", "Lv.33"],
  [electricSteel, electricSteel, electric]
];
const lewis = [
  ["Growlithe", "Ponyta"],
  [growlitheImage, ponytaImage],
  ["Lv.34", "Lv.34"],
  [fire, fire]
];
const ivan = [
  ["Magnemite", "Electrode"],
  [magnemiteImage, electrodeImage],
  ["Lv.34", "Lv.34"],
  [electricSteel, electric]
];
const simon = [
  ["Ninetales"],
  [ninetalesImage],
  ["Lv.38"],
  [fire]
];
//episode23
const quinn = [
  ["Growlithe", "Vulpix", "Ninetales"],
  [growlitheImage, vulpixImage, ninetalesImage],
  ["Lv.36", "Lv.36", "Lv.36"],
  [fire, fire, fire]
];
const erik = [
  ["Vulpix", "Vulpix", "Ninetales"],
  [vulpixImage, vulpixImage, ninetalesImage],
  ["Lv.36", "Lv.36", "Lv.36"],
  [fire, fire, fire]
];
const avery = [
  ["Ponyta", "Charmander", "Vulpix", "Primeape"],
  [ponytaImage, charmanderImage, vulpixImage, primeapeImage],
  ["Lv.34", "Lv.34", "Lv.34", "Lv.34"],
  [fire, fire, fire, fighting]
];
const ramon = [
  ["Ponyta"],
  [ponytaImage],
  ["Lv.41"],
  [fire]
];
const derek = [
  ["Rapidash"],
  [rapidashImage],
  ["Lv.41"],
  [fire]
];
const dusty = [
  ["Vulpix", "Growlithe"],
  [vulpixImage, growlitheImage],
  ["Lv.37", "Lv.37"],
  [fire, fire]
];
const zac = [
  ["Growlithe", "Vulpix"],
  [growlitheImage, vulpixImage],
  ["Lv.37", "Lv.37"],
  [fire, fire]
];
const blaine = [
  ["Growlithe", "Ponyta", "Rapidash", "Arcanine"],
  [growlithe, ponyta, rapidash, arcanine],
  ["Lv.42", "Lv.40", "Lv.42", "Lv.47"],
  [fire, fire, fire, fire]
];
//episode24
const yuji = [
  ["Sandslash", "Graveler", "Onix", "Graveler", "Marowak"],
  [sandslashImage, gravelerImage, onixImage, gravelerImage, marowakImage],
  ["Lv.38", "Lv.38", "Lv.38", "Lv.38", "Lv.38"],
  [ground, rockGround, rockGround, rockGround, ground]
];
const warren = [
  ["Marowak", "Marowak", "Rhyhorn", "Nidorina", "Nidoqueen"],
  [marowakImage, marowakImage, rhyhornImage, nidorinaImage, nidoqueenImage],
  ["Lv.37", "Lv.37", "Lv.38", "Lv.39", "Lv.39"],
  [ground, ground, groundRock, poison, poisonGround]
];
const takashi = [
  ["Machoke", "Machop", "Machoke"],
  [machokeImage, machopImage, machokeImage],
  ["Lv.38", "Lv.38", "Lv.38"],
  [fighting, fighting, fighting]
];
const giovanni3_1 = [
  ["Rhyhorn", "Dugtrio", "Nidoqueen"],
  [rhyhorn, dugtrio, nidoqueen],
  ["Lv.45", "Lv.42", "Lv.44"],
  [groundRock, ground, poisonGround]
];
const giovanni3_2 = [
  ["Nidoking", "Rhyhorn"],
  [nidoking, rhyhorn],
  ["Lv.45", "Lv.50"],
  [poisonGround, groundRock]
];
const rival7_1 = [
  ["Pidgeot", "Rhyhorn", "Gyarados"],
  [pidgeot, rhyhorn, gyarados],
  ["Lv.47", "Lv.45", "Lv.45"],
  [normalFlying, groundRock, waterFlying]
];
const rival7_2 = [
  ["Growlithe", "Alakazam", "Venusaur"],
  [growlithe, alakazam, venusaur],
  ["Lv.45", "Lv.47", "Lv.53"],
  [fire, psychic, grassPoison]
];
//episode25
const abigail = [
  ["Psyduck", "Psyduck", "Golduck"],
  [psyduckImage, psyduckImage, golduckImage],
  ["Lv.35", "Lv.36", "Lv.37"],
  [water, water, water]
];
const claire = [
  ["Meowth", "Meowth", "Pikachu", "Clefairy"],
  [meowthImage, meowthImage, pikachuImage, clefairyImage],
  ["Lv.35", "Lv.35", "Lv.35", "Lv.35"],
  [normal, normal, electric, normal]
];
const bryce = [
  ["Nidorino", "Raticate", "Sandslash"],
  [nidorinoImage, raticateImage, sandslashImage],
  ["Lv.36", "Lv.36", "Lv.36"],
  [poison, normal, ground]
];
const tanya = [
  ["Hitmonlee", "Hitmonchan"],
  [hitmonleeImage, hitmonchanImage],
  ["Lv.38", "Lv.38"],
  [fighting, fighting]
];
const garrett = [
  ["Shellder", "Cloyster", "Wartortle"],
  [shellderImage, cloysterImage, wartortleImage],
  ["Lv.35", "Lv.35", "Lv.38"],
  [water, waterIce, water]
];
const mikandkia = [
  ["Machoke", "Primeape"],
  [machokeImage, primeapeImage],
  ["Lv.39", "Lv.39"],
  [fighting, fighting]
];
const hugh = [
  ["Machop", "Machoke"],
  [machopImage, machokeImage],
  ["Lv.37", "Lv.37"],
  [fighting, fighting]
];
const shea = [
  ["Machop", "Machoke"],
  [machopImage, machokeImage],
  ["Lv.38", "Lv.38"],
  [fighting, fighting]
];
const maria = [
  ["Seadra", "Seadra"],
  [seadraImage, seadraImage],
  ["Lv.37", "Lv.37"],
  [water, water]
];
const tommy = [
  ["Goldeen", "Goldeen", "Seaking", "Seaking", "Seaking"],
  [goldeenImage, goldeenImage, seakingImage, seakingImage, seakingImage],
  ["Lv.35", "Lv.35", "Lv.35", "Lv.35", "Lv.35"],
  [water, water, water, water, water]
];
const finn = [
  ["Starmie"],
  [starmieImage],
  ["Lv.38"],
  [waterPsychic]
];
const sharon = [
  ["Mankey", "Primeape"],
  [mankeyImage, primeapeImage],
  ["Lv.37", "Lv.37"],
  [fighting, fighting]
];
const goon1 = [
  ["Koffing", "Grimer"],
  [koffingImage, grimerImage],
  ["Lv.37", "Lv.37"],
  [poison, poison]
];
const goon2 = [
  ["Koffing"],
  [koffingImage],
  ["Lv.38"],
  [poison]
];
const goon3 = [
  ["Grimer"],
  [grimerImage],
  ["Lv.38"],
  [poison]
];
const paxton = [
  ["Weezing", "Muk"],
  [weezingImage, mukImage],
  ["Lv.39", "Lv.39"],
  [poison, poison]
];
const joyandmeg = [
  ["Clefairy", "Clefairy"],
  [clefairyImage, clefairyImage],
  ["Lv.37", "Lv.37"],
  [normal, normal]
];
const violet = [
  ["Bulbasaur", "Ivysaur", "Ivysaur"],
  [bulbasaurImage, ivysaurImage, ivysaurImage],
  ["Lv.36", "Lv.36", "Lv.36"],
  [grassPoison, grassPoison, grassPoison]
];
const alexis = [
  ["Staryu", "Staryu", "Krabby", "Krabby"],
  [staryuImage, staryuImage, krabbyImage, krabbyImage],
  ["Lv.34", "Lv.34", "Lv.34", "Lv.34"],
  [water, water, water, water]
];
const amira = [
  ["Poliwag", "Poliwhirl", "Poliwag"],
  [poliwagImage, poliwhirlImage, poliwagImage],
  ["Lv.34", "Lv.35", "Lv.34"],
  [water, water, water]
];
const nikki = [
  ["Bellsprout", "Weepinbell"],
  [bellsproutImage, weepinbellImage],
  ["Lv.37", "Lv.37"],
  [grassPoison, grassPoison]
];
//episode26
const naomi = [
  ["Persian", "Ponyta", "Rapidash", "Vulpix", "Ninetales"],
  [persianImage, ponytaImage, rapidashImage, vulpixImage, ninetalesImage],
  ["Lv.42", "Lv.42", "Lv.42", "Lv.42", "Lv.42"],
  [normal, fire, fire, fire, fire]
];
const rolando = [
  ["Raticate", "Ivysaur", "Wartortle", "Charmeleon", "Charizard"],
  [raticateImage, ivysaurImage, wartortleImage, charmeleonImage, charizardImage],
  ["Lv.42", "Lv.42", "Lv.42", "Lv.42", "Lv.42"],
  [normal, grassPoison, water, fire, fireFlying]
];
const daisuke = [
  ["Machoke", "Machop", "Machoke"],
  [machokeImage, machopImage, machokeImage],
  ["Lv.43", "Lv.43", "Lv.43"],
  [fighting, fighting, fighting]
];
const nelson = [
  ["Drowzee", "Hypno", "Kadabra", "Kadabra"],
  [drowzeeImage, hypnoImage, kadabraImage, kadabraImage],
  ["Lv.41", "Lv.41", "Lv.41", "Lv.41"],
  [psychic, psychic, psychic, psychic]
];
const gregory = [
  ["Mr. Mime"],
  [mrMimeImage],
  ["Lv.48"],
  [psychic]
];
const vincent = [
  ["Persian", "Golduck"],
  [persianImage, golduckImage],
  ["Lv.44", "Lv.44"],
  [normal, water]
];
const george = [
  ["Exeggutor", "Sandslash", "Cloyster", "Electrode", "Arcanine"],
  [exeggutorImage, sandslashImage, cloysterImage, electrodeImage, arcanineImage],
  ["Lv.42", "Lv.42", "Lv.42", "Lv.42", "Lv.42"],
  [grassPsychic, ground, waterIce, electric, fire]
];
const dawson = [
  ["Charmeleon", "Lapras", "Lickitung"],
  [charmeleonImage, laprasImage, lickitungImage],
  ["Lv.40", "Lv.40", "Lv.40"],
  [fire, waterIce, normal]
];
const alexa = [
  ["Clefairy", "Jigglypuff", "Persian", "Dewgong", "Chansey"],
  [clefairyImage, jigglypuffImage, persianImage, dewgongImage, chanseyImage],
  ["Lv.42", "Lv.42", "Lv.42", "Lv.42", "Lv.42"],
  [normal, normal, normal, waterIce, normal]
];
const colby = [
  ["Kingler", "Poliwhirl", "Tentacruel", "Seadra", "Blastoise"],
  [kinglerImage, poliwhirlImage, tentacruelImage, seadraImage, blastoiseImage],
  ["Lv.42", "Lv.42", "Lv.42", "Lv.42", "Lv.42"],
  [water, water, waterPoison, water, water]
];
const caroline = [
  ["Bellsprout", "Weepinbell", "Victreebel", "Paras", "Parasect"],
  [bellsproutImage, weepinbellImage, victreebelImage, parasImage, parasectImage],
  ["Lv.42", "Lv.42", "Lv.42", "Lv.42", "Lv.42"],
  [grassPoison, grassPoison, grassPoison, bugGrass, bugGrass]
];
const rayandtyra = [
  ["Nidoking", "Nidoqueen"],
  [nidokingImage, nidoqueenImage],
  ["Lv.45", "Lv.45"],
  [poisonGround, poisonGround]
];
//episode27
const lorelei_1 = [
  ["Dewgong", "Cloyster", "Slowbro"],
  [dewgong, cloyster, slowbro],
  ["Lv.52", "Lv.51", "Lv.52"],
  [waterIce, waterIce, waterPsychic]
];
const lorelei_2 = [
  ["Jynx", "Lapras"],
  [jynx, lapras],
  ["Lv.54", "Lv.54"],
  [icePsychic, waterIce]
];
//episode28
const bruno_1 = [
  ["Onix", "Hitmonchan", "Hitmonlee"],
  [onix, hitmonchan, hitmonlee],
  ["Lv.51", "Lv.53", "Lv.53"],
  [rockGround, fighting, fighting]
];
const bruno_2 = [
  ["Onix", "Machamp"],
  [onix, machamp],
  ["Lv.54", "Lv.56"],
  [rockGround, fighting]
];
//episode29
const agatha_1 = [
  ["Gengar", "Golbat", "Haunter"],
  [gengar, golbat, haunter],
  ["Lv.54", "Lv.54", "Lv.53"],
  [ghostPoison, poisonFlying, ghostPoison]
];
const agatha_2 = [
  ["Arbok", "Gengar"],
  [arbok, gengar],
  ["Lv.56", "Lv.58"],
  [poison, ghostPoison]
];
//episode30
const lance_1 = [
  ["Gyarados", "Dragonair", "Dragonair"],
  [gyarados, dragonair, dragonair],
  ["Lv.56", "Lv.54", "Lv.54"],
  [ghostPoison, poisonFlying, ghostPoison]
];
const lance_2 = [
  ["Aerodactyl", "Dragonite"],
  [aerodactyl, dragonite],
  ["Lv.58", "Lv.60"],
  [poison, ghostPoison]
];
//episode30
const champion_1 = [
  ["Pidgeot", "Alakazam", "Rhydon"],
  [pidgeot, alakazam, rhydon],
  ["Lv.59", "Lv.57", "Lv.59"],
  [normalFlying, psychic, groundRock]
];
const champion_2 = [
  ["Gyarados", "Arcanine", "Venusaur"],
  [gyarados, arcanine, venusaur],
  ["Lv.59", "Lv.61", "Lv.63"],
  [waterFlying, fire, grassPoison]
];

// //episode1
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
populateTable(megan, "megan");
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
populateTable(mary, "mary");
populateTable(lisa, "lisa");
populateTable(lori, "lori");
populateTable(erika, "erika");
//episode14
populateTable(rocketGruntHideout1, "rocketGruntHideout1");
populateTable(rocketGruntHideout2, "rocketGruntHideout2");
populateTable(rocketGruntHideout3, "rocketGruntHideout3");
populateTable(rocketGruntHideout4, "rocketGruntHideout4");
populateTable(rocketGruntHideout5, "rocketGruntHideout5");
populateTable(rocketGruntHideout7, "rocketGruntHideout7");
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
populateTable(ned, "ned");
populateTable(chip, "chip");
populateTable(hank, "hank");
populateTable(elliot, "elliot");
populateTable(giaandjes, "giaandjes");
populateTable(luca, "luca");
populateTable(justin, "justin");
populateTable(andrew, "andrew");
populateTable(alma, "alma");
populateTable(sebastian, "sebastian");
populateTable(susie, "susie");
populateTable(sheila, "sheila");
populateTable(lola, "lola");
populateTable(valerie, "valerie");
populateTable(perry, "perry");
populateTable(gwen, "gwen");
populateTable(robert, "robert");
populateTable(jared, "jared");
populateTable(carter, "carter");
populateTable(mitch, "mitch");
populateTable(marlon, "marlon");
populateTable(beck, "beck");
populateTable(donald, "donald");
populateTable(benny, "benny");
populateTable(kiriandjan, "kiriandjan");
populateTable(gerald, "gerald");
populateTable(lukas, "lukas");
populateTable(malik, "malik");
populateTable(isaac, "isaac");
populateTable(becky, "becky");
populateTable(ronandmya, "ronandmya");
populateTable(celia, "celia");
//episode17
populateTable(yazmin, "yazmin");
populateTable(edwin, "edwin");
populateTable(chester, "chester");
populateTable(kindra, "kindra");
populateTable(olivia, "olivia");
populateTable(grace, "grace");
populateTable(alex, "alex");
populateTable(ernest, "ernest");
populateTable(jacob, "jacob");
populateTable(wilton, "wilton");
populateTable(ramiro, "ramiro");
populateTable(william, "william");
populateTable(corey, "corey");
populateTable(zeek, "zeek");
populateTable(nikolas, "nikolas");
populateTable(raul, "raul");
populateTable(isaiah, "isaiah");
populateTable(virgil, "virgil");
populateTable(billy, "billy");
populateTable(jamal, "jamal");
populateTable(jaxon, "jaxon");
populateTable(lao, "lao");
populateTable(koji, "koji");
populateTable(hideo, "hideo");
populateTable(luke, "luke");
populateTable(camron, "camron");
populateTable(ruben, "ruben");
populateTable(rocketGruntSilph1, "rocketGruntSilph1");
populateTable(jerry, "jerry");
populateTable(rocketGruntSilph2, "rocketGruntSilph2");
populateTable(parker, "parker");
populateTable(rocketGruntSilph3, "rocketGruntSilph3");
populateTable(rocketGruntSilph4, "rocketGruntSilph4");
populateTable(rocketGruntSilph5, "rocketGruntSilph5");
populateTable(joshua, "joshua");
populateTable(rocketGruntSilph6, "rocketGruntSilph6");
populateTable(rocketGruntSilph7, "rocketGruntSilph7");
populateTable(rocketGruntSilph8, "rocketGruntSilph8");
populateTable(taylor, "taylor");
populateTable(rodney, "rodney");
populateTable(rocketGruntSilph9, "rocketGruntSilph9");
populateTable(rocketGruntSilph10, "rocketGruntSilph10");
populateTable(rocketGruntSilph11, "rocketGruntSilph11");
populateTable(travis, "travis");
populateTable(rocketGruntSilph12, "rocketGruntSilph12");
populateTable(rocketGruntSilph13, "rocketGruntSilph13");
populateTable(ed, "ed");
populateTable(rocketGruntSilph14, "rocketGruntSilph14");
populateTable(rocketGruntSilph15, "rocketGruntSilph15");
populateTable(jose, "jose");
populateTable(rocketGruntSilph16, "rocketGruntSilph16");
populateTable(rocketGruntSilph17, "rocketGruntSilph17");
populateTable(beau, "beau");
populateTable(dalton, "dalton");
populateTable(rocketGruntSilph18, "rocketGruntSilph18");
populateTable(rival6_1, "rival6_1");
populateTable(rival6_2, "rival6_2");
populateTable(rocketGruntSilph19, "rocketGruntSilph19");
populateTable(giovanni2, "giovanni2");
//episode18
populateTable(hitoshi, "hitoshi");
populateTable(hideki, "hideki");
populateTable(aaron, "aaron");
populateTable(mike, "mike");
populateTable(koichi, "koichi");
//episode19
populateTable(kayden, "kayden");
populateTable(kirk, "kirk");
populateTable(edgar, "edgar");
populateTable(phil, "phil");
populateTable(shawn, "shawn");
populateTable(koga, "koga");
//episode20
populateTable(cameron, "cameron");
populateTable(johan, "johan");
populateTable(tyron, "tyron");
populateTable(tasha, "tasha");
populateTable(preston, "preston");
populateTable(amanda, "amanda");
populateTable(sabrina, "sabrina");
//episode21
populateTable(richard, "richard");
populateTable(reece, "reece");
populateTable(tony, "tony");
populateTable(david, "david");
populateTable(douglas, "douglas");
populateTable(wade, "wade");
populateTable(ronald, "ronald");
populateTable(lilandian, "lilandian");
populateTable(spencer, "spencer");
populateTable(claude, "claude");
populateTable(nolan, "nolan");
populateTable(jack, "jack");
populateTable(roland, "roland");
populateTable(jerome, "jerome");
populateTable(melissa, "melissa");
populateTable(missy, "missy");
populateTable(dean, "dean");
populateTable(nora, "nora");
populateTable(roger, "roger");
populateTable(irene, "irene");
//episode22
populateTable(johnson, "johnson");
populateTable(arnie, "arnie");
populateTable(braydon, "braydon");
populateTable(ted, "ted");
populateTable(lewis, "lewis");
populateTable(ivan, "ivan");
populateTable(simon, "simon");
//episode23
populateTable(quinn, "quinn");
populateTable(erik, "erik");
populateTable(avery, "avery");
populateTable(ramon, "ramon");
populateTable(derek, "derek");
populateTable(dusty, "dusty");
populateTable(zac, "zac");
populateTable(blaine, "blaine");
//episode24
populateTable(yuji, "yuji");
populateTable(warren, "warren");
populateTable(takashi, "takashi");
populateTable(giovanni3_1, "giovanni3_1");
populateTable(giovanni3_2, "giovanni3_2");
populateTable(rival7_1, "rival7_1");
populateTable(rival7_2, "rival7_2");
//episode25
populateTable(abigail, "abigail");
populateTable(claire, "claire");
populateTable(bryce, "bryce");
populateTable(tanya, "tanya");
populateTable(garrett, "garrett");
populateTable(mikandkia, "mikandkia");
populateTable(hugh, "hugh");
populateTable(shea, "shea");
populateTable(maria, "maria");
populateTable(tommy, "tommy");
populateTable(finn, "finn");
populateTable(sharon, "sharon");
populateTable(goon1, "goon1");
populateTable(goon2, "goon2");
populateTable(goon3, "goon3");
populateTable(paxton, "paxton");
populateTable(joyandmeg, "joyandmeg");
populateTable(violet, "violet");
populateTable(alexis, "alexis");
populateTable(amira, "amira");
populateTable(nikki, "nikki");
//episode26
populateTable(naomi, "naomi");
populateTable(rolando, "rolando");
populateTable(daisuke, "daisuke");
populateTable(nelson, "nelson");
populateTable(gregory, "gregory");
populateTable(vincent, "vincent");
populateTable(george, "george");
populateTable(dawson, "dawson");
populateTable(alexa, "alexa");
populateTable(colby, "colby");
populateTable(caroline, "caroline");
populateTable(rayandtyra, "rayandtyra");
//episode27
populateTable(lorelei_1, "lorelei_1");
populateTable(lorelei_2, "lorelei_2");
//episode28
populateTable(bruno_1, "bruno_1");
populateTable(bruno_2, "bruno_2");
//episode29
populateTable(agatha_1, "agatha_1");
populateTable(agatha_2, "agatha_2");
//episode30
populateTable(lance_1, "lance_1");
populateTable(lance_2, "lance_2");
//finale
populateTable(champion_1, "champion_1");
populateTable(champion_2, "champion_2");

















