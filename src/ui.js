export const modFox = (state) => {
  document.querySelector(".fox").className = `fox-${state} fox`;
};

export const modScene = (state) => {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = (show) => {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
