// Emit an event stating that the timer has started
// Emit an event that the timer has 'ticked'
// Emit an event that the timer is done

const duration_input = document.querySelector("#duration");
const start_button = document.querySelector("#startBtn");
const pause_button = document.querySelector("#pauseBtn");

// We separate the timer itself from the animations by adding a fourth parameter
// This way, our code will look clean and set to it's true purpose

const timerOne = new Timer(duration_input, start_button, pause_button, {
  onStart() {
    console.log("Timer has Started!");
  },
  onTick() {
    console.log("Timer has Ticked Down!");
  },
  onComplete() {
    console.log("Timer has Completed!");
  },
});
