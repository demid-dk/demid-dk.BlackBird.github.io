
// получаем холст по ID
const cvs = document.getElementById("canvas"),
//контекст задаёт то, как мы будем использовать холст; здесь: в 2d
    ctx = canvas.getContext("2d");
//------------
var dvdImg = new Image()
dvdImg.src = "img/dvd.png"

const dvd = {
    x: 0,//cvs.width/2 - (150/2),
    y: 0,//cvs.height/2 - (150/2),
    width: 201,
    height: 128,
    color: "#",
    vx: 2,
    vy: 2, 
}
//------------//
function drawRect(x, y, w, h, color){
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}
function drawImg(img, x, y, w, h){
    ctx.drawImage(img, x, y, w, h)
}
//------------//
//переводим число в шестнадцатеричную систему и в строку 
function to0X(x){
    if (x < 10){
        return "0" + x.toString(16)
    }
    else if(x > 9 && x < 16){
        return "0" + x.toString(16)
    }
    else if(x == 0){
        return "00"
    }
    else {
        return x.toString(16)
    }
}
function changeColor(){
    dvd.color = "#" + to0X(r) + to0X(g) + to0X(b)
    // console.log(dvd.color)
}
function RGB(){
    rgb()
    changeColor()
}
function update(){
    //движение по координате x
    dvd.x += dvd.vx
    //движение по координате y
    dvd.y += dvd.vy
    //меняем цвет
    RGB()
    if(dvd.x + dvd.width > cvs.width || dvd.x < 0){
        dvd.vx = -dvd.vx
    }else if(dvd.y + dvd.height > cvs.height || dvd.y < 0){
        dvd.vy = -dvd.vy
    }
}
function render(){
    //задаём высоту и ширину холста на всё окно 
    cvs.width = window.innerWidth
    cvs.height = window.innerHeight
    //Фон
    drawRect(0, 0, cvs.width, cvs.height, "black")
    //Подсветка, а потом изображение
    drawRect(dvd.x, dvd.y, dvd.width, dvd.height, dvd.color)
    drawImg(dvdImg, dvd.x, dvd.y, dvd.width, dvd.height)
}
function run(){
    // console.log("r: ", r)
    // console.log("g: ", g)
    // console.log("b: ", b)
    // console.log("")
    update()
    render()
}
setInterval(run, 1000/60)
