import { disabledButton } from './drop_helpers.js';

window.onload = () => {
    const roomForm = $('.form-elem__dropdown-wrapper-room');

    const onMinus = (e) => {
        let number = e.target.nextElementSibling.innerText;
        number != 0 ? --e.target.nextElementSibling.innerText: false;
        onSetResult();
        disabledButton();
    }
    const onPlus = (e) => {
        ++e.target.previousElementSibling.innerText;
        onSetResult();
        disabledButton();
    }
    
    $('.bedroom-minus').on('click', onMinus);
    $('.bedroom-plus').on('click', onPlus);
    $('.bed-minus').on('click', onMinus);
    $('.bed-plus').on('click', onPlus);
    $('.bathroom-minus').on('click', onMinus);
    $('.bathroom-plus').on('click', onPlus);

    const onSetResult = () => {

        for (let i = 0; i < roomForm.length; i++) {
            const changeBoxItems = roomForm[i].querySelectorAll('.form-elem__change-box');
            let finalResult = '';
            const inputRoom = roomForm[i].querySelector('input');
            for (let y = 0; y < changeBoxItems.length; y++) {
                const quantityItems = changeBoxItems[y].querySelector('.quantity').innerText;
                const benefitsItems = changeBoxItems[y].previousElementSibling.innerText;
                if (quantityItems !== '0') {
                    finalResult += `${quantityItems} ${benefitsItems} `;
                }
            }
            inputRoom.setAttribute('placeholder', finalResult);
        }
    }
}