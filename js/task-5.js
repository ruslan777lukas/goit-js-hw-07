const bTn=document.querySelector('.change-color');
let spanColor=document.querySelector(".color");

function getRandomHexColor() {
  const x =`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    spanColor.textContent=x;
    document.body.style.backgroundColor=x;
}

bTn.addEventListener('click', getRandomHexColor);