'use strict';

let regExMail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExPhone = /^[^a-zA-Z]+$/;

const errorMessage = {
  palette: 'Tienes que seleccionar una paleta de colores para crear tu tarjeta',
  empty:
    'Tienes que completar todos los campos obligatorios para crear tu tarjeta',
  email:
    'Por favor, introduce una dirección de email válida. Ej.: maripuri@lamaster.com',
  phone: 'Por favor, introduce un número de teléfono válido. Ej.: 611661234',
  linkedin:
    'Por favor, introduce un usuario de Linkedin válido, no deben incluirse links a la página. Ej.: lamari.master',
  github:
    'Por favor, introduce un usuario de gitHub válido, no deben incluirse links a la página. Ej.: lamari',
};

function createError(element, name) {
  const newParagraph = document.createElement('p');
  newParagraph.classList.add(`js-error-${name}`);
  newParagraph.classList.add(`js-error`);
  newParagraph.classList.add(`error__${name}`);
  newParagraph.id = name;
  const newSquare = document.createElement('div');
  newSquare.classList.add(`error__${name}--decoration`);
  let newErrorMssg = document.createTextNode(element);
  newParagraph.appendChild(newSquare);
  newParagraph.appendChild(newErrorMssg);
  return newParagraph;
}

//Error paleta
function createErrorPalette() {
  if (data.palette === '') {
    removeError('.js-error-palette');
    const newParagraph = createError(errorMessage.palette, 'palette');
    legendDesign.appendChild(newParagraph);
    blockCollapsePallete();
    blockArrowsSharePalette();
  }
}

function blockCollapsePallete() {
  legendShare.parentNode.classList.add('collapse');
  legendDesign.parentNode.classList.remove('collapse');
}

function blockArrowsSharePalette() {
  if (legendShare.parentNode.classList.contains('collapse')) {
    legendShare.parentNode.classList.remove('rotateArrow');
  }
  if (legendDesign.parentNode.classList.contains('collapse') === false) {
    legendDesign.parentNode.classList.add('rotateArrow');
  }
}

//Error campos obligatorios
function createErrorEmptyFill() {
  if (
    data.name === '' ||
    data.job === '' ||
    data.photo === '' ||
    data.email === '' ||
    data.linkedin === '' ||
    data.github === ''
  ) {
    removeEmptyError();
    createErrorFill(errorMessage.empty, 'empty');
  }
}

//Funciones para todos los inputs del fill
function blockCollapseFill() {
  legendShare.parentNode.classList.add('collapse');
  legendFill.parentNode.classList.remove('collapse');
}

function blockArrowsShareFill() {
  if (legendShare.parentNode.classList.contains('collapse')) {
    legendShare.parentNode.classList.remove('rotateArrow');
  }
  if (legendFill.parentNode.classList.contains('collapse') === false) {
    legendFill.parentNode.classList.add('rotateArrow');
  }
}

function createErrorFill(className, name) {
  const newParagraph = createError(className, name);
  legendFill.appendChild(newParagraph);
  blockCollapseFill();
  blockArrowsShareFill();
}

//Funciones email
function createErrorEmail() {
  if (data.email !== '' && regExMail.test(data.email) === false) {
    removeError('.js-error-email');
    const newParagraph = createError(errorMessage.email, 'email');
    legendFill.appendChild(newParagraph);
    blockCollapseFill();
    blockArrowsShareFill();
  }
}

//Funciones phone
function createErrorPhone() {
  if (data.phone !== '' && regExPhone.test(data.phone) === false) {
    removeError('.js-error-phone');
    const newParagraph = createError(errorMessage.phone, 'phone');
    legendFill.appendChild(newParagraph);
    blockCollapseFill();
    blockArrowsShareFill();
  }
}

//Funciones linkedin
function createErrorLinkedin() {
  if (
    data.linkedin.indexOf('http://') === 0 ||
    data.linkedin.indexOf('https://') === 0
  ) {
    removeError('.js-error-linkedin');
    const newParagraph = createError(errorMessage.linkedin, 'linkedin');
    legendFill.appendChild(newParagraph);
    blockCollapseFill();
    blockArrowsShareFill();
  }
}

//Funciones github
function createErrorGithub() {
  if (
    data.github.indexOf('http://') === 0 ||
    data.github.indexOf('https://') === 0
  ) {
    removeError('.js-error-github');
    const newParagraph = createError(errorMessage.github, 'github');
    legendFill.appendChild(newParagraph);
    blockCollapseFill();
    blockArrowsShareFill();
  }
}

function findFormErrors() {
  createErrorPalette();
  createErrorEmptyFill();
  createErrorEmail();
  createErrorPhone();
  createErrorLinkedin();
  createErrorGithub();
}

function removeError(className) {
  const allErrorElements = document.querySelectorAll(className);
  for (const element of allErrorElements) {
    element.remove();
  }
}

function removeEmptyError() {
  removeError('.js-error-empty');
}

function removeAllErrors() {
  const allErrors = document.querySelectorAll('.js-error');
  for (const eachError of allErrors) {
    eachError.remove();
  }
}

function handleClickShare() {
  findFormErrors();
}

function handleClickInput(ev) {
  removeAllErrors();
  if (ev.currentTarget.parentNode.classList.contains('color')) {
    legendDesign.parentNode.classList.remove('collapse');
    legendFill.parentNode.classList.add('collapse');
  } else if (ev.currentTarget.parentNode.classList.contains('form')) {
    legendDesign.parentNode.classList.add('collapse');
    legendFill.parentNode.classList.remove('collapse');
  }
}

function handleClickReset() {
  removeAllErrors();
}

legendShare.addEventListener('click', handleClickShare);
resetBtn.addEventListener('click', handleClickReset);

for (const input of allInputs) {
  input.addEventListener('click', handleClickInput);
}

