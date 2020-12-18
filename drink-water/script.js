const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', (e) => {
        highLightCups(idx);
    });
});

function highLightCups(idx) {
    smallCups.forEach((cup, idx2) => {
        if (idx2 < idx) {
            cup.classList.add('full');
        } else if (idx === 7) {
            //this line is for preventing the 'nextElementSibling is null' error which happens when clicking the last element.
            cup.classList.toggle('full');
        } else if (idx2 === idx) {
            if (
                idx2 === idx &&
                !smallCups[idx].nextElementSibling.classList.contains('full')
            ) {
                console.log('next element not full');
                cup.classList.toggle('full');
            }
        } else {
            cup.classList.remove('full');
        }
    });
}
