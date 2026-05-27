const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products[id];
const back = params.get("back");
const catname = params.get("catname");
const cat = params.get("cat");

if (product) {
  document.getElementById("photo").src = product.photo;
  document.getElementById("nazvanie").textContent = product.nazvanie;
  document.getElementById("tara_1").textContent = product.tara_1;
  document.getElementById("tara_2").textContent = product.tara_2;
  document.getElementById("xleb").textContent = product.nazvanie;
  document.getElementById("xarakteristiki").textContent = product.xarakteristiki;
  document.getElementById("opisanie").textContent = product.opisanie;
  document.getElementById("sostav").textContent = product.sostav;
  document.getElementById("srok_xraneniya").textContent = product.srok_xraneniya;
  document.getElementById("usl_xraneniya").textContent = product.usl_xraneniya;
  document.getElementById("krepkost").textContent = product.krepkost;
  document.getElementById("plotnost").textContent = product.plotnost;
}

if (back) document.getElementById("btn_obr").href = back;
if (cat) document.querySelector(".rozliv_obratka").href = cat;
if (catname) document.querySelector(".rozliv_obratka").textContent = catname;


const tara2 = document.getElementById("tara_2");
if (product.tara_2) {
  tara2.textContent = product.tara_2;
} else {
  tara2.style.display = "none";
}

const krepkost = document.getElementById("krepkost");
if (product.krepkost) {
  krepkost.textContent = product.krepkost;
} else {
  krepkost.closest(".usl").style.display = "none";
}

const plotnost = document.getElementById("plotnost");
if (product.plotnost) {
  plotnost.textContent = product.plotnost;
} else {
  plotnost.closest(".usl").style.display = "none";
}