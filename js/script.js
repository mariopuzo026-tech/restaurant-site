// script.js

// Improved JavaScript for Form Validation, Smooth Scrolling, and Error Handling

// Form Validation
function validateForm(form) {
    let isValid = true;
    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error'); // Adds error class for styling
        } else {
            field.classList.remove('error'); // Removes error class
        }
    });

    return isValid;
}

// Smooth Scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error(`Element not found: ${target}`);
    }
}

// Error Handling
function handleError(error) {
    console.error('An error occurred:', error);
    alert('Something went wrong! Please try again.');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const scrollButton = document.querySelector('.scroll-to-section');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (validateForm(form)) {
                // Process form submission here
                console.log('Form submitted successfully.');
            } else {
                alert('Please fill in all fields correctly.');
            }
        });
    }
    
    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            smoothScroll('#target-section');
        });
    }
});