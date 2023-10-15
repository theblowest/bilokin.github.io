function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var changeBackgroundButton = document.getElementById('changeBackgroundButton');
changeBackgroundButton.addEventListener('click', function() {

    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});
