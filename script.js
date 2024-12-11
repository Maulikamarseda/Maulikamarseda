Here’s the corrected and functional version of your script:

const yesBtn = document.getElementById("Yes");
const noBtn = document.getElementById("No");
const cta = document.querySelector(".buttons");

noBtn.addEventListener('mouseenter', () => {
  const children = Array.from(cta.children);
  const yesIdx = children.indexOf(yesBtn);
  const noIdx = children.indexOf(noBtn);

  if (yesIdx < noIdx) {
    cta.insertBefore(noBtn, yesBtn);
  } else {
    cta.insertBefore(yesBtn, noBtn);
  }
});