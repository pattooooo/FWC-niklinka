const button=document.getElementById("randomcolor");

function randomColor() {
    const letters = 'ABCDEF';
    let color = '#'
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 6)]
    }
    return color;
}

button.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor();
})