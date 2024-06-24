import gameState, { handleUserAction } from "./gameState.js";
import { TICK_RATE } from "./constants.js";
import initButtons from "./buttons.js";

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
