const Elements = document.getElementsByClassName('div');
let divCount = 0;
let colorArray = [];
let spanColor = null;

document.addEventListener("DOMContentLoaded", () => {
  while (divCount < 6) {
    const newDiv = document.createElement("button");
    newDiv.setAttribute('class', 'div');
    document.getElementById('globalDiv').appendChild(newDiv);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
    colorArray.push(randomColor);
    spanColor = colorArray[Math.floor((Math.random() * 6))];
    let i;
    for (i = 0; i < Elements.length; i++) {
      Elements[divCount].style.backgroundColor = colorArray[divCount];
    }
    divCount++
  }

  const spanContent = document.createTextNode(spanColor);
  const newSpan = document.createElement("span");
  newSpan.appendChild(spanContent);
  document.getElementById("nav").appendChild(newSpan);

  for (let element of Elements) {
    element.addEventListener('click', () => {
      if (JSON.stringify(element.style.backgroundColor) === JSON.stringify(spanColor)) {
        alert('Молодец');
        location.reload()
      } else {
        alert('НЕПРАВИЛЬНО ШИРОКУЮ НА ШИРОКУЮ');
        location.reload();
      }
    })
  }
});

