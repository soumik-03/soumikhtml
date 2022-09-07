

 
const tempload=()=>{
    let temp=document.getElementById('temp');
    temp.innerHTML="f2cb";
    setTimeout(()=>{
        temp.innerHTML="f2ca";
    },1000);
    setTimeout(()=>{
        temp.innerHTML='f2c9'
    },2000)
    setTimeout(() => {
        temp.innerHTML="f2c8"
    }, 3000);
    setTimeout(() => {
        temp.innerHTML="f2c7"
    }, 4000); 
}
tempload();
setInterval(tempload,5000);