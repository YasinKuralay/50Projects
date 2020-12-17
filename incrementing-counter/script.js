const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        let c = +counter.innerText;

        const increment = target / 75;

        if (c < target) {
            const incrementing = setInterval(function () {
                counter.innerText = `${Math.ceil(c + increment)}`;
                c += increment;
                if (c >= target) {
                    clearInterval(incrementing);
                    c = target;
                    counter.innerText = c;
                }
            }, 1);
        } else {
            clearInterval(incrementing);
        }
    };

    updateCounter();
});
