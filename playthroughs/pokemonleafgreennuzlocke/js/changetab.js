var currentSelection = 'Episodes'; // Initially set the button text to 'Episodes'

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function glowButton(){
    const glowButton = document.getElementById("dropdownButton");
    glowButton.classList.add("glowinganim");
    setTimeout(function()
    {
        glowButton.classList.remove("glowinganim")
    }, 5000);
}

function glowShowButton(){
    const glowButton = document.getElementById("showVideo");
    glowButton.classList.add("glowinganim");
    setTimeout(function()
    {
        glowButton.classList.remove("glowinganim")
    }, 5000);
}

function glowHideButton(){
    const glowButton = document.getElementById("hideVideo");
    glowButton.classList.add("glowinganim");
    setTimeout(function()
    {
        glowButton.classList.remove("glowinganim")
    }, 5000);
}

function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function changeTab(selectedValue) {
    var tabContent = document.getElementsByClassName("tabcontent");

    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(selectedValue).style.display = "block";
    document.getElementById("myDropdown").classList.remove("show"); // Hide dropdown after selection

    // Update dropdown button text with selected option
    currentSelection = selectedValue;
    document.getElementById("dropdownButton").textContent = currentSelection;
}

function toggleElement(elementId) {
    const element = document.getElementById(elementId);

    if (element.offsetHeight === 0) {
        element.style.height = element.scrollHeight + "px";
    } else {
        element.style.height = 0;
    }
}

// Function to show videos
function showVideo() {
    const videoscreens = document.querySelectorAll(".youtubevideo");
    videoscreens.forEach(videoscreen => {
        videoscreen.style.display = "block";
    });
    localStorage.setItem('videosVisible', 'true');
}

// Function to hide videos
function hideVideo() {
    const videoscreens = document.querySelectorAll(".youtubevideo");
    videoscreens.forEach(videoscreen => {
        videoscreen.style.display = "none";
    });
    localStorage.setItem('videosVisible', 'false');
}

// Function to set video visibility based on saved state
function setVideoVisibility() {
    const videosVisible = localStorage.getItem('videosVisible');
    const videoscreens = document.querySelectorAll(".youtubevideo");

    if (videosVisible === 'true') {
        videoscreens.forEach(videoscreen => {
            videoscreen.style.display = "block";
        });
    } else {
        videoscreens.forEach(videoscreen => {
            videoscreen.style.display = "none";
        });
    }
}

document.getElementById("showVideo").addEventListener("click", showVideo);
document.getElementById("hideVideo").addEventListener("click", hideVideo);

// Call the function to set the visibility when the page loads
document.addEventListener('DOMContentLoaded', setVideoVisibility);

