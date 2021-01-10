import { getBookSumBox, doubleDatepickerOptions, datepickerAction } from '../datepicker/datepicker_helper.js';

window.addEventListener("DOMContentLoaded", () => {

    $('.input__drop-first-search').datepicker(
        {
        ...doubleDatepickerOptions,

        onShow(inst, animationCompleted) {
            inst.$datepicker.append(datepickerAction);
            datepickerAction.querySelector('.clear').onclick = () =>  {

                this.clear();
            };
            datepickerAction.querySelector('.set-result').onclick = () => this.hide();
        },

        onSelect: function (fd, date, inst) { 

            $('.input__drop-first-search').val(fd.split(",")[0]);
            $('.input__drop-last-search').val(fd.split(",")[1]);
            
            let nights;
            nights =  date[1] && (date[1].getTime() - date[0].getTime())/(1000*60*60*24);
            date[1] && console.log('nights quantity:' + nights);

            if ( inst.el.closest('.book-room__wrapper')) { // TODO remove or contain with book_room.js
                getBookSumBox(inst, nights);
            }
        }
        })
});