const redbot = document.getElementById ('red')
const greenbot = document.getElementById ('green')
const bluebot = document.getElementById ('blue')


redbot.addEventListener('click', () => {
   document.body.style.backgroundColor = 'red';
});

greenbot.addEventListener('click', () => {
   document.body.style.backgroundColor = 'green';
});


bluebot.addEventListener('click', () => {
   document.body.style.backgroundColor = 'blue';
   
});