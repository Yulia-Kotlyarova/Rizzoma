import { addDatepickerAction } from '../datepicker/datepicker_helper.js';

$(document).ready(function() {
    $('.card-calendar').datepicker({
        // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
        // minDate: new Date(),
        multipleDates: true,
        range: true, //выбор периода
        toggleSelected: false, // возможость выбрать одну дату
        inline: true, // видимость календаря всегда
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        navTitles: {
            days: 'MM </br> yyyy',
          },
        onSelect: function(formattedDate, date, inst) {
            console.log(date);
        },
    });
});
