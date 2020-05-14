class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.interval = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    // Storing data inside the DOM
    this.timeRemaining = this.timeRemaining - 1;

    if (this.timeRemaining === 0) {
      this.pause();
      console.log("Time's Up!");
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(value) {
    this.durationInput.value = value;
  }
}

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
    console.log("Timer Started!");
  },
  onTick() {},
  onComplete() {},
});
