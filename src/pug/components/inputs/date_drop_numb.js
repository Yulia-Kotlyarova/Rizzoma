window.addEventListener("DOMContentLoaded", () => {
    let obj = {};

    const allDoubleDatepicker = $('.input__drop-first');

    const datepickerAction = document.createElement('div');
    datepickerAction.classList.add('form-elem__action');
    datepickerAction.innerHTML = `<h3 class="clear" data-action="clear">очистить</h3>
                                    <h3 class = "set-result" data-action="set-result">применить</h3>`;

    const getBookSumBox = (inst, nights) => {
        const howMuchDays = inst.el.closest('.book-room__wrapper').querySelector('.book-room__days');
        howMuchDays.innerText = `${nights} суток`;
        const price = 9900;
        const sum = howMuchDays.closest('p').nextElementSibling.querySelector('.book-room__sum-result');
        sum.innerText = price * nights;
        const commission =  parseInt($('.book-room__commission-result')[0].innerText);
        const extraCommission = parseInt($('.book-room__services-result')[0].innerText);
        const finalSum = price * nights - commission - extraCommission;
        $('.book-room__final-sum')[0].innerText =  finalSum;
    }

    allDoubleDatepicker.each(function(){

        $(this).datepicker(
            {
            // inline: true,
            toggleSelected: false, // возможость выбрать одну дату два раза
            range: true,
            prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
            nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
            navTitles: {
                days: 'MM yyyy',
                },
                
            onShow(inst, animationCompleted) {
                inst.$datepicker.append(datepickerAction);
                datepickerAction.querySelector('.clear').onclick = () =>  this.clear();
                datepickerAction.querySelector('.set-result').onclick = () => this.hide();
            },

            onSelect: function (formattedDate, date, inst) { 

                let firstInput = inst.el;
                let lastInput = inst.el.closest('div').nextSibling.nextSibling.querySelector('.input__drop-last');
                
                firstInput.setAttribute("value", formattedDate.split(",")[0]); // add value in the first input
                formattedDate.split(",")[1] && lastInput.setAttribute("value", formattedDate.split(",")[1]); // if second date was chosen the value would be add
                let nights;
                nights =  date[1] && (date[1].getTime() - date[0].getTime())/(1000*60*60*24);
                date[1] && console.log('nights quantity:' + nights);

                if ( inst.el.closest('.book-room__wrapper')) {
                    getBookSumBox(inst, nights);
                }
            }
        })
    });


    // $('.input__drop-first').datepicker(
    //     {
    //     toggleSelected: false, // возможость выбрать одну дату два раза
    //     range: true,
    //     prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
    //     nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
    //     navTitles: {
    //         days: 'MM yyyy',
    //         },
    //     onSelect: function (formattedDate, date, inst) { 
    //         let firstInput = $('.form_elem__two-inputs-box')[0].querySelector('.input__drop-first');
    //         let lastInput = $('.form_elem__two-inputs-box')[0].querySelector('.input__drop-last');

    //         firstInput.setAttribute("value", formattedDate.split(",")[0]);
    //         formattedDate.split(",")[1] && lastInput.setAttribute("value", formattedDate.split(",")[1]); // if second date was chosen the value would be add
    //         let nights;
    //         nights =  date[1] && (date[1].getTime() - date[0].getTime())/(1000*60*60*24);
    //         date[1] && console.log('nights quantity:' + nights);
    //     }
    // })

    // $('.input__drop-text').datepicker(
    //     {
    //     toggleSelected: false, // возможость выбрать одну дату
    //     prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
    //     nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
    //     navTitles: {
    //         days: 'MM yyyy',
    //       },
    //     onSelect: function(formattedDate, date, inst) {
    //         obj.f = date;
    //         console.log(inst.el);
    //     }
    // })

    // $('.input__drop-numb').datepicker({
    //     toggleSelected: false, // возможость выбрать одну дату
    //     prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
    //     nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
    //     navTitles: {
    //         days: 'MM yyyy',
    //       },
    //       onSelect: function(formattedDate, date, inst) {
    //         console.log(date);
    //     }
    // })
    
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
