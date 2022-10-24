const init = () => {

}

let socket;

// Code voor gsm / Wii Remote
window.addEventListener('deviceorientation', e => {
  let alpha = e.alpha;
  let beta = e.beta;
  let gamma = e.gamma;
  
  console.log(alpha, beta, gamma);

  document.documentElement.style.setProperty('--cursorX', (alpha - alpha - alpha) + 'rem')
  document.documentElement.style.setProperty('--cursorY', (beta - beta - beta) + 'rem')
});

// Update cursor
// const update = (e) => {
//   let x = e.clientX
//   let y = e.clientY

//   document.documentElement.style.setProperty('--cursorX', x + 'px')
//   document.documentElement.style.setProperty('--cursorY', y + 'px')
// }

const $shadow = document.getElementById('shadow-person');
window.addEventListener('mousemove', (e) => {
  // Makes shadow follow cursor
  let left = e.offsetX;

  $shadow.style.left = left + 'px';
});

// document.addEventListener('mousemove',update);
// document.addEventListener('touchmove',update);

init()
postMessage({ payload: 'removeLoading' }, '*')
