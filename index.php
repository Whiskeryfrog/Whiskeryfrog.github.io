<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Whiskeryfrog</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/whiskeryface.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <main>
        <div class="topPanel" id="topPage">
            <a href="index"><i class="fa-solid fa-house"></i>
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
                <!--
                <div class="containerMain theTop">
                    <header>
                        <div class="topPanel1">
                            <div class="hamburger" onclick="openNav()">
                                <a href="#">
                                    <i class="fa-solid fa-bars" id="hamburgerIcon"></i>
                                </a>
                            </div>
                            <div class="mainNavigator">
                                <a href="index.html" class="navDash">Home</a>
                                <a href="https://www.youtube.com/channel/UCWQhZn7Z-zg7VI_wpOLNKvA" target="_blank"
                                    class="navDash">My YouTube Channel</a>
                                <a href="https://odysee.com/@Whiskeryfrog:5" target="_blank" class="navDash">My Odysee
                                    Page</a>
                            </div>

                        </div>
                        <div id="mySidenav" class="sidenav">
                            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Clients</a>
                            <a href="#">Contact</a>
                        </div>
                    </header>
                </div>
-->
                <div class="limiter" style="color: white;">
                    <span class="bigtext">Hello and welcome to my Website</span>
                    <p>A place where you can see walkthroughs of games
                        that I have
                        played on my
                        YouTube channel and possibly use them as a guide, as well as updates to this website.</p>
                </div>
                <div class="row">
                    <a href="playthroughs/playthrough" class="anchorgroup col">
                        <div class="col row containerMain">

                            <div class="limiter">
                                <span class="bigtext">PLAYTHROUGH
                                </span>
                                <hr class="linebreaker2">

                                <p>Learn all about the games that I have featured on my
                                    YouTube
                                    channel and maybe use them as
                                    guides for
                                    your playthrough.
                                </p>
                            </div>


                        </div>
                    </a>
                    <a href="website/websiteupdate" class="anchorgroup col">
                        <div class="col row containerMain">
                            <div class="limiter">
                                <span class="bigtext">WEBSITE</span>
                                <hr class="linebreaker2">

                                <p>View every single update and new features that are being added to this
                                    website.</p>

                            </div>
                        </div>
                    </a>
                </div>
                <hr class="linebreaker">
                <div class="limiter" style="color: white; ">
                    <span class="bigtext">My latest video on YouTube</span>
                </div>

                <div class="subcontainer youtubelist">
                    <iframe src="https://www.youtube.com/embed?listType=playlist&list=UUWQhZn7Z-zg7VI_wpOLNKvA" loading="lazy">
                    </iframe>
                </div>
                <div class="subscriber-section">
                    <div class="youtube-button">
                        <i class="fa-brands fa-youtube"></i>
                        <p><span class="subscriber-count" id="subCount"></span>subscribers</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!--
    <a href="#topPage" id="arrowButton" class="arrowButton">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
-->
    <<<<<<< HEAD <?php
                    $youtubeKey = 'AIzaSyBzkU9WvhdbXkDFPW1tvIi2HB94EtaNdgI';
                    $youtubeUser = 'UCWQhZn7Z-zg7VI_wpOLNKvA';
                    // Make the API request
                    $response = file_get_contents("https://www.googleapis.com/youtube/v3/channels?part=statistics&id={$youtubeUser}&key={$youtubeKey}");

                    // Decode the JSON response
                    $data = json_decode($response, true);

                    // Extract the subscriber count
                    $subCount = isset($data['items'][0]['statistics']['subscriberCount']) ? $data['items'][0]['statistics']['subscriberCount'] : 'N/A';
                    ?> <script>
        const subCountElement = document.getElementById('subCount');
        subCountElement.innerHTML = "<?php echo $subCount; ?>";
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js" integrity="sha512-NQfB/bDaB8kaSXF8E77JjhHG5PM6XVRxvHzkZiwl3ddWCEPBa23T76MuWSwAJdMGJnmQqM0VeY9kFszsrBEFrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="js/app.js"></script>
</body>

</html>