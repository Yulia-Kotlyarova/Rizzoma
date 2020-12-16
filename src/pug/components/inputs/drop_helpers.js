const disabledButton = () => {
    document.querySelectorAll('.quantity').forEach((el) => {
        if (el.innerText == '0'){
            el.previousElementSibling.classList.add('disabled');
        } else {
            el.previousElementSibling.classList.remove('disabled');
        }
    });
}

const onMinus = (e) => {
    let number = e.target.nextElementSibling.innerText;
    number != 0 ? --e.target.nextElementSibling.innerText: false;
    disabledButton();
}
const onPlus = (e) => {
    ++e.target.previousElementSibling.innerText;
    disabledButton();
}

export { disabledButton, onMinus, onPlus };
