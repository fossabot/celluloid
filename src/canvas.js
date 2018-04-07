let canvas = null

function setupCanvas() {
  canvas = document.createElement("CANVAS")
  canvas.style.position = "fixed"
  canvas.style.left = "0"
  canvas.style.top = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.visibility = "hidden"
  document.body.appendChild(canvas)
}