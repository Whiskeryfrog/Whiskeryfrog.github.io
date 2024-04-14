<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Whiskeryfrog / Leafgreen Nuzlocke</title>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="dropdown.css">
    <link rel="icon" href="../../images/whiskeryface.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        .parent {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            margin-bottom: 15px;
        }

        .division3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            font-size: 12px;
        }

        .division4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            margin: 1px;
            font-size: 12px;
        }



        @media screen and (max-width: 1200px) {
            .division4 {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

            .div4font {
                font-size: 12px;
            }
        }

        .route1 {
            position: relative;
        }

        .route1::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/route1.png");
            filter: brightness(0.3) blur(3px);
            border-radius: inherit;
            /* Match the border radius of the parent */

        }

        /* Ensure other properties for .route1 div are still applied */
        .route1>* {
            position: relative;
            /* Ensure children remain in the flow */
        }

        .viridian {
            position: relative;
        }

        .viridian::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/viridianforest1.png");
            filter: brightness(0.3) blur(3px);

            /* Adjust the brightness value as needed */
            border-radius: inherit;
            /* Match the border radius of the parent */

        }

        /* Ensure other properties for .route1 div are still applied */
        .viridian>* {
            position: relative;
            /* Ensure children remain in the flow */
        }

        .party {
            position: relative;
        }

        .party::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/party.png");
            filter: brightness(0.5);

            /* Adjust the brightness value as needed */
            border-radius: inherit;
            /* Match the border radius of the parent */

        }

        /* Ensure other properties for .route1 div are still applied */
        .party>* {
            position: relative;
            /* Ensure children remain in the flow */
        }

        .death {
            position: relative;
        }

        .death::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/deaths.png");
            filter: brightness(0.5);

            /* Adjust the brightness value as needed */
            border-radius: inherit;
            /* Match the border radius of the parent */

        }

        /* Ensure other properties for .route1 div are still applied */
        .death>* {
            position: relative;
            /* Ensure children remain in the flow */
        }

        .prof {
            position: relative;
        }

        .prof::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/laboratory.jpeg");
            filter: brightness(0.3) blur(3px);

            /* Adjust the brightness value as needed */
            border-radius: inherit;
            /* Match the border radius of the parent */

        }

        .twobyone {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;

        }


        .prof>* {
            position: relative;
        }

        .route2 {
            position: relative;
        }

        .route2::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/route2.png");
            filter: brightness(0.3) blur(3px);

            /* Adjust the brightness value as needed */
            border-radius: inherit;
            /* Match the border radius of the parent */

        }

        /* Ensure other properties for .route1 div are still applied */
        .route2>* {
            position: relative;
            /* Ensure children remain in the flow */
        }

        .route22 {
            position: relative;
        }

        .route22::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("sprites/route22.png");
            filter: brightness(0.3) blur(3px);
            /* Adjust the brightness value as needed */
            border-radius: inherit;
            /* Match the border radius of the parent */
        }

        /* Ensure other properties for .route1 div are still applied */
        .route22>* {
            position: relative;
            /* Ensure children remain in the flow */
        }


        .smallpadding {
            padding: 1px;
            width: 70%;
            margin: auto;
        }

        .col {
            padding: 10px;
        }

        .dead {
            filter: grayscale(100%);
        }

        .titlealign {
            padding-top: 0;
            text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.93);
            color: white;
        }

        .succenc {
            text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.93);
            color: rgb(26, 222, 26);
            font-weight: bold;
        }

        .failenc {
            text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.93);
            color: rgb(229, 57, 57);
            font-weight: bold;
        }

        .nopad {
            padding: 0;
            margin: 0;
            padding-top: 5px;
            font-weight: bold;
        }

        table.customTable {
            width: 100%;
            border-collapse: collapse;
            border-width: 4px;
            border-color: #F8F8F8;
            border-style: solid;
            color: #000000;
            border-radius: 10px;
            border-collapse: separate;
            color: white;
        }

        @media screen and (max-width: 1200px) {
            table.customTable {
                font-size: 12px;
            }
        }

        @media screen and (max-width: 375px) {
            table.customTable {
                font-size: 9px;
            }
        }

        table.customTable td,
        table.customTable th {
            border-width: 4px;
            border-color: #F8F8F8;
            border-style: solid;
            padding: 1px;
        }

        table tr:last-child td:last-child {
            border-bottom-right-radius: 10px;
        }

        table tr:last-child td:first-child {
            border-bottom-left-radius: 10px;
        }

        table tr:first-child th:first-child,
        table tr:first-child td:first-child {
            border-top-left-radius: 10px
        }

        table tr:first-child th:last-child,
        table tr:first-child td:last-child {
            border-top-right-radius: 10px
        }

        table tr th:first-child,
        table tr td:first-child {
            border-left: 2px solid #B2DBF4;
        }

        table tr:first-child th,
        table tr:first-child td {
            border-top: 2px solid #B2DBF4;
        }

        .alive {
            animation: upAndDown 1s infinite alternate;
            /* Apply the animation */
        }

        @keyframes upAndDown {
            0% {
                top: 0;
                /* Starting position */
            }

            100% {
                top: 10px;
                /* Ending position */
            }
        }
    </style>
