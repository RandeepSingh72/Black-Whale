const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");
const slideIn = document.querySelectorAll(".slide-right");
const slideTop = document.querySelectorAll(".slide-top");
const odometerDigit = document.querySelector(".odometer");

const observer1 = new IntersectionObserver((e) => {
  e.map((e) => {
    if (e.isIntersecting) {
      let value = 15243;
      odometer.innerHTML = value;
      setInterval(() => {
        value += 5;
        odometer.innerHTML = value;
      }, 5000);
    }
  });
});

observer1.observe(odometerDigit);

const observer = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.target.classList.toggle("is-visible", e.isIntersecting);
  });
});

slideIn.forEach((e) => {
  observer.observe(e);
});
const observer2 = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.target.classList.toggle("is-visible", e.isIntersecting);
  });
});
slideTop.forEach((e) => {
  observer2.observe(e);
});

prevBtn.addEventListener("click", (e) => {
  const lastChild = track.children[6];

  track.prepend(lastChild);

  track.children[0].children[0].setAttribute("data-position", 1);
  track.children[1].children[0].setAttribute("data-position", 2);
  track.children[2].children[0].setAttribute("data-position", 3);
  track.children[3].children[0].setAttribute("data-position", 4);
  track.children[4].children[0].setAttribute("data-position", 5);
  track.children[5].children[0].setAttribute("data-position", 6);
  track.children[6].children[0].setAttribute("data-position", 7);
});

nextBtn.addEventListener("click", (e) => {
  const firstChild = track.children[0];
  track.append(firstChild);

  track.children[0].children[0].setAttribute("data-position", 1);
  track.children[1].children[0].setAttribute("data-position", 2);
  track.children[2].children[0].setAttribute("data-position", 3);
  track.children[3].children[0].setAttribute("data-position", 4);
  track.children[4].children[0].setAttribute("data-position", 5);
  track.children[5].children[0].setAttribute("data-position", 6);
  track.children[6].children[0].setAttribute("data-position", 7);
});
