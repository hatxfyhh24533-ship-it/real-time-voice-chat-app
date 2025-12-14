const startBtn = document.querySelector("button");

startBtn.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    alert("🎤 Microphone access granted! Voice chat ready (demo).");
    console.log(stream);
  } catch (error) {
    alert("❌ Microphone permission denied");
    console.error(error);
  }
});
