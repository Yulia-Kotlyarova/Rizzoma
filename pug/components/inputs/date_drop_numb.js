window.addEventListener("DOMContentLoaded", () => {
    let obj = {};
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

// let diff =  Math.floor(( Date.parse(str2) - Date.parse(str1) ) / 86400000); 
