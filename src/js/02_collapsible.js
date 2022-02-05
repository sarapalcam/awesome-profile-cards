'use strict';

//Funciones para rotar la flecha de los legend en función de si el contenido está desplegado o no
function rotateArrowDesign(){
  if (legendDesign.parentNode.classList.contains('collapse') === false) {
    legendDesign.parentNode.classList.add('rotateArrow');
  } else {
    legendDesign.parentNode.classList.remove('rotateArrow');
  }
}

function rotateArrowFill(){
  if (legendFill.parentNode.classList.contains('collapse') === false) {
    legendFill.parentNode.classList.add('rotateArrow');
  } else {
    legendFill.parentNode.classList.remove('rotateArrow');
  }
}

function rotateArrowShare(){
  if (legendShare.parentNode.classList.contains('collapse') === false) {
    legendShare.parentNode.classList.add('rotateArrow');
  } else {
    legendShare.parentNode.classList.remove('rotateArrow');
  }
}

function rotateArrow(event) {
  event.currentTarget.parentNode.classList.toggle('rotateArrow');
  if (event.currentTarget === legendShare) {
    rotateArrowDesign();
    rotateArrowFill();
  } else if (event.currentTarget === legendFill) {
    rotateArrowShare();
    rotateArrowDesign();
  } else {
    rotateArrowFill();
    rotateArrowShare();
  }
}

//Funciones que despliegan u ocultan el contenido de cada campo
function collapseContent(event) {
  event.currentTarget.parentNode.classList.toggle('collapse');
  if (event.currentTarget === legendShare) {
    legendFill.parentNode.classList.add('collapse');
    legendDesign.parentNode.classList.add('collapse');
  } else if (event.currentTarget === legendFill) {
    legendShare.parentNode.classList.add('collapse');
    legendDesign.parentNode.classList.add('collapse');
  } else {
    legendShare.parentNode.classList.add('collapse');
    legendFill.parentNode.classList.add('collapse');
  }
}

function handlerClickLegend(event) {
  collapseContent(event);
  rotateArrow(event);
}

legendShare.addEventListener('click', handlerClickLegend);
legendFill.addEventListener('click', handlerClickLegend);
legendDesign.addEventListener('click', handlerClickLegend);
