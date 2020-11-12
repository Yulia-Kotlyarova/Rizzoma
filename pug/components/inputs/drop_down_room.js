import { disabledButton } from './drop_helpers.js';

window.addEventListener("DOMContentLoaded", () => {
    let $room = jQuery.noConflict();
    console.log('room');
    const roomForm = $room('.form-elem__dropdown-wrapper-room');

    const onMinusRoom = (e) => {
        let number = e.target.nextElementSibling.innerText;
        number != 0 ? --e.target.nextElementSibling.innerText: false;
        onSetRoomResult();
        disabledButton();
    }
    const onPlusRoom = (e) => {
        ++e.target.previousElementSibling.innerText;
        onSetRoomResult();
        disabledButton();
    }
    
    $room('.bedroom-minus').on('click', onMinusRoom);
    $room('.bedroom-plus').on('click', onPlusRoom);
    $room('.bed-minus').on('click', onMinusRoom);
    $room('.bed-plus').on('click', onPlusRoom);
    $room('.bathroom-minus').on('click', onMinusRoom);
    $room('.bathroom-plus').on('click', onPlusRoom);

    const onSetRoomResult = () => {

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
})
