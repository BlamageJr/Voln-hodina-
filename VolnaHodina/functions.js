const now = new Date()

//Test pam�ti

localStorage.test = 2
console.log(localStorage.test)
delete localStorage.test

//nastaven� prom�nn�ch

let uzivatel = 'string'
let trida = 'string'
let jmeno = 'string'

//Funkce: ��k / U�itel

function zakFnck() {
localStorage.setItem(uzivatel, "zak")
console.log(localStorage.getItem(uzivatel, "zak"))
}


function ucitelFckn() {
localStorage.setItem(uzivatel, "ucitel")
console.log(localStorage.getItem(uzivatel, "ucitel"))
}


//Funkce: U�itel�

function jmenoFnck() {
localStorage.setItem(jmeno, document.getElementById("jmenoInp").value)

console.log(localStorage.getItem(uzivatel, jmeno))


if (localStorage.getItem(jmeno) == "Jana Soukupov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Jitka �e��nsk�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Radka Kr�lov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Renata Vold�nov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Jana Bro�ov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Wad�iha Rahimi") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "V�clav Kulich") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Zde�ka Z�kov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Martina Talpov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Kate�ina Dane�ov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Hana Dole�alov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Tom� Kousek") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Ji�ina �ichov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Lenka ���stkov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Veronika Jen�kov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "David Pol�nka") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Monika Trachtov�") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Sylva Lys�") {
	window.open("rozvrh.html")
} else {
	document.getElementById("errorStr").innerHTML = "Chybn� Jm�no"
}


}






//Funkce: T��dy

function tridaFnck() {

localStorage.setItem(trida, document.getElementById("tridaInp").value)

console.log(localStorage.getItem(uzivatel, trida))


if (localStorage.getItem(trida) == "6.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.E") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.E") {
window.location.href = "rozvrh.html"
} else {
	document.getElementById("errorStr").innerHTML = "Chybn� t��da"
}

}

