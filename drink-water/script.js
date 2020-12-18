const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

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
                cup.classList.toggle('full');
            }
        } else {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;

    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}
