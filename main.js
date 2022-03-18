/////////////////////////////////
//////////COPY VARIABLES//////////
/////////////////////////////////
// DOM Boxes
const lighterMelon = document.getElementById("lighterMelon");
const venetianRed = document.getElementById("venetianRed");
const redSalsa = document.getElementById("redSalsa");
const melon = document.getElementById("melon");
const spaceCadet = document.getElementById("spaceCadet");
const lavender = document.getElementById("lavender");

// Feedback
const copyNotification = document.getElementById("copy_info");
const hexCodes = {
	lighterMelon: "#f7e2de",
	venetianRed: "#c81919",
	redSalsa: "#fb4b4e",
	melon: "#e8aea2",
	spaceCadet: "#28283e",
	lavender: "#e7dada"
};

/////////////////////////////////
//////////COPY FUNCTION//////////
/////////////////////////////////

function copyHex(color) {
	navigator.clipboard.writeText(color).then(() => {
		// copyNotification.textContent = `color copied! 🥳`;
		// copyNotification.style.cssText =
		// 	"background-color:var(--melon); color:var(--spacecadet); font-size:1.4rem; border-radius:38px; font-weight:bold; padding:0.2rem";
	});
}

function getColor(colorname) {
	let result = colorname.id;
	colorname.addEventListener("click", function () {
		copyHex(hexCodes[`${result}`]);
		copyNotification.innerHTML = `<span style="font-family:var(--mono);background-color:var(--spacecadet); color:var(--lavender);padding:0.1rem 0.4rem">
            ${hexCodes[`${result}`]}\</span> color copied! 🥳`;
		copyNotification.style.cssText =
			"color:var(--spacecadet); font-size:1.2rem; border-radius:38px; font-weight:bold; padding:0.2rem";
	});
}

getColor(redSalsa);
getColor(lavender);
getColor(melon);
getColor(lighterMelon);
getColor(spaceCadet);
getColor(venetianRed);
