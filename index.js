const myForm = document.querySelector('.my-form');

myForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    alert('Form submited!!')
})
