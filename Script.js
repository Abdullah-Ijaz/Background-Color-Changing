const colorButton = document.querySelector('.color-btn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998', 'Aquamarine', 'Aqua' ];


colorButton.addEventListener('click',changeColor);

function changeColor () {
   // bodyBcg.style.backgroundColor = colors[0];
   let random = Math.floor(Math.random()*colors.length)
   bodyBcg.style.backgroundColor = colors[random];
}
