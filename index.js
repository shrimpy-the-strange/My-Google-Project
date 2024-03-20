var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});



const searchInput = document.getElementById("searchInput");
const phrases = ["who is 大蝦"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
    if (isDeleting) {
        searchInput.placeholder = phrases[currentPhraseIndex].substr(0, currentLetterIndex - 1);
        currentLetterIndex--;
        delay = 100;
    } else {
        searchInput.placeholder = phrases[currentPhraseIndex].substr(0, currentLetterIndex + 1);
        currentLetterIndex++;
        delay = 200;
    }

    if (!isDeleting && currentLetterIndex === phrases[currentPhraseIndex].length) {
        delay = 2000; // Pause for a while when phrase is fully typed
        isDeleting = true;
    } else if (isDeleting && currentLetterIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop to the next phrase
        delay = 1000; // Pause before starting a new phrase
    }

    setTimeout(type, delay);
}

// Start the typewriter effect
setTimeout(type, 1000);


$(document).ready(function() {
    // Function to move the indicator to the active tab
    function moveIndicator(tab) {
        // Get the padding values
        var padLeft = parseFloat(tab.css('padding-left'));
        var padRight = parseFloat(tab.css('padding-right'));

        // Calculate the width and left position of the tab
        var textWidth = tab.width(); // Get the width without padding
        var tabLeft = tab.position().left;

        // Adjust the indicator's width and left position based on the padding
        var indicatorWidth = textWidth;
        var indicatorLeft = tabLeft + padLeft; // Start at the tab's left position plus its left padding

        // Set the width and left position of the indicator
        $('#indicator').css({
            width: indicatorWidth,
            left: indicatorLeft,
            visibility: 'visible' // Make sure the indicator is visible
        });
    }

    // Initial active tab detection based on URL
    var currentPage = window.location.pathname.split('/').pop();
    $('.tab-link').removeClass('tab-link-active'); // Remove active class from all tabs

    // Set the active tab based on the current page
    if (currentPage === "results.html") {
        $('#all').addClass('tab-link-active');
        moveIndicator($('#all'));
    } else if (currentPage === "images.html") {
        $('#images').addClass('tab-link-active');
        moveIndicator($('#images'));
    }

    // Click event for tab links
    $('.tab-link').on('click', function() {
        // Change the active state
        $('.tab-link').removeClass('tab-link-active');
        $(this).addClass('tab-link-active');

        // Move the indicator to the clicked tab
        moveIndicator($(this));
    });
});





