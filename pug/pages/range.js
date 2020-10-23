$(".range__range").slider({
    min: 0,
    max: 15000,
    values: [5000, 10000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".range__result-text").text( `от ${ui.values[ 0 ]}₽ до ${ui.values[ 1 ]}₽` ); 
    }    
});
let result1= $(".range__range").slider("values", 0);
let result2= $(".range__range").slider("values", 1);
$(".range__thumb-left").val(result1);
$(".range__thumb-right").val(result2);
$( ".range__result-text" ).text(`от ${result1}₽ до ${result2}₽`);
$("#range__result").val($(".range__range").slider("value"));
