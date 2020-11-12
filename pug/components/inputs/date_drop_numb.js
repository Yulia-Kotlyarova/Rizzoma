window.addEventListener("DOMContentLoaded", () => {
    // $drop_numb = jQuery.noConflict();
    $('.input__drop-text').datepicker({
        toggleSelected: false, // возможость выбрать одну дату
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        navTitles: {
            days: 'MM yyyy',
          },
        //   clearButton: true,
    })

    $('.input__drop-numb').datepicker({
        toggleSelected: false, // возможость выбрать одну дату
        prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
        nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
        navTitles: {
            days: 'MM yyyy',
          },
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
