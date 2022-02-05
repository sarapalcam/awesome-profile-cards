'use strict';

//Variables de 02_collapsible.js 
const legendShare = document.querySelector('.js_legendShare');
const legendFill = document.querySelector('.js_legendFill');
const legendDesign = document.querySelector('.js_legendDesign');

//Variables de 03_get-avatar.js
const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

//Variables de 04_render.js
const namePreview = document.querySelector('.js-preview__name');
const jobPreview = document.querySelector('.js-preview__job');
const phonePreview = document.querySelector('.js-preview__phone');
const mailPreview = document.querySelector('.js-preview__mail');
const linkedinPreview = document.querySelector('.js-preview__linkedin');
const githubPreview = document.querySelector('.js-preview__github');
const allInputs = document.querySelectorAll('.input');
const shareBtn = document.querySelector('.js_shareBtn');
const palette = document.querySelectorAll('.js-radio');
const preview = document.querySelector('.preview__article');

const data = {
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: '',
};

let savedName = {};

//Variables de 05_fetch_and_create.js
const generatedLink = document.querySelector('.js_share_link');
const twitterBtn = document.querySelector('.js-twitter');
const shareResult = document.querySelector('.share__result');

//variables de 06_reset.js
const resetBtn = document.querySelector('.js-resetBtn'); 