document.title = "Bloxdy";

document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";
document.documentElement.style.width = "100%";
document.documentElement.style.height = "100%";
document.documentElement.style.overflow = "hidden";
document.documentElement.style.background = "black";

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.overflow = "hidden";
document.body.style.background = "black";

document.body.innerHTML = `
  <iframe
    id="gameFrame"
    src="https://bloxd.io"
    allow="fullscreen; gamepad; autoplay; clipboard-read; clipboard-write; pointer-lock"
    allowfullscreen
  ></iframe>
`;

const style = document.createElement("style");

style.textContent = `
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
    background: black !important;
  }

  iframe {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    border: none !important;
    outline: none !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    background: black !important;
  }
`;

document.head.appendChild(style);
