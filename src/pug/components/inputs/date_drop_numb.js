window.addEventListener("DOMContentLoaded", () => {

    $('.input__drop-first').datepicker(
        {
        toggleSelected: false, // возможость выбрать одну дату два раза
        range: true,
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        navTitles: {
            days: 'MM yyyy',
            },
        onSelect: function (formattedDate, date, inst) { 
            let firstInput = $('.form_elem__two-inputs-box')[0].querySelector('.input__drop-first');
            let lastInput = $('.form_elem__two-inputs-box')[0].querySelector('.input__drop-last');

            firstInput.setAttribute("value", formattedDate.split(",")[0]);
            formattedDate.split(",")[1] && lastInput.setAttribute("value", formattedDate.split(",")[1]); // if second date was chosen the value would be add
            let nights;
            nights =  date[1] && (date[1].getTime() - date[0].getTime())/(1000*60*60*24);
            date[1] && console.log('nights quantity:' + nights);
        }
    })

    $('.input__drop-text').datepicker(
        {
        toggleSelected: false, // возможость выбрать одну дату
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        navTitles: {
            days: 'MM yyyy',
          },
        onSelect: function(formattedDate, date, inst) {
            obj.f = date;
            console.log(inst.el);
        }
    })

    $('.input__drop-numb').datepicker({
        toggleSelected: false, // возможость выбрать одну дату
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        navTitles: {
            days: 'MM yyyy',
          },
          onSelect: function(formattedDate, date, inst) {
            console.log(date);
        }
    })
    
    $('.input__drop-filter').datepicker({
        range: true, //выбор периода
        toggleSelected: false, // возможость выбрать одну дату
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        dateFormat: 'dd M',
        multipleDatesSeparator: " - ",
    })
})
