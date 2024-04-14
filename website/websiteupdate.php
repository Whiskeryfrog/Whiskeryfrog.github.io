<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Whiskeryfrog / Website Updates</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" href="../images/whiskeryface.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        .anchorgroup {
            margin-top: 20px;
        }

        .containerMain {
            margin: 0px 50px 20px 50px;
        }

        @media (max-width: 1000px) {
            .containerMain {
                margin: 20px 20px 20px 20px;
            }
        }

        .smaller {
            font-size: 15px;
        }
    </style>
</head>

<body>
    <main>
        <div class="topPanel" id="topPage">
            <a href="../index"><i class="fa-solid fa-house"></i>
                <div class="smallscreen"> Home</div>
            </a>
            <a href="https://www.youtube.com/channel/UCWQhZn7Z-zg7VI_wpOLNKvA" target="_blank"><i class="fa-brands fa-youtube"></i>
                <div class="smallscreen">My YouTube Channel</div>

            </a>
            <a href="https://odysee.com/@Whiskeryfrog:5" target="_blank"><i class="fa-brands fa-odysee"></i>
                <div class="smallscreen"> My Odysee Page</div>
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
                    <span class="bigtext">WEBSITE UPDATES</span>
                </div>
                <div class=" theTop">
                    <header>
                        <div class="topPanel1">
                            <input type="text" id="searchInput" placeholder="Search version">
                            <select id="sortSelect" class="my-select-menu">
                                <option value="newest">Newest to Oldest</option>
                                <option value="oldest">Oldest to Newest</option>
                            </select>
                        </div>
                    </header>
                </div>
                <div id="anchorgroupContainer">
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.2.1 - More content</span>
                            <span class="bigtext smaller">April 11, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>More leafgreen CONTENT!</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.2.0 - The PHP change</span>
                            <span class="bigtext smaller">April 6, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Changed the structure of the whole website to PHP in order to use server-side features for certain things on the website.</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.1.6 - The Table question</span>
                            <span class="bigtext smaller">April 6, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Changed the Pokemon cards within leafgreen to tables for a cleaner look</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.1.5 - LeafgreenProgress</span>
                            <span class="bigtext smaller">April 4, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Finished the introduction to Pokemon Leafgreen Nuzlocke section</li>
                                <li>Decent progress with episode 1 of Pokemon LF Nuzlocke such as adding possible
                                    encounters within an episode.</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.1.4</span>
                            <span class="bigtext smaller">April 2, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Added Pokemon Leafgreen Nuzlocke section</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.1.3</span>
                            <span class="bigtext smaller">April 1, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Changed the border-radius of the images within the cards in the playthrough secion
                                </li>
                                <li>Added an animated gif to the cards in the playthrough section when hovered over</li>
                                <li>Added search function within the playthrough section</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.1.2</span>
                            <span class="bigtext smaller">March 31, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Added functionality to the walkthrough card</li>
                                <li>Added images to specific cards in the walkthrough page</li>
                                <li>Changed the box shadow for each card</li>
                            </ul>
                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class="containerMain">
                            <span class="bigtext">Update 0.1.1</span>
                            <span class="bigtext smaller">March 13, 2024</span>
                            <hr class="linebreaker2">
                            <ul>
                                <li>Added dark theme mode for the website</li>
                                <li>The Website card in the landing page now has a function which takes you to a page
                                    where updates for the website will be shown</li>
                                <li>Basic landing page functions</li>
                            </ul>
                        </div>
                    </a>

                    <a href="#" class="anchorgroup col" id="noupdate">
                        <div class="containerMain">
                            <span class="bigtext">No Update available</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </main>
    <!--
    <a href="#topPage" id="arrowButton" class="arrowButton">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js" integrity="sha512-NQfB/bDaB8kaSXF8E77JjhHG5PM6XVRxvHzkZiwl3ddWCEPBa23T76MuWSwAJdMGJnmQqM0VeY9kFszsrBEFrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/app.js"></script>
</body>

</html>