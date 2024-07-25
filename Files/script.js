// For User Inquiry Webpage 

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Select the form element
    const form = document.getElementById('contact-form');

    // Add an event listener to the form's submit event
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting the default way
        event.preventDefault();
        
        // Collect form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form data
        if (!name || !email || !phone || !message) {
            // Alert the user if any field is empty
            alert('Please fill in all fields before submitting the form.');
            return;
        }
        
        // Alert the user that the form has been submitted successfully
        alert('Thank you for your inquiry, ' + name + '! We will get back to you shortly.');

        // for future reference, redirect the user to a different page after form submission
        // window.location.href = 'thankyou.html';

        // For now, we can reset the form fields to clear the form
        form.reset();
    });
});

// End of User Inquiry Webpage 



// For Developments Back button to Home landing page

// Select the back button
const backButton = document.getElementById('backButton');
    
// Add click event listener to the back button
backButton.addEventListener('click', function() {

    // Show an alert and prompt the user
    const confirmMessage = "Are you sure you want to go back to the Home page?";
    
    if (confirm(confirmMessage)) {
        // If user confirms, redirect to the Home page
        window.location.href = '../index.html';
    } else {
        // If user cancels, do nothing (stay on the current page)
    }
});

// End For Developments Back button to Home landing page


// For Projects Back button to  Development page

// Select the back button
const backButton2 = document.getElementById('backButton2');
    
// Add click event listener to the back button
backButton2.addEventListener('click', function() {

    // Show an alert and prompt the user
    const confirmMessage = "Are you sure you want to go back to the Project Preview Page?";
    
    if (confirm(confirmMessage)) {
        // If user confirms, redirect to the Home page
        window.location.href = 'Developments.html';
    } else {
        // If user cancels, do nothing (stay on the current page)
    }
});

// End For Projects Back button to Development page



// Function to show the modal and prevent body scrolling

// Get the checkbox element
const menuCheckbox = document.getElementById('check');

// Function to toggle the no-scroll class based on the checkbox state
function toggleScroll() {
    if (menuCheckbox.checked) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        document.body.style.overflow = ''; // Allow scrolling
    }
}

// Add event listener to the checkbox to call toggleScroll on change
menuCheckbox.addEventListener('change', toggleScroll);

// Initial call to set the correct state on page load
toggleScroll();





// For Console Log to check if DOM is fully functional 
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});

