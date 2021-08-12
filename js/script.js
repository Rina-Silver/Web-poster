let nav__items = Array.from(document.querySelectorAll('.nav-site__item'));
let map__labels = Array.from(document.querySelectorAll('.map__label'));

const clickOnNav = function (event) {
  nav__items.forEach(e => {
    if (e !== event.currentTarget) e.classList.remove('nav-site__item--active');
  });
  map__labels.forEach(e => {
    e.classList.remove('map__label--active');
  });

  let type = event.currentTarget.dataset.type;

  let type_labels = map__labels.filter(e => {
    if (e.dataset.type.indexOf(type) != -1) {
      return true;
    }
    return false;
  });

  if (!event.currentTarget.classList.contains('nav-site__item--active')) {
    type_labels.forEach(e => {
      e.classList.add('map__label--active');
    });
    event.currentTarget.classList.add('nav-site__item--active');
  } else {
    event.currentTarget.classList.remove('nav-site__item--active');
  }
};
nav__items.forEach(e => {
  e.addEventListener('click', clickOnNav);
});

const slider = document.querySelector('.map__container');
let mouseDown = false;
let startX, startY, scrollLeft, scrollTop;

const startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  startY = e.pageY - slider.offsetTop;
  scrollLeft = slider.scrollLeft;
  scrollTop = slider.scrollTop;
};
const stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', e => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const y = e.pageY - slider.offsetTop;
  const scrollX = x - startX;
  const scrollY = y - startY;
  slider.scrollLeft = scrollLeft - scrollX;
  slider.scrollTop = scrollTop - scrollY;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
