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
function widthResize(){
    var width = window.innerWidth
    if (width <= 768) {
        $('#fr1_cc').removeClass('con_row').addClass('con_col');
    }
    else{
        $('#fr1_cc').addClass('con_row').removeClass('con_col');
    }
    if (width <= 1000) {
        $('#fr3_cc').addClass('con_row').removeClass('con_col');
        $('#fr4_cc').addClass('con_row').removeClass('con_col');
    }
    else{
        $('#fr3_cc').removeClass('con_row').addClass('con_col');
        $('#fr4_cc').removeClass('con_row').addClass('con_col');
    }
    if (width <= 600) {
        $('#fr7_cc').removeClass('con_row').addClass('con_col');
        $('#fr8_cc').removeClass('con_row').addClass('con_col');
        $('#fr9_cc').removeClass('con_row').addClass('con_col');
    }
    else{
        $('#fr7_cc').removeClass('con_col').addClass('con_row');
        $('#fr8_cc').removeClass('con_col').addClass('con_row');
        $('#fr9_cc').removeClass('con_col').addClass('con_row');
    }
}
setInterval(widthResize, 1000/60)