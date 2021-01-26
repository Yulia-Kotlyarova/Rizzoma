import { disabledButton, onMinus, onPlus } from './drop_helpers.js';

$(document).ready(() => {
    let $guest = jQuery.noConflict();
    const clearBtn = $guest(`[data-action = 'clear']`);
    const setResultBtn = $guest(`[data-action = 'set-result']`);
    const guestsForm = $guest('.form-elem__dropdown-wrapper-guest');
    
    $guest('.adult-minus').on('click', onMinus);
    $guest('.adult-plus').on('click', onPlus);
    $guest('.children-minus').on('click', onMinus);
    $guest('.children-plus').on('click', onPlus);
    $guest('.baby-minus').on('click', onMinus);
    $guest('.baby-plus').on('click', onPlus);

    disabledButton();

    const onClear = (dropdownMenu) => {
        const quantity = dropdownMenu.querySelectorAll('.quantity');
        quantity.forEach((el) => {
            el.innerText = 0;
        });
        disabledButton();
        onSetResult();
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
        let dropdownMenu = $guest('.form-elem__dropdown-guests')[i];
        clearBtn[i].addEventListener('click', () => onClear(dropdownMenu));
        setResultBtn[i].addEventListener('click', () => onSetResult(dropdownMenu));
    }
    onSetResult();
})
