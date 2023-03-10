const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    const unit = unitSelect.value;
    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = temperature * 1.8 + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) / 1.8;
        convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemp = temperature - 273.15;
        convertedUnit = 'Celsius';
    }

    resultDiv.textContent = `${convertedTemp.toFixed(2)}° ${convertedUnit}`;
});
