import { disabledButton, onMinus, onPlus } from './drop_helpers.js';

window.onload = () => {
    const clearBtn = $(`[data-action = 'clear']`);
    const setResultBtn = $(`[data-action = 'set-result']`);
    const guestsForm = $('.form-elem__dropdown-wrapper-guest');
    
    $('.adult-minus').on('click', onMinus);
    $('.adult-plus').on('click', onPlus);
    $('.children-minus').on('click', onMinus);
    $('.children-plus').on('click', onPlus);
    $('.baby-minus').on('click', onMinus);
    $('.baby-plus').on('click', onPlus);

    disabledButton();

    const onClear = (dropdownMenu) => {
        const quantity = dropdownMenu.querySelectorAll('.quantity');
        quantity.forEach((el) => {
            el.innerText = 0;
        });
        disabledButton();
    }

    const onSetResult = () => {

        for (let i = 0; i < guestsForm.length; i++) {
            let quantityItems = guestsForm[i].querySelectorAll('.quantity');
            let finalQuantity = 0;
            for (let i = 0; i < quantityItems.length; i++) {
                finalQuantity += +quantityItems[i].innerText;
            }
            const inputGuest = guestsForm[i].querySelector('input');
    
            switch(finalQuantity) {
                case 0:
                    inputGuest.setAttribute('placeholder', 'Сколько гостей');
                    break;
                case 1:
                    inputGuest.setAttribute('placeholder', `${ finalQuantity} гость`);
                    break;
                case 2:
                    inputGuest.setAttribute('placeholder', `${ finalQuantity} гостя`);
                    break;
                default:
                    inputGuest.setAttribute('placeholder', `${ finalQuantity} гостей`);
                    break;
              }
        }
    }

    for (let i = 0; i < clearBtn.length; i++) {
        let dropdownMenu = $('.form-elem__dropdown-guests')[i];
        clearBtn[i].addEventListener('click', () => onClear(dropdownMenu));
        setResultBtn[i].addEventListener('click', () => onSetResult(dropdownMenu));
    }
    onSetResult();
}


