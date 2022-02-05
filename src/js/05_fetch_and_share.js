'use strict';

//Función para que aparezca la parte de compartir la tarjeta
function removeCollapse() {
  shareResult.classList.remove('collapseShare');
  shareResult.classList.remove('hidden');

}

function shareCard() {
  removeCollapse();
  disableBtnCreate(shareBtn);
}

//Fetch para crear la tarjeta
function handleClickCreate(event) {
  event.preventDefault();
  shareCard();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        generatedLink.innerHTML = data.cardURL;
        generatedLink.href = data.cardURL;
        twitterBtn.href = `https://twitter.com/intent/tweet?text=Esta es mi tarjeta de Awesome Cards&url=${data.cardURL}`;
      }
    })
    .catch((error) => console.error(error));
}

//Función que habilita el botón de compartir tarjeta si están todos los datos obligatorios
function enableBtnCrate(btn) {
  btn.classList.remove('share__create_btn--off');
  btn.classList.add('share__create_btn--on');
  btn.disabled = false;
  btn.addEventListener('click', handleClickCreate);
}

//Función que deshabilita el botón de compartir tarjeta si falta algún dato obligatorio
function disableBtnCreate(btn) {
  btn.classList.add('share__create_btn--off');
  btn.classList.remove('share__create_btn--on');
  btn.disabled = true;
}

//Función que comprueba si hay contenido en los datos obligatorios
function checkCompletedData() {
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.photo !== '' &&
    data.email !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.palette !== ''
  ) {
    enableBtnCrate(shareBtn);
   }
}