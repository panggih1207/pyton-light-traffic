async function setMode(mode) {
  await fetch(`http://localhost:8000/api/v1/traffic/mode/${mode}`, {
    method: "POST",
  });
}