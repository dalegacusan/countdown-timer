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
      this.onStart(this.timeRemaining);
    }
    this.interval = setInterval(this.tick, 20);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.onTick) {
      this.onTick(this.timeRemaining);
    }
    // Storing data inside the DOM

    if (this.timeRemaining === 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - .02;
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(value) {
    this.durationInput.value = value.toFixed(2);
  }
}
