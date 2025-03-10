// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the header color
function changeHeaderColor() {
    const header = document.getElementById('hello-world'); // Assuming the header has this ID
    header.style.color = getRandomColor();
}

// Adding event listener to the button
const button = document.getElementById('change-color-button'); // Assuming the button has this ID
button.addEventListener('click', changeHeaderColor);