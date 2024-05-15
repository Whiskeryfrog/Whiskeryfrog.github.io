//window.onscroll = function() {stickyNav()};
// Set a cookie with SameSite attribute
document.cookie = "cookieName=cookieValue; SameSite=Strict";

var navbar = document.getElementsByClassName("topPanel1")[0];
const version = document.getElementById("versionnumber");

version.textContent = "V0.3.0";
/*var sticky = navbar.offsetTop;*/

/*
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/

/*
document.addEventListener('DOMContentLoaded', function() {
    const arrowButton = document.getElementById('arrowButton');
    const threshold = 100; // Distance from the bottom of the page to show the arrow button
  
    function showArrowButton() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const bodyHeight = document.body.offsetHeight;
  
      if (scrollPosition + windowHeight >= bodyHeight - threshold) {
        arrowButton.style.display = 'block';
      } else {
        arrowButton.style.display = 'none';
      }
    }
  
    window.addEventListener('scroll', showArrowButton);
    showArrowButton(); // Call the function initially to set the correct visibility state
  });

  */


    // Optionally, you might want to add an event listener to close the navigation if the window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1000) {
            var navLinks = document.querySelectorAll('.navDash');
            navLinks.forEach(function(link) {
                // Set display to block when window is resized above 1000 pixels
                link.style.display = 'block';
            });
        } else {
            var navLinks = document.querySelectorAll('.navDash');
            navLinks.forEach(function(link) {
                // Hide the navigation links when window is resized below or equal to 1000 pixels
                link.style.display = 'none';
            });
        }
    });

// Check localStorage for dark mode preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

function enableDarkMode() {
  let element = document.body;
  let containers = document.querySelectorAll(".containerMain");
  const sunMoonIcon = document.getElementById("sunMoon");
  const change = document.getElementsByClassName("change")[0];

  containers.forEach(container => {
      container.classList.add("dark");
  });

  element.classList.add("dark");
  
  sunMoonIcon.classList.remove("fa-sun");
  sunMoonIcon.classList.add("fa-moon");
  change.textContent = "On";
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  let element = document.body;
  let containers = document.querySelectorAll(".containerMain");
  const sunMoonIcon = document.getElementById("sunMoon");
  const change = document.getElementsByClassName("change")[0];

  containers.forEach(container => {
      container.classList.remove("dark");
  });

  element.classList.remove("dark");
  sunMoonIcon.classList.remove("fa-moon");
  sunMoonIcon.classList.add("fa-sun");
  change.textContent = "Off";
  localStorage.setItem("darkMode", "disabled");
}

function darkMode() {
  if (localStorage.getItem("darkMode") === "enabled") {
      disableDarkMode();
  } else {
      enableDarkMode();
  }
}

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('searchInput');
      const sortSelect = document.getElementById('sortSelect');
      const noupdate = document.getElementById('noupdate');
      const anchorgroupContainer = document.getElementById('anchorgroupContainer');
  
      // Check if all necessary elements exist before proceeding
      if (searchInput && sortSelect && noupdate && anchorgroupContainer) {
          function filterAnchorgroups() {
              const searchValue = searchInput.value.toLowerCase();
              const sortBy = sortSelect.value;
  
              const anchorgroups = Array.from(anchorgroupContainer.querySelectorAll('.anchorgroup'));
  
              // Inside filterAnchorgroups() function
anchorgroups.forEach(anchor => {
  const bigTextElement = anchor.querySelector('.bigtext');
  const dateTextElement = anchor.querySelector('.bigtext.smaller');

  // Check if bigTextElement and dateTextElement exist before accessing their text content
  const bigText = bigTextElement ? bigTextElement.textContent.toLowerCase() : '';
  const dateText = dateTextElement ? dateTextElement.textContent : '';
  const isVisible = bigText.includes(searchValue);

  if (isVisible) {
      anchor.style.display = 'block';
  } else {
      anchor.style.display = 'none';
  }

  anchor.dataset.date = new Date(dateText).getTime();
});

// Determine whether to show or hide the "No Update available" card
const anyVisible = anchorgroups.some(anchor => anchor.style.display !== 'none');
noupdate.style.display = anyVisible ? 'none' : 'block';
  
              if (sortBy === 'oldest') {
                  anchorgroups.sort((a, b) => a.dataset.date - b.dataset.date);
              } else {
                  anchorgroups.sort((a, b) => b.dataset.date - a.dataset.date);
              }
  
              anchorgroups.forEach(anchor => {
                  anchorgroupContainer.appendChild(anchor);
              });
          }
  
          searchInput.addEventListener('input', filterAnchorgroups);
          sortSelect.addEventListener('change', filterAnchorgroups);
  
          filterAnchorgroups();
      } else {
          
      }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInputwalk");
    const containers = document.querySelectorAll(".containerMain");
    const noGameMessage = document.getElementById("nogame"); // Get the element for the message

    // Check if searchInput, containers, and noGameMessage exist before adding event listener
    if (searchInput && containers && noGameMessage) {
        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            let found = false; // Flag to track if any game matches the search term

            containers.forEach(function(container) {
                const text = container.querySelector(".bigtext").textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    container.parentNode.style.display = "flex"; // Display the parent element of containerMain
                    found = true; // Set flag to true if any game matches the search term
                } else {
                    container.parentNode.style.display = "none"; // Hide the parent element of containerMain
                }
            });

            // If no game matches the search term, display the "No Playthrough Available" message
            noGameMessage.style.display = found ? "none" : "block";
        });
    }
});
