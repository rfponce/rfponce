document.addEventListener('DOMContentLoaded', () => {
    // INTERFACE SELECTORS
    const greeting = document.getElementById('dynamicGreetings');

    if (checkFirstTimeVisit() === null) recordVisit();
    else changeGreeting();
    
    // FUNCTIONS
    function checkFirstTimeVisit() {
        const isYourFirstTime = localStorage.getItem('isYourFirstTimeVisit');

        return isYourFirstTime;
    }

    function recordVisit() {
        localStorage.setItem('isYourFirstTimeVisit', 'false');
    }

    function changeGreeting() {
        greeting.classList.add('second-time-visit__greeting');
        greeting.textContent = 'again';
    }
});