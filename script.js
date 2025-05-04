// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const changeableText = document.getElementById('changeable-text');

changeTextBtn.addEventListener('click', function() {
    const messages = [
        "The text has been changed!",
        "JavaScript is powerful!",
        "DOM manipulation is fun!",
        "You clicked the button!",
        "Content changes dynamically!"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    changeableText.textContent = messages[randomIndex];
    
    // Also add a temporary highlight effect
    changeableText.classList.add('highlight');
    setTimeout(() => {
        changeableText.classList.remove('highlight');
    }, 1000);
});

// Modify CSS styles
const changeStyleBtn = document.getElementById('change-style-btn');
const resetStyleBtn = document.getElementById('reset-style-btn');
const contentBox = document.getElementById('content-box');

changeStyleBtn.addEventListener('click', function() {
    contentBox.style.backgroundColor = '#e6ffe6';
    contentBox.style.borderColor = '#4CAF50';
    contentBox.style.color = '#006600';
    contentBox.style.fontSize = '18px';
    contentBox.style.padding = '25px';
});

resetStyleBtn.addEventListener('click', function() {
    contentBox.style.backgroundColor = '';
    contentBox.style.borderColor = '';
    contentBox.style.color = '';
    contentBox.style.fontSize = '';
    contentBox.style.padding = '';
});

// Add/remove element
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggleElement = document.getElementById('toggle-element');

toggleElementBtn.addEventListener('click', function() {
    if (toggleElement.style.display === 'none') {
        toggleElement.style.display = 'block';
        toggleElementBtn.textContent = 'Hide Element';
    } else {
        toggleElement.style.display = 'none';
        toggleElementBtn.textContent = 'Show Element';
    }
});