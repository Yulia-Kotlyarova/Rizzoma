$(document).ready(
    $('.menu_icon').on('click', function() {
        $('.menu__list').toggleClass('hidden')
        $('.menu_icon').toggleClass('menu-icon_open')
    })
)