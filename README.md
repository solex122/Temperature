# Temperature
cwwtechafrica Individual Project
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"/>
    <title>Temperature Conversion</title>
</head>
<body>
    <div class="container">
    <div class="cel">
        <label for="celsius">Celsius</label>
        <input type="number" id="celsius"/>
    </div>
    <div class="fahreheit">
        <label for="fahreheit">Fahreheit</label>
        <input type="number" id="fahreheit"/>
    </div>
</div>
    <script src="script.js"></script>
</body>
</html>
.{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', sans-serif;
    font-size: 18px;
}
body{
    height: 100hv;
    background-color: #5e8b7e;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container{
    width: 450px;
    background-color: #fff;
    padding: 70px 50px;
    box-shadow: 0 20px 25px rgb(0, 0, 0, o.25);
    border: 8px;
    display: flex;
    justify-content: space-between;
}
.cel{
width: 45%;
}
input {
    width: 80%;
    height: 50px;
    border-radius: 5px;
    border: 2px solid #d2d2d2;
    outline: none;
    margin-top: 8px;
    padding: 0 10px;
}

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
