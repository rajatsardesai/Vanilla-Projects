/* Code for generating random colors */

const colorName = document.getElementById('color-name');
const colorBtn = document.getElementById('color-btn');

// Function to generate random colors
const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorName.innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

// Event call
colorBtn.addEventListener('click', randomColor);

// Initial call
randomColor();