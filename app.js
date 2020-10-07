const ship = document.querySelector('#ship');

ship.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 800,
        easing: "easeInOut"
    });
    timeline.add({
        targets: document.getElementById('ship'),
        rotate: 150
    })
});