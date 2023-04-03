/* Code to generate random password */

// Character sets
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrst";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+`~";

// Selectors
const passBox = document.getElementById('pass-box');
const passLength = document.getElementById('pass-length');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');

// Function to get random data
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// Function to generate password
const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < passLength.value) {
        return generatePassword(password);
    }
    passBox.value = password.slice(0, passLength.value);
};

document.getElementById('generate-btn').addEventListener('click', () => {
    generatePassword()
});