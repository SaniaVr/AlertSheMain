// scripts.js

// Function to redirect to the chat page
function goToChatPage() {
    window.location.href = 'https://alertsheeee.vercel.app/';
}

// Function to redirect to the call helpline page
function goToCallPage() {
    window.location.href = 'https://indianhelpline.com/women-helpline';
}

// Function to scroll to the home section
function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const chatButton = document.querySelector('.join-now');
    const callButton = document.querySelector('.call-button');
    const homeButton = document.querySelector('nav ul li a[href="#home"]');

    // Add event listeners to the buttons
    if (chatButton) {
        chatButton.addEventListener('click', goToChatPage);
    }

    if (callButton) {
        callButton.addEventListener('click', goToCallPage);
    }

    if (homeButton) {
        homeButton.addEventListener('click', scrollToHome);
    }
});
