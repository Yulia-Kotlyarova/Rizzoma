// "use strict";
// console.log(pagination());
// $("#pagination__wrapper").pagination({
//   items: 100,
//   itemsOnPage: 12
// });
// $("#pagination__wrapper").pagination('selectPage', pageNumber = 1);
// $("#pagination__wrapper").pagination('getCurrentPage');

$('#light-pagination').pagination({

  // Total number of items that will be used to calculate the pages.
  items: 180, 

  // Number of items displayed on each page.
  itemsOnPage: 12, 

  // If specified, items and itemsOnPage will not be used to calculate the number of pages.
  // pages: 0, 

  // How many page numbers should be visible while navigating. Minimum allowed: 3 (previous, current & next)
  // displayedPages: 5, 

  // How many page numbers are visible at the beginning/ending of the pagination.
  edges: 2,

  // Enables start/end edge
  useStartEdge : true,
  useEndEdge : true,

  // Which page will be selected immediately after init.
  currentPage: 0, 

  // Uses anchor links or spans
  useAnchors: true,

  // A string used to build the href attribute, added before the page number.
  hrefTextPrefix: "#page-", 

  // Another string used to build the href attribute, added after the page number.
  hrefTextSuffix: '', 

  // Text to be display on the previous button.
  // prevText: "Prev", 

  // Text to be display on the next button.
  nextText: "Next", 

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
