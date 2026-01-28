console.log('app running...');

// we should use event delegation for the buttons
// const toneBoxPlayer = document.querySelector();
const btnSection = document.querySelector('.btn-section');

btnSection.addEventListener('click', e => {
    const btn = e.target.closest('.btn');

    if(!btn) return; // you did not click on the btn
    console.log(e.target);
})