</head>

<body>
    <main>
        <div class="topPanel" id="topPage">
            <a href="../../index"><i class="fa-solid fa-house"></i>
                <div class="smallscreen"> Home</div>
            </a>
            <a href="../playthrough"><i class="fa-solid fa-gamepad"></i>
                <div class="smallscreen">Playthroughs</div>

            </a>
            <div class="rightSide">
                <a href="#" class="mode" onclick="darkMode()"><i id="sunMoon" class="fa-solid fa-sun"></i>
                    <div class="smallscreen"> Dark Mode:</div>
                    <span class="change"> Off</span>
                </a>
                <a href="#" id="versionnumber">
                    <div>V</div>
                </a>
            </div>
        </div>
        <div class="containerMainplus">
            <div class="shaper">
                <div class="limiter" style="color: white;">
                    <span class="bigtext">POKEMON LEAFGREEN NUZLOCKE</span>
                </div>
                <div class=" theTop">
                    <header>

                        <div class="dropdown">
                            <button id="dropdownButton" onclick="myFunction()" class="dropbtn"><i class="fas fa-search"></i> Introduction</button>
                            <div id="myDropdown" class="dropdown-content">
                                <input type="text" placeholder="Search episode" id="myInput" onkeyup="filterFunction()">
                                <a href="javascript:void(0)" onclick="changeTab('Introduction')">Introduction</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 1')">Episode 1 - This series
                                    will most likely be cancelled halfway through</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 2')">Episode 2 - Very
                                    Loooooooooooooooooooooooooooooooooooooooooooong forest</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 3')">Episode 3 - Good thing I
                                    started with Squirtle</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 4')">Episode 4 - I Sped Up Most
                                    Pokémon Battles in this Episode</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 5')">Episode 5 - Look Closely
                                    at the Thumbnail</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 6')">Episode 6 - Not Too
                                    Thankful that my Starter is Squirtle</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 7')">Episode 7 - Vermillion
                                    dollars</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 8')">Episode 8 - That Time I
                                    "GAME ENDED" my Rival's Raticate</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 9')">Episode 9 - Normal Rat
                                    V.S. Electric Rat</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 10')">Episode 10 - Trainer
                                    Beatdown</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 11')">Episode 11 - Dank
                                    Tunnel</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 12')">Episode 12 - Nothing
                                    Much, Just Trainers</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 13')">Episode 13 - This Gym is
                                    Surprisingly Tough Without A Decent Fire
                                    Type</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 14')">Episode 14 - Good Thing
                                    This isn't Twitch Plays Pokémon</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 15')">Episode 15 - Can Pokémon
                                    Talk when They're Dead?</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 16')">Episode 16 - Trainer
                                    Mayhem</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 17')">Episode 17 - A Disastrous
                                    RAID</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 18')">Episode 18 - Dojo
                                    Danger</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 19')">Episode 19 - Ninja
                                    Saga</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 20')">Episode 20 - SaBRUHna</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 21')">Episode 21 - "LOOK GUYS I
                                    DID MISSINGNO GLITCH IN POKÉMON LEAFGREEN"</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 22')">Episode 22 - GOING INSIDE
                                    AN ABANDONED MANSION AT 3:00am NOT CLICKBAIT</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 23')">Episode 23 - I Blaine
                                    Myself for this Channel's Irrelevance</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 24')">Episode 24 - I, (Giorno)
                                    Giovanni, Have a Dream</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 25')">Episode 25 - That One
                                    Beach Episode of an Anime</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 26')">Episode 26 - Road to
                                    Victory</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 27')">Episode 27 - Lorelei is
                                    Surprisingly Tough</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 28')">Episode 28 - Bruh, no</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 29')">Episode 29 - AgaBRUH</a>
                                <a href="javascript:void(0)" onclick="changeTab('Episode 30')">Episode 30 - "You don't
                                    get to be Champion of the Pokemon League"</a>
                                <a href="javascript:void(0)" onclick="changeTab('Finale')">FINALE - FINALLY! I FINISHED
                                    A SERIES IN THIS CHANNEL!</a>

                            </div>
                        </div>

                    </header>
                </div>
                <div id="Introduction" class="tabcontent">
                    <span class="bigtext slightlysmall" style="color: white;">Introduction to the Playthrough</span>
                    <img src="../../images/leafgreenbanner.png" class="bannerimage" alt="pokemon leafgreen nuzlocke logo" loading="lazy">

                    <p class="textjustify" style="color: white;">This series was created during the pandemic when I had
                        nothing better to do,
                        so I decided to play
                        and record my attempt at a Nuzlocke challenge on a Pokémon LeafGreen playthrough.</p>
                    <p class="textjustify" style="color: white;">In this series, you will see details such as team
                        composition, wild
                        encounters, and trainers, as
                        well as opinions and retrospectives that I have of my playthrough of this challenge per episode.
                    </p>
                    <span class="bigtext slightlysmall" style="color: white;">Origins</span>
                    <div class="twobyone">
                        <div>
                            <p style="color: white;">
                                <i class="fa-solid fa-gift"></i> = Gift Pokemon
                            </p>
                            <p style="color: white;">
                                <i class="fa-solid fa-seedling"></i> = Grass Encounter
                            </p>
                            <p style="color: white;">
                                <i class="fa-solid fa-water"></i> = Surfing Encounter
                            </p>
                            <p style="color: white;">
                                <i class="fa-solid fa-fish"></i> = Fishing Encounter
                            </p>
                            <p style="color: white;">
                                <i class="fa-solid fa-mountain"></i> = Cave Encounter
                            </p>
                        </div>
                        <div>
                            <p style="color: white;">
                                <i class="fa-solid fa-crown"></i> = Legendary Encounter
                            </p>
                            <p style="color: white;">
                                <span class="succenc">Green Name</span> = Successful Encounter
                            </p>
                            <p style="color: white;">
                                <span class="failenc">Red Name</span> = Failed Encounter
                            </p>
                            <p style="color: white;">
                                Normal Name = Not Encountered
                            </p>
                            <p style="color: white;">
                                <i class="fa-solid fa-flag"></i> Name = Already Caught
                            </p>
                        </div>

                    </div>
                    <div class="containerMain">
                        <span class="bigtext clickable" onclick="toggleElement('displayrules')">Rules for the Playthrough</span>
                        <div id="displayrules" class="rules-content" style="height: 0;">
                            <hr class="linebreaker2">
                            <ul>
                                <li>A fainted Pokémon is considered dead and must be boxed or released forever.</li>
                                <li>You can only catch the first Pokemon encounter in any route or area. (I will be
                                    playing with dupes clause in which if you already have that Pokémon you no longer
                                    need to catch it in order for you to not get a duplicate.)</li>
                                <li>(Optional) Nickname your Pokémon</li>
                            </ul>
                        </div>
                    </div>

                    <div class="containerMain" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displayextrarules')">Extra Rules</span>
                        <div id="displayextrarules" class="rules-content" style="height: 0;">
                            <hr class="linebreaker2">
                            <ul>
                                <li>No use of Healing items during battle.</li>
                                <li>The game must be in "SET" mode.</li>
                                <li>I cannot deposit a Pokémon unless it is dead.</li>
                                <li> A level limit is implemented before battling a gym.
                                    <ul>
                                        <li>Brock - Lv.14</li>
                                        <li>Misty - Lv.21</li>
                                        <li>Lt. Surge - Lv.24</li>
                                        <li>Erika - Lv.29</li>
                                        <li>Koga - Lv.43</li>
                                        <li>Sabrina - Lv.43</li>
                                        <li>Blaine - Lv.47</li>
                                        <li>Giovanni - Lv.50</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="Episode 1" class="tabcontent" style="display: none;">
                    <span class="bigtext slightlysmall" style="color: white;">"Episode 1 - This series
                        will most likely be cancelled halfway through"</span>

                    <div class="subcontainer youtubelist" style="margin-top: 10px; ">
                        <iframe src="https://www.youtube.com/embed/z7nrU5ErHpk?si=uu3Tt7jmMZlOqNx7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p class="textjustify" style="color: white;">This is the first episode of the playthrough and there
                        is really nothing too special with it other than this is where I choose my starter and
                        encountered a couple of early pokemon that may or may not help me in the future.</p>

                    <span class="bigtext slightlysmall" style="color: white;">All possible encounters in this
                        episode</span>
                    <div class="row">
                        <div class="col containerMain prof">
                            <div class="limiter">
                                <span class="bigtext slightlysmall titlealign">Professor Oak's Lab
                                </span>

                                <p class="textjustify titlealign" style="color: #FFFDD0;">In this Nuzlocke challenge,
                                    although not explicitly stated in the rules, my starter Pokémon is determined by my
                                    ID number. If the last digit of my ID number is 1-3, I choose Bulbasaur; 4-6,
                                    Charmander; and 7-9, Squirtle. It's one of the most crucial decisions in the game.
                                </p>

                                <div style="overflow-x: auto;">
                                    <table border="1" class="customTable">
                                        <tbody>
                                            <tr>
                                                <td>Bulbasaur <i class="fa-solid fa-gift"></i>
                                                </td>
                                                <td>Charmander <i class="fa-solid fa-gift"></i></td>
                                                <td class="nopad succenc">Squirtle <i class="fa-solid fa-gift"></i></td>
                                            </tr>
                                            <tr>
                                                <td><img class="nopad" src="sprites/firered-leafgreen/1.png"></td>
                                                <td><img src="sprites/firered-leafgreen/4.png"></td>
                                                <td> <img src="sprites/firered-leafgreen/7.png"></td>
                                            </tr>
                                            <tr>
                                                <td>Gift - Lv.5</td>
                                                <td>Gift - Lv.5</td>
                                                <td>Gift - Lv.5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div class="col containerMain route1">
                            <div class="limiter">
                                <span class="bigtext slightlysmall titlealign ">Route 1
                                </span>
                                <p class="textjustify titlealign" style="color: #FFFDD0;">Nothing too special in this
                                    route. All of
                                    the Pokemon available here are viable in their own ways, so, encountering any of it
                                    is not a big deal.</p>
                                <div style="overflow-x: auto;">
                                    <table border="1" class="customTable">
                                        <tbody>
                                            <tr>
                                                <td class="nopad succenc">Pidgey <i class="fa-solid fa-seedling"></i>
                                                </td>
                                                <td>Rattata <i class="fa-solid fa-seedling"></i></td>
                                            </tr>
                                            <tr>
                                                <td><img class="nopad" src="sprites/firered-leafgreen/16.png"></td>
                                                <td><img src="sprites/firered-leafgreen/19.png"></td>
                                            </tr>
                                            <tr>
                                                <td>50% - Lv.2-5</td>
                                                <td>50% - Lv.2-4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col containerMain route2">
                            <div class="limiter">
                                <span class="bigtext slightlysmall titlealign  ">Route 2
                                </span>
                                <p class="textjustify titlealign" style="color: #FFFDD0;">There are two parts to this
                                    route, one at the beginning and one at the end of viridian forest. You can count
                                    them as separate but I'm counting it as just one since the encounters are similar.
                                </p>
                                <div style="overflow-x: auto;">
                                    <table border="1" class="customTable">
                                        <tbody>
                                            <tr>
                                                <td><i class="fa-solid fa-flag"></i> Pidgey <i class="fa-solid fa-seedling"></i></td>
                                                <td>Rattata <i class="fa-solid fa-seedling"></i></td>
                                                <td>Caterpie <i class="fa-solid fa-seedling"></i></td>
                                                <td class="nopad succenc">Weedle <i class="fa-solid fa-seedling"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><img class="nopad" src="sprites/firered-leafgreen/16.png"></td>
                                                <td> <img class="nopad" src="sprites/firered-leafgreen/19.png"></td>
                                                <td><img src="sprites/firered-leafgreen/10.png"></td>
                                                <td><img src="sprites/firered-leafgreen/13.png"></td>
                                            </tr>
                                            <tr>
                                                <td>45% - Lv.2-5</td>
                                                <td>45% - Lv.2-5</td>
                                                <td>5% - Lv.4-5</td>
                                                <td>5% - Lv.4-5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col containerMain route22">
                            <div class="limiter">
                                <span class="bigtext slightlysmall titlealign ">Route 22
                                </span>
                                <p class="textjustify titlealign" style="color: #FFFDD0;">Almost all of the encounters
                                    here are decent but Mankey is really the one that you want to get in this route
                                    especially if you chose Charmander.</p>
                                <div style="overflow-x: auto;">
                                    <table border="1" class="customTable">
                                        <tbody>
                                            <tr>
                                                <td class="nopad succenc">Rattata <i class="fa-solid fa-seedling"></i>
                                                </td>
                                                <td>Mankey <i class="fa-solid fa-seedling"></i></td>
                                                <td>Spearow <i class="fa-solid fa-seedling"></i></td>
                                            </tr>
                                            <tr>
                                                <td><img class="nopad" src="sprites/firered-leafgreen/19.png"></td>
                                                <td><img src="sprites/firered-leafgreen/56.png"></td>
                                                <td> <img src="sprites/firered-leafgreen/21.png"></td>
                                            </tr>
                                            <tr>
                                                <td>45% - Lv.2-5</td>
                                                <td>45% - Lv.2-5</td>
                                                <td>10% - Lv.3-5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col containerMain viridian">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign ">Viridian Forest
                            </span>
                            <p class="textjustify titlealign" style="color: #FFFDD0;">The encounters are just mostly bugs but Pikachu is probably the best one to encounter however it is quite rare.</p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td class="nopad succenc">Caterpie <i class="fa-solid fa-seedling"></i>
                                            </td>
                                            <td><i class="fa-solid fa-flag"></i> Weedle <i class="fa-solid fa-seedling"></i></td>
                                            <td>Metapod <i class="fa-solid fa-seedling"></i></td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                            <td><img src="sprites/firered-leafgreen/13.png"></td>
                                            <td> <img src="sprites/firered-leafgreen/11.png"></td>
                                        </tr>
                                        <tr>
                                            <td>40% - Lv.3-5</td>
                                            <td>40% - Lv.3-5</td>
                                            <td>10% - Lv.4-6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Kakuna <i class="fa-solid fa-seedling"></i>
                                            </td>
                                            <td>Pikachu <i class="fa-solid fa-seedling"></i></td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/14.png"></td>
                                            <td><img src="sprites/firered-leafgreen/25.png"></td>
                                        </tr>
                                        <tr>
                                            <td>5% - Lv.5</td>
                                            <td>5% - Lv.3-5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <span class="bigtext slightlysmall" style="color: white;">All trainers fought in this episode</span>
                    <div class="col containerMain prof">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign  ">Professor Oak's Lab
                            </span>
                            <span class="bigtext small titlealign  ">TOADMAN (Rival) - <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Okay
                            </span>
                            <img src="sprites/Blue1.webp">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">This will be the very first battle that you will ever do in this challenge and if you ask me, if you want, you can not consider this battle part of the challenge since technically the challenge will only start once you can start catch Pokemon in the wild so losing here does not really matter (If you want to at least).
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Bulbasaur</td>

                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/1.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.5</td>
                                        </tr>
                                        <tr>
                                            <td>Grass / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!--
                    <div class="col containerMain route22">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign  ">Route 22
                            </span>
                            <span class="bigtext slightlysmall titlealign  ">TOADMAN (Rival) - <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Easy
                            </span>
                            <img src="sprites/Blue1.webp">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">This is the second time you will challenge your rival in a battle and is completely optional since you can just go straight ahead of Viridian forest and move on with your adventure. This fight is not that hard if you prepare accordingly and caught some Pokemon that can help with your rival's two party members.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Pidgey</td>
                                            <td>Bulbasaur</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/16.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/1.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.9</td>
                                            <td>Lv.9</td>
                                        </tr>
                                        <tr>
                                            <td>Normal / Flying</td>
                                            <td>Grass / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>-->
                    <div class="containerMain party" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displayparty1')">Party at the end of the
                            Episode</span>
                        <div id="displayparty1" class="rules-content" style="height: 0;">
                            <div style="overflow-x: auto; overflow-y: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>GILAMONSTR</td>
                                            <td>LIZARD</td>
                                            <td>NEWT</td>
                                            <td>CAIMAN</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/7.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/13.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/19.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/10.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.9</td>
                                            <td>Lv.4</td>
                                            <td>Lv.3</td>
                                            <td>Lv.4</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td>Bug / Poison</td>
                                            <td>Normal</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="containerMain death" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displaydeath1')"><i class="fa-solid fa-skull"></i>
                            Death/s <i class="fa-solid fa-skull"></i> [Spoilers]</span>
                        <div id="displaydeath1" class="rules-content" style="height: 0;">
                            <div style="overflow-x: auto; overflow-y: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>ALLIGATOR</td>

                                        </tr>
                                        <tr>
                                            <td><img class="nopad dead" src="sprites/firered-leafgreen/16.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Episode 1</td>
                                        </tr>
                                        <tr>
                                            <td>Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Episode 2" class="tabcontent" style="display: none;">
                    <span class="bigtext slightlysmall" style="color: white;">"Pokémon LeafGreen Nuzlocke - Episode 2 - Very Looooooooong forest"</span>
                    <div class="subcontainer youtubelist" style="margin-top: 10px;">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/99NT8e4OhVY?si=9vKslRUM4bvhT4z_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p class="textjustify" style="color: white;">This is the first episode of the playthrough and there
                        is really nothing too special with it other than this is where I choose my starter and
                        encountered a couple of early pokemon that may or may not help me in the future.</p>

                    <span class="bigtext slightlysmall" style="color: white;">All possible encounters in this
                        episode</span>
                    <div class="col containerMain">
                        <div class="limiter">
                            <span class="bigtext slightlysmall">No new encounter for this episode.
                            </span>
                        </div>
                    </div>
                    <span class="bigtext slightlysmall" style="color: white;">All trainers fought in this episode</span>

                    <div class="col containerMain route22">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign  ">Route 22
                            </span>
                            <span class="bigtext slightlysmall titlealign  ">TOADMAN (Rival) - <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Easy
                            </span>
                            <img src="sprites/Blue1.webp">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">This is the second time you will challenge your rival in a battle and is completely optional since you can just go straight ahead of Viridian forest and move on with your adventure. This fight is not that hard if you prepare accordingly and caught some Pokemon that can help with your rival's two party members.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Pidgey</td>
                                            <td>Bulbasaur</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/16.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/1.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.9</td>
                                            <td>Lv.9</td>
                                        </tr>
                                        <tr>
                                            <td>Normal / Flying</td>
                                            <td>Grass / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <div class="col containerMain viridian">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign  ">Viridian Forest
                            </span>
                            <span class="bigtext slightlysmall titlealign  ">Rick - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">It's just bugs, if you chose charmander this would be a piece of cake but if you chose the other two then it is still very easy. Just don't forget your antidotes, you're gonna need it.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Weedle</td>
                                            <td>Caterpie</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.6</td>
                                            <td>Lv.6</td>
                                        </tr>
                                        <tr>
                                            <td>Bug / Poison</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Doug - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">You really need to that antidote now.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Weedle</td>
                                            <td>Kakuna</td>
                                            <td>Weedle</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/14.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                        </tr>
                                        <tr>
                                            <td>Bug / Poison</td>
                                            <td>Bug / Poison</td>
                                            <td>Bug / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Anthony - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">EZ, just press A.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Caterpie</td>
                                            <td>Caterpie</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.7</td>
                                            <td>Lv.8</td>
                                        </tr>
                                        <tr>
                                            <td>Bug</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Charlie - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">Even easier, but with more EXP because of Metapods.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Metapod</td>
                                            <td>Caterpie</td>
                                            <td>Metapod</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/11.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/11.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                        </tr>
                                        <tr>
                                            <td>Bug</td>
                                            <td>Bug</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Sammy - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">Just a Weedle, after all of the battles you went through.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Weedle</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.9</td>
                                        </tr>
                                        <tr>
                                            <td>Bug / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="containerMain party" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displayparty2')">Party at the end of the
                            Episode</span>
                        <div id="displayparty2" class="rules-content" style="height: 0;">
                            <div style="overflow-x: auto; overflow-y: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>GILAMONSTR</td>
                                            <td>LIZARD</td>
                                            <td>NEWT</td>
                                            <td>CAIMAN</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/7.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/15.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/19.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/12.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.12</td>
                                            <td>Lv.10</td>
                                            <td>Lv.10</td>
                                            <td>Lv.10</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td>Bug / Poison</td>
                                            <td>Normal</td>
                                            <td>Bug / Flying</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="containerMain death" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displaydeath2')"><i class="fa-solid fa-skull"></i>
                            Death/s <i class="fa-solid fa-skull"></i> [Spoilers]</span>
                        <div id="displaydeath2" class="rules-content" style="height: 0;">
                            <div style="overflow-x: auto; overflow-y: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>ALLIGATOR</td>

                                        </tr>
                                        <tr>
                                            <td><img class="nopad dead" src="sprites/firered-leafgreen/16.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Episode 1</td>
                                        </tr>
                                        <tr>
                                            <td>Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Episode 3" class="tabcontent" style="display: none;">
                    <span class="bigtext slightlysmall" style="color: white;">"Pokémon LeafGreen Nuzlocke - Episode 2 - Very Looooooooong forest"</span>
                    <div class="subcontainer youtubelist" style="margin-top: 10px;">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/99NT8e4OhVY?si=9vKslRUM4bvhT4z_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <p class="textjustify" style="color: white;">This is the first episode of the playthrough and there
                        is really nothing too special with it other than this is where I choose my starter and
                        encountered a couple of early pokemon that may or may not help me in the future.</p>

                    <span class="bigtext slightlysmall" style="color: white;">All possible encounters in this
                        episode</span>
                    <div class="col containerMain">
                        <div class="limiter">
                            <span class="bigtext slightlysmall">No new encounter for this episode.
                            </span>
                        </div>
                    </div>
                    <span class="bigtext slightlysmall" style="color: white;">All trainers fought in this episode</span>

                    <div class="col containerMain route22">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign  ">Route 22
                            </span>
                            <span class="bigtext slightlysmall titlealign  ">TOADMAN (Rival) - <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Easy
                            </span>
                            <img src="sprites/Blue1.webp">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">This is the second time you will challenge your rival in a battle and is completely optional since you can just go straight ahead of Viridian forest and move on with your adventure. This fight is not that hard if you prepare accordingly and caught some Pokemon that can help with your rival's two party members.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Pidgey</td>
                                            <td>Bulbasaur</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/16.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/1.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.9</td>
                                            <td>Lv.9</td>
                                        </tr>
                                        <tr>
                                            <td>Normal / Flying</td>
                                            <td>Grass / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <div class="col containerMain viridian">
                        <div class="limiter">
                            <span class="bigtext slightlysmall titlealign  ">Viridian Forest
                            </span>
                            <span class="bigtext slightlysmall titlealign  ">Rick - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">It's just bugs, if you chose charmander this would be a piece of cake but if you chose the other two then it is still very easy. Just don't forget your antidotes, you're gonna need it.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Weedle</td>
                                            <td>Caterpie</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.6</td>
                                            <td>Lv.6</td>
                                        </tr>
                                        <tr>
                                            <td>Bug / Poison</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Doug - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">You really need to that antidote now.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Weedle</td>
                                            <td>Kakuna</td>
                                            <td>Weedle</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/14.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                        </tr>
                                        <tr>
                                            <td>Bug / Poison</td>
                                            <td>Bug / Poison</td>
                                            <td>Bug / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Anthony - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">EZ, just press A.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Caterpie</td>
                                            <td>Caterpie</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.7</td>
                                            <td>Lv.8</td>
                                        </tr>
                                        <tr>
                                            <td>Bug</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Charlie - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">Even easier, but with more EXP because of Metapods.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Metapod</td>
                                            <td>Caterpie</td>
                                            <td>Metapod</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/11.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/10.png"></td>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/11.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                            <td>Lv.7</td>
                                        </tr>
                                        <tr>
                                            <td>Bug</td>
                                            <td>Bug</td>
                                            <td>Bug</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br><br>
                            <span class="bigtext slightlysmall titlealign  ">Sammy - <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> Extremely Easy
                            </span>
                            <img src="sprites/7.png">
                            <p class="textjustify titlealign" style="color: #FFFDD0;">Just a Weedle, after all of the battles you went through.
                            </p>
                            <div style="overflow-x: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>Weedle</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad" src="sprites/firered-leafgreen/13.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.9</td>
                                        </tr>
                                        <tr>
                                            <td>Bug / Poison</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="containerMain party" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displayparty2')">Party at the end of the
                            Episode</span>
                        <div id="displayparty2" class="rules-content" style="height: 0;">
                            <div style="overflow-x: auto; overflow-y: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>GILAMONSTR</td>
                                            <td>LIZARD</td>
                                            <td>NEWT</td>
                                            <td>CAIMAN</td>
                                        </tr>
                                        <tr>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/7.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/15.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/19.png"></td>
                                            <td><img class="nopad alive" src="sprites/firered-leafgreen/12.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Lv.12</td>
                                            <td>Lv.10</td>
                                            <td>Lv.10</td>
                                            <td>Lv.10</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td>Bug / Poison</td>
                                            <td>Normal</td>
                                            <td>Bug / Flying</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="containerMain death" style="margin-top: 18px;">
                        <span class="bigtext clickable" onclick="toggleElement('displaydeath2')"><i class="fa-solid fa-skull"></i>
                            Death/s <i class="fa-solid fa-skull"></i> [Spoilers]</span>
                        <div id="displaydeath2" class="rules-content" style="height: 0;">
                            <div style="overflow-x: auto; overflow-y: auto;">
                                <table border="1" class="customTable">
                                    <tbody>
                                        <tr>
                                            <td>ALLIGATOR</td>

                                        </tr>
                                        <tr>
                                            <td><img class="nopad dead" src="sprites/firered-leafgreen/16.png"></td>
                                        </tr>
                                        <tr>
                                            <td>Episode 1</td>
                                        </tr>
                                        <tr>
                                            <td>Died due to a wild poisoned Pidgey that is almost dead yet somehow landed a critical hit.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js" integrity="sha512-NQfB/bDaB8kaSXF8E77JjhHG5PM6XVRxvHzkZiwl3ddWCEPBa23T76MuWSwAJdMGJnmQqM0VeY9kFszsrBEFrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../../js/app.js"></script>
    <script src="changetab.js?v=1.0"></script>
</body>

</html>