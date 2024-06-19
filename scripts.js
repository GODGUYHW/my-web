let cardIndex = 0;
const cards = document.querySelectorAll('.cards .card');
const totalCards = cards.length;

function showCard(index) {
    const containerWidth = document.querySelector('.card-slider').clientWidth;
    const offset = -index * (300 + 20); // ความกว้างของการ์ด + margin
    document.querySelector('.cards').style.transform = `translateX(${offset}px)`;
}

function changeCard(n) {
    cardIndex += n;

    if (cardIndex >= totalCards) {
        cardIndex = 0;
    } else if (cardIndex < 0) {
        cardIndex = totalCards - 1;
    }

    showCard(cardIndex);
}

// Initial card display
showCard(cardIndex);

// Auto slide change every 5 seconds
setInterval(() => {
    changeCard(1);
}, 5000);

// Intersection Observer setup
const sections = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});
