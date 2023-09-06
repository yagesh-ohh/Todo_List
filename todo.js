/** @format */

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let para = document.getElementById("para");
var deleteBtn = document.getElementById("deleteBtn");
var icon = document.createElement("i");
let inputArray = [];
btn.addEventListener("click", startT0AddList);

// ----------------------------------------------------------------------------

function startT0AddList() {
  let inputVlaue = input.value;
  if (inputVlaue.length == "") {
    alert("Type the staffs");
  } else {
    let objArray = {};
    objArray.isCompleted = false;
    objArray.value = inputVlaue;
    inputArray.unshift(objArray);
    console.log(inputArray);
    startT0AddList2(inputVlaue);
  }

  localSave();
}
var inputPrintside = [];
function startT0AddList2(inputVlaue) {
  var newElement = document.createElement("p");
  // var icon = document.createElement("i");
  // icon.setAttribute("class", "fa-solid fa-trash");
  // newElement.append(icon);
  // icon.setAttribute("id", "deleteBtn");
  newElement.innerText = inputVlaue;

  para.appendChild(newElement);
  input.value = ""
  newElement.addEventListener("click", singelTap);
  newElement.addEventListener("dblclick", doubleTapDelete);
}
// -------
// -------
// ------------------------------------------------------           SingleTap (OR) DoubleTap to perform                    -------------------------
function singelTap() {
  var singleTap = this.innerText;

  for (let i = 0; i < inputArray.length; i++) {
    let fromSingleTapArray = inputArray[i];
    if (fromSingleTapArray.value === singleTap) {
      fromSingleTapArray.isCompleted = !fromSingleTapArray.isCompleted;
    }
  }
  this.classList.toggle("text_line");
  localSave();
}
function doubleTapDelete() {
  this.remove();
  let delVal = this.innerText;
  for (let i = 0; i < inputArray.length; i++) {
    let delInputVal = inputArray[i];
    if (delVal === delInputVal.value) {
      inputArray.splice(delInputVal, 1);
      console.log("I'm deleting on array");
      console.log(inputArray);
    }
  }
  localSave();
}
// ------------------------------------------------------      SingleTap (OR) DoubleTap Tap to perform   End   -------------              -------------------------
// -------
// -------

// ------------------------------------------------------           LocalStorage save section                   -------------------------

function localSave() {
  localStorage.setItem("inputData", JSON.stringify(inputArray));
}
function refreshPage() {
  var getLocal = localStorage.getItem("inputData");
  getLocal = JSON.parse(getLocal);
  for (indexs in getLocal) {
    startT0AddList2(getLocal[indexs].value, getLocal[indexs].isCompleted);
    inputArray.push(getLocal[indexs]);
  }
}
refreshPage();

// ------------------------------------------------------           LocalStorage save section  End                 -------------------------
