//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let data = document.getElementById("band");

bands.sort((a,b) => {
	let x = "", y = "";
	if(a.substring(0,1) == 'A') {
		x = a.substring(2);
	}
	else if(a.substring(0,2) == 'An') {
		x = a.substring(3);
	}
	else if(a.substring(0,3) == 'The') {
		x = a.substring(4);
	}
	if(b.substring(0,1) == 'A') {
		y = b.substring(2);
	}
	else if(b.substring(0,2) == 'An') {
		y = b.substring(3);
	}
	else if(b.substring(0,3) == 'The') {
		y = b.substring(4);
	}
	return x-y;
});

for(let i=0; i<bands.length; i++) {
	let element = document.createElement("li");
	element.innerText = bands[i];
	band.appendChild(element);
}