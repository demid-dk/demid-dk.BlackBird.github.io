$(".buy_button").click(()=>{
    $("body").toggleClass("ov_hidden");
    $("#popup").toggleClass("popup")
    $("#popup").toggleClass("hidden")
    $("header").toggleClass("f34")
    $("header").toggleClass("c22")
})
$("#x").click(()=>{
    $("body").toggleClass("ov_hidden");
    $("#popup").toggleClass("popup")
    $("#popup").toggleClass("hidden")
    $("header").toggleClass("f34")
    $("header").toggleClass("c22")
})
$(window).resize(function () {
    var width = window.innerWidth
    if (width <= 768) {
        $('.content_con').removeClass('con_row').addClass('con_col');
    }
    else{
        $('.content_con').addClass('con_row').removeClass('con_col');
    }
});