let celsius = document.getElementById('celsius')
let fahreheit = document.getElementById('fahreheit')

celsius.oninput = () => {
let output = (parseFloat(celsius.value) * 9) / 5 + 32;
fahreheit.value = parseFloat(output.toFixed(2));
};
fahreheit.oninput = () => {
    let output = ((parseFloat(fahreheit.value) - 32) * 5) /9;
    celsius.value = parseFloat(output.toFixed(2));
};