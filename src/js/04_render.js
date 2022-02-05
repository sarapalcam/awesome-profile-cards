'use strict';

//Función que recoge el texto del usuario y lo asigna a cada input, guardándolo en el objeto. Después comprueba si están todos los datos obligatorios -> 06_fetch_and_share
function handleWriteInput(event) {
  const userInput = event.currentTarget.name;
  const userValue = event.currentTarget.value;
  data[userInput] = userValue;
  localStorage.setItem('userData', JSON.stringify(data));
  checkCompletedData();
}


function getPaletteColour(item) {
  const numberPalette = savedName[item];
  for (let i = 1; i <= 3; i++) {
    if (numberPalette === `${i}`) {
      preview.classList.add(`palette-${i}`);
      data.palette = `${i}`;
    }
  }
  const input = document.querySelector(`.js-palette-${numberPalette}`);
  input.checked = true;
  checkCompletedData();
}

function renderPreview(){
  namePreview.innerHTML = data.name;
  jobPreview.innerHTML = data.job;
  phonePreview.href = data.phone;
  mailPreview.href = data.email;
  linkedinPreview.href = data.linkedin;
  githubPreview.href = data.github;
}

//Recuperamos los datos del localStorage y rellenamos la tarjeta y los inputs con ellos
function getStoredData() {
  savedName = JSON.parse(localStorage.getItem('userData'));
  for (const item in savedName) {
    if (savedName[item]) {
      data[item] = savedName[item];
      if (item === 'photo') {
        profileImage.style.backgroundImage = `url(${savedName[item]})`;
        profilePreview.style.backgroundImage = `url(${savedName[item]})`;
      } else if (item === 'palette') {
        getPaletteColour(item);
      } else {
        const input = document.querySelector(`#${item}`);
        input.value = savedName[item];
        renderPreview();
      }
    }
  }
}

//Si hay datos en el localStorage, los recuperamos
if (localStorage.getItem('userData') !== null) {
  getStoredData();
}

//Pintamos el texto que asignamos al objeto en la tarjeta de Preview(HTML)
function renderUserValue() {
  if (data.name === '') {
    namePreview.innerHTML = 'Nombre Apellido';
  } else {
    namePreview.innerHTML = data.name;
  }
  if (data.job === '') {
    jobPreview.innerHTML = 'Front-end developer';
  } else {
    jobPreview.innerHTML = data.job;
  }
  mailPreview.href = `mailto:${data.email}`;
  phonePreview.href = `tel:${data.phone}`;
  linkedinPreview.href = `https://www.linkedin.com/in/${data.linkedin}`;
  githubPreview.href = `https://github.com/${data.github}`;
}

//Función para añadir o quitar clases de paleta a preview y asignar el número de paleta al objeto data
function handlePaletteClick(event) {
  const paletteValue = event.currentTarget.value;
  if (paletteValue === '1') {
    preview.classList.add('palette-1');
    preview.classList.remove('palette-2');
    preview.classList.remove('palette-3');
    data.palette = '1';
  } else if (paletteValue === '2') {
    preview.classList.add('palette-2');
    preview.classList.remove('palette-1');
    preview.classList.remove('palette-3');
    data.palette = '2';
  } else if (paletteValue === '3') {
    preview.classList.add('palette-3');
    preview.classList.remove('palette-1');
    preview.classList.remove('palette-2');
    data.palette = '3';
  }
}

//Listener de los botones radio
for (const eachPalette of palette) {
  eachPalette.addEventListener('click', handlePaletteClick);
}


//Función que agrupa
function handleUserInput(event) {
  handleWriteInput(event);
  renderUserValue();
}

//Escuchamos el evento del teclado
for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup', handleUserInput);
  eachInput.addEventListener('click', handleUserInput);
}
