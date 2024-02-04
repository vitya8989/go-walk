const btns = document.querySelectorAll('.main__step_btn');
const step1 = document.querySelector('.main__step.this-1');
const step2 = document.querySelector('.main__step.this-2');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('this--yes')) {
            step1.style.display = 'none';
            step2.style.display = 'block';
        }
        if (btn.classList.contains('this--no')) {
            if (!btn.classList.contains('fixed')) {
                btn.classList.add('fixed');
            }
            btn.style.top = `${getRandomInt(0, window.innerHeight - btn.offsetHeight)}px`;
            btn.style.left = `${getRandomInt(0, window.innerWidth - btn.offsetWidth)}px`;
        }
    })
});