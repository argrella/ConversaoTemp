function converterTemperatura(origem) {
    var tempOrigem, tempCelsius, tempFahrenheit, tempKelvin;

    if (origem === "celsius") {
        tempOrigem = parseFloat(document.getElementById("celsius").value);
        tempCelsius = tempOrigem;
        tempFahrenheit = (tempOrigem * 1.8) + 32;
        tempKelvin = tempOrigem + 273.15;
    } else if (origem === "fahrenheit") {
        tempOrigem = parseFloat(document.getElementById("fahrenheit").value);
        tempCelsius = (tempOrigem - 32) / 1.8;
        tempFahrenheit = tempOrigem;
        tempKelvin = (tempOrigem + 459.67) / 1.8;
    } else if (origem === "kelvin") {
        tempOrigem = parseFloat(document.getElementById("kelvin").value);
        tempCelsius = tempOrigem - 273.15;
        tempFahrenheit = (tempOrigem * 1.8) - 459.67;
        tempKelvin = tempOrigem;
    }

    document.getElementById("celsius").value = tempCelsius.toFixed(2);
    document.getElementById("fahrenheit").value = tempFahrenheit.toFixed(2);
    document.getElementById("kelvin").value = tempKelvin.toFixed(2);
}
