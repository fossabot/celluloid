let canvas = null

function setupCanvas() {
  canvas = document.createElement("CANVAS")
  canvas.style.position = "fixed"
  canvas.style.left = "0"
  canvas.style.top = "0"
  canvas.style.width = "100%"
  canvas.style.height = "100%"
  canvas.style.visibility = "hidden"
  canvas.addEventListener("webglcontextlost", handleContextLost)
  canvas.addEventListener("webglcontextrestored", handleContextRestored)
  document.body.appendChild(canvas)
}

function stopCanvas() {
  if (!canvas) return
  canvas.removeEventListener("webglcontextlost", handleContextLost)
  canvas.removeEventListener("webglcontextrestored", handleContextRestored)
}