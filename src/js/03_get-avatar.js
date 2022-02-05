"use strict";

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
  localStorage.setItem("userData", JSON.stringify(data));
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
