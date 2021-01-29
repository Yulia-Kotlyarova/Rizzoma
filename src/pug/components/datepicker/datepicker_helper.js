const doubleDatepickerOptions = {
    range: true,
    startDate: new Date('August 19, 2019'),
    prevHtml: `<i class = 'material-icons md-24 '> arrow_back </i>`,
    nextHtml: `<i class = 'material-icons md-24 '> arrow_forward </i>`,
    navTitles: {
        days: 'MM yyyy',
        }
}

const getBookSumBox = (inst, nights) => {
    const howMuchDays = inst.el.closest('.book-room__wrapper').querySelector('.book-room__days');
    const price = 9900;
    const sum = howMuchDays.closest('p').nextElementSibling.querySelector('.book-room__sum-result');
    let commission =  parseInt($('.book-room__commission')[0].innerText);
    let extraCommission = parseInt($('.book-room__services-result')[0].innerText);
    if (nights) {
    } else {
        nights = 4;
        
    }
    let finalSum = (price * nights) - commission + extraCommission;
    finalSum = finalSum.toLocaleString('ru') + '₽';
    howMuchDays.innerText = `${nights} суток`;
    sum.innerText = (price * nights).toLocaleString('ru') + '₽';
    $('.book-room__final-sum')[0].innerText =  finalSum;
};

const datepickerAction = document.createElement('div');
datepickerAction.classList.add('form-elem__action');
datepickerAction.innerHTML = `<h3 class="clear" data-action="clear">очистить</h3>
                                <h3 class = "set-result" data-action="set-result">применить</h3>`;

const addDatepickerAction = (that, inst) => {
    inst.$datepicker.append(datepickerAction);
    datepickerAction.querySelector('.clear').onclick = () =>  {

        that.clear();
    };
    datepickerAction.querySelector('.set-result').onclick = () => that.hide();
}

export { getBookSumBox, doubleDatepickerOptions, addDatepickerAction};
