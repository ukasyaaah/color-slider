/**
 * Khusus body, gaperlu ditangkep dgn dom selection
 */
const h1 = document.getElementsByTagName("h1")[0];
const button = document.createElement("button");
const teBu = document.createTextNode("Pencet!");
button.append(teBu);
h1.after(button);

const buttonAcak = document.createElement("button");
const teBuAcak = document.createTextNode("Acak Warna");
buttonAcak.append(teBuAcak);
button.after(buttonAcak);

button.addEventListener("click", function () {

  document.body.classList.toggle("cornsilk");
});

buttonAcak.addEventListener("mouseenter", function () {
  // Math.ceil = bulatkan keatas
  // Math.floor = bulatkan kebawah
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

buttonAcak.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = `white`;
});

let sR = document.querySelector("input[name=sR]");
let sG = document.querySelector("input[name=sG]");
let sB = document.querySelector("input[name=sB]");

sR.addEventListener("input", function () {
  let r = sR.value;
  let g = sG.value;
  let b = sB.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sG.addEventListener("input", function () {
  let r = sR.value;
  let g = sG.value;
  let b = sB.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sB.addEventListener("input", function () {
  let r = sR.value;
  let g = sG.value;
  let b = sB.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener("mousemove", function (mouse) {
  const x = Math.round((mouse.clientX / window.innerWidth) * 255);
  const y = Math.round((mouse.clientY / window.innerHeight) * 255);

  //   console.log(x);
  //   console.log(y);

  document.body.style.backgroundColor = `rgb(${x},${y},100)`;
});
