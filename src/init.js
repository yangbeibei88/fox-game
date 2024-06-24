import gameState, { handleUserAction } from "./gameState.js";
import { TICK_RATE } from "./constants.js";
import initButtons from "./buttons.js";
// const TICK_RATE = 3000;

// if the browser not working, run `rm -rf .cache dist/`

// function tick() {
//   console.log("tick", Date.now());
// }

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
  // or directly execute nextAnimationFrame()
  // nextAnimationFrame();
}

init();
