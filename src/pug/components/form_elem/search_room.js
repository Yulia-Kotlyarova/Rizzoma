import { getBookSumBox, doubleDatepickerOptions, addDatepickerAction } from '../datepicker/datepicker_helper.js';

$(document).ready(function() {

    $('.input__drop-first-search').datepicker(
        {
        ...doubleDatepickerOptions,

        onShow(inst, animationCompleted) {
            addDatepickerAction(this, inst)
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
