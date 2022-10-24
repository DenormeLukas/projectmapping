const init = () => {

}

const $shadow = document.getElementById('shadow-person');

window.addEventListener('mousemove', (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  // Do something with these coordinates
  let left = e.offsetX;

  $shadow.style.left = left + 'px';
});

const update = (e) => {
  let x = e.clientX
  let y = e.clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

init()
postMessage({ payload: 'removeLoading' }, '*')
