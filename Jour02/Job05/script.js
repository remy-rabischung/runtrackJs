window.addEventListener('scroll', function() {
    let footer = document.getElementById('footer');
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    let color1 = [255, 0, 0];
    let color2 = [0, 255, 0];

    let r = Math.round(color1[0] + (color2[0] - color1[0]) * scrollPercentage);
    let g = Math.round(color1[1] + (color2[1] - color1[1]) * scrollPercentage);
    let b = Math.round(color1[2] + (color2[2] - color1[2]) * scrollPercentage);

    footer.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


