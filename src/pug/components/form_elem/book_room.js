import { getBookSumBox, doubleDatepickerOptions, datepickerAction } from '../datepicker/datepicker_helper.js';

window.addEventListener("DOMContentLoaded", () => {

    $('.input__drop-first-room').datepicker(
        {
        ...doubleDatepickerOptions,

        onShow(inst, animationCompleted) {
            inst.$datepicker.append(datepickerAction);
            // let that = this;
            // let action = getDatePickerAction(that);
            // inst.$datepicker.append(action);

            datepickerAction.querySelector('.clear').onclick = () =>  this.clear();
            datepickerAction.querySelector('.set-result').onclick = () => this.hide();
        },

        onSelect: function (fd, date, inst) { 

            $('.input__drop-first-room').val(fd.split(",")[0]);
            $('.input__drop-last-room').val(fd.split(",")[1]);
            
            let nights;
            nights =  date[1] && (date[1].getTime() - date[0].getTime())/(1000*60*60*24);
            date[1] && console.log('nights quantity:' + nights);

            if ( inst.el.closest('.book-room__wrapper')) {
                getBookSumBox(inst, nights);
            }
        }
        })
});
