let nav_items = Array.from(document.querySelectorAll('.nav-site__item'));
let map__labels = Array.from(document.querySelectorAll('.map__label'));

const clickOnNav = function() {
    
    map__labels.forEach(e => {
        e.classList.remove('map__label--active');
    });


    let type = this.dataset.type;

    
    let type_labels = map__labels.filter(e => {
        if (e.dataset.type.indexOf(type) != -1) {
            return true;
        }
        return false;
    });
    
    
    if (!this.classList.contains('nav-site__item--active')) {
        type_labels.forEach(e => {
            e.classList.add('map__label--active');
        });
        this.classList.add('nav-site__item--active');
    } else {
        this.classList.remove('nav-site__item--active');
    }
};

nav_items.forEach(e => {
    e.addEventListener('click', clickOnNav);
});