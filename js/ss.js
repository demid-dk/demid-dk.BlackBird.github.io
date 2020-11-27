$(document).ready(()=>{
ss()
function ss(){
    $('#img img').outerHeight($('#header').height()-40)
    $('#ytFrame').outerHeight(window.innerHeight - window.innerHeight*0.3)
    $('#ytFrame').outerWidth((window.innerWidth-10)-(window.innerWidth-10)*0.3)
}

$("#theme").click(()=>{
    $("#custom").toggleClass("show")
})
$("#l1").click(()=>{
    $(document.body.children).toggleClass("st1")
    $(document.body.children).toggleClass("l1")
})
})
// function resizeIframe(obj) {
//     if (obj.contentWindow.document.body) {
//         if (obj.clientHeight < obj.contentWindow.document.body.scrollHeight) {
//             $(obj).animate({ 'height': obj.contentWindow.document.body.scrollHeight + 10 });
//             setTimeout(function () { resizeIframeTuning(obj) }, 400);
//         }
//     }
// }
// function resizeIframeTuning(obj) {
//     if (obj && obj.contentWindow && obj.contentWindow.document && obj.contentWindow.document.body.clientWidth < obj.contentWindow.innerWidth) {
//         $(obj).animate({ 'height': obj.clientHeight + 20 }, 100);
//         setTimeout(function () { resizeIframeTuning(obj) }, 100);
//     }
// }
