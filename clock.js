var a = document.querySelectorAll(".main")
setInterval(()=>{
    let b = new Date()
    a[0].innerHTML = b.getHours()
    a[1].innerHTML = b.getMinutes()
    if(b.getSeconds()<10){
        a[2].innerHTML = "0" + b.getSeconds()
    }
    else{
        a[2].innerHTML = b.getSeconds()
    }
}
,1000)