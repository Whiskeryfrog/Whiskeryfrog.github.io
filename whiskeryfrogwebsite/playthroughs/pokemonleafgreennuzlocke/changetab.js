var currentSelection = 'Episodes'; // Initially set the button text to 'Episodes'

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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