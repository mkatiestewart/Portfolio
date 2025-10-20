const $ = _ => document.querySelector(_)

const $c = _ => document.createElement(_)

String.prototype.pad = function(size){
	let s = String(this)
	while (s.length < (size || 2)) {s = "0" + s}
	return s
}

const art3d = $('#art3dicons')
const mainDesktop = $('#mainDesktop')

for(let i = 1; i <= 55; i++){
	const img = new Image()
	const name = (i).toString().pad(3)
	img.src = `3d/${name}.jpg`
	img.onload = () => {
		const icon = $c('fos-icon')
		icon.setAttribute('href', `art3d${name}`)
		icon.setAttribute('fixed', true)
		icon.setAttribute('name', name)
		icon.appendChild(img)
		art3d.appendChild(icon)
		const window = $c('fos-window')
		window.className = 'viewer'
		window.appendChild(img.cloneNode())
		window.setAttribute('title', `3D Art - ${name}`)
		window.setAttribute('name', `art3d${name}`)
		window.style.left = 0
		window.style.top = 0
		window.style.height = Math.min(innerHeight * 0.95, Math.min(innerWidth/img.width,1) * img.height) + 'px'
		mainDesktop.appendChild(window)
	}
}

const time = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  hours = hours % 12 || 12; // convert 0–23 → 1–12

  document.querySelector('#clock').innerHTML = `${hours}:${minutes}`;

  setTimeout(time, 5000);
};

time();

// Center windows once on load (realistic desktop behavior)
document.addEventListener("DOMContentLoaded", () => {
  const windows = document.querySelectorAll("fos-window");
  windows.forEach(win => {
    win.style.position = "absolute";
    win.style.top = "50%";
    win.style.left = "50%";
    win.style.transform = "translate(-50%, -50%)";
  });
});


