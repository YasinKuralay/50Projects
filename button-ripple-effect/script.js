const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const mouseXPosition = e.clientX;
        const mouseYPosition = e.clientY;

        const buttonTopPosition = e.target.offsetTop;
        const buttonLeftPosition = e.target.offsetLeft;

        const mouseInButtonXPosition = mouseXPosition - buttonLeftPosition;
        const mouseInButtonYPosition = mouseYPosition - buttonTopPosition;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = mouseInButtonYPosition + 'px';
        circle.style.left = mouseInButtonXPosition + 'px';

        this.appendChild(circle); //since we are using 'this', this function cant be an arrow function.

        setTimeout(() => circle.remove(), 1000);
    });
});
