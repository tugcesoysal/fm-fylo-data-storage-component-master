document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");

  function updateSliderBackground() {
    const value = slider.value;
    const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--slider-color1) 0%, var(--slider-color2) ${percent}%, var(--icon-bg) ${percent}%, var(--icon-bg) 100%)`;
  }

  function updatePrice() {
    const used = document.querySelector(".used");
    const left = document.querySelector(".left");
    const value = slider.value;
    used.innerHTML = value + " GB";
    left.innerHTML = 1000 - value;
  }

  updateSliderBackground();
  updatePrice();

  slider.addEventListener("input", () => {
    updateSliderBackground();
    updatePrice();
  });
});
