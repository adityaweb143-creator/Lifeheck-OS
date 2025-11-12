// Start Menu Toggle
function toggleStartMenu() {
  const menu = document.getElementById('startMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Open App Function
function openApp(appName) {
  const container = document.getElementById('appContainer');

  const appWindow = document.createElement('div');
  appWindow.classList.add('appWindow');
  appWindow.style.top = Math.random() * 200 + 'px';
  appWindow.style.left = Math.random() * 200 + 'px';

  appWindow.innerHTML = `
    <div class="appHeader">
      <span>${appName.charAt(0).toUpperCase() + appName.slice(1)}</span>
      <button onclick="closeApp(this)">X</button>
    </div>
    <div class="appContent">
      <iframe src="apps/${appName}.html" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  `;

  container.appendChild(appWindow);
  dragElement(appWindow);
}

// Close App
function closeApp(btn) {
  btn.parentElement.parentElement.remove();
}

// Dragging Windows
function dragElement(el) {
  const header = el.querySelector(".appHeader");
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
