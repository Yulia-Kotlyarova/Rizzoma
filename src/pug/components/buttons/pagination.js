// const numbersData = [
//   {
//       number: 888,
//       price: 9900,
//       photo: '../src/assets/img/number_880.png',
//       response_number: 145,
//       arrows: true,
//       lux: true,
//       rate: 5,
//   },
//   {
//       number: 840,
//       price: 9900,
//       photo: '../src/assets/img/number_840.png',
//       response_number: 65,
//       arrows: false,
//       lux: false,
//       rate: 4,
//   },
//   {
//       number: 980,
//       price: 8500,
//       photo: '../src/assets/img/number_980.png',
//       response_number: 35,
//       arrows: false,
//       lux: false,
//       rate: 3,
//   },
//   {
//       number: 856,
//       price: 8500,
//       photo: '../src/assets/img/number_980.png',
//       response_number: 35,
//       arrows: false,
//       lux: false,
//       rate: 3,
//   },

// ]

// let pagesQuantity = function(numbersData, pageSize = 5){
//   let pages = numbersData.length / pageSize;
//   let result = [];
//   for (let i = 1; i < pages; i +1) {
//       result.push(i);
//   }
//   return result;
// }

// function simpleTemplate(data) {
//   let cardTemplate = '<ul>';
//   $.each(data, function(index, item){
//     console.log(data, item);
//       cardTemplate += '<li>'+ item.number +'</li>';
//   });
//   cardTemplate += '</ul>';
//   return cardTemplate;
// }


// // "use strict";
// // console.log(pagination());
// $("#pagination__wrapper").pagination({
//   items: 100,
//   itemsOnPage: 12
// });
// $("#pagination__wrapper").pagination('selectPage', pageNumber = 1);
// $("#pagination__wrapper").pagination('getCurrentPage');

// // import './pagination.scss';

$(document).ready(function() {

  $('#light-pagination').pagination({

    // Total number of items that will be used to calculate the pages.
    items: 180, 
  
    // Number of items displayed on each page.
    itemsOnPage: 12, 
  
    // If specified, items and itemsOnPage will not be used to calculate the number of pages.
    // pages: 0, 
  
    // How many page numbers should be visible while navigating. Minimum allowed: 3 (previous, current & next)
    displayedPages: 3, 
  
    // How many page numbers are visible at the beginning/ending of the pagination.
    edges: 1,
  
    // Enables start/end edge
    useStartEdge : true,
    useEndEdge : true,
  
    // Which page will be selected immediately after init.
    currentPage: 1, 
  
    // Uses anchor links or spans
    useAnchors: true,
  
    // A string used to build the href attribute, added before the page number.
    hrefTextPrefix: "#page-", 
  
    // Another string used to build the href attribute, added after the page number.
    hrefTextSuffix: '', 
  
    // Text to be display on the previous button.
    // prevText: "Prev", 
  
    // Text to be display on the next button.
    nextText: `<i class="material-icons md-24 ">arrow_forward</i>`, 
  
    // Ellipse Character
    ellipseText: '&hellip;',
    ellipsePageSet: true,
  
    // list style
    listStyle: '',
  
    // The class of the CSS theme:
    // "light-theme", "compact-theme", and "dark-theme"
    // cssStyle: "light-theme", 
  
    // Set to false if you don't want to select the page immediately after click.
    selectOnClick: true,
  
    // Next button at front.
    nextAtFront: false,
  
    // Inverts page order
    invertPageOrder: false
  
  });
});

// $(".next").html('<i class="material-icons md-24 ">arrow_forward</i>') ;
