document.addEventListener('DOMContentLoaded', function () {
    const box = document.getElementById('animateBox');
    let angle = 0;
    let scale = 1;
    let growing = true;

    function animate() {
        angle = (angle + 2) % 360;
        scale += growing ? 0.01 : -0.01;
        if (scale >= 1.25) growing = false;
        if (scale <= 0.85) growing = true;

        box.style.transform = `rotate(${angle}deg) scale(${scale})`;
        requestAnimationFrame(animate);
    }

    if (box) requestAnimationFrame(animate);
});
