window.onload =function(){
    addcolor()
}
for(let i=1;i<=50;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    box.style.borderRadius='50%';
    document.querySelector('.container').appendChild(box)
    box.style.cursor='pointer';
    box.addEventListener('click',()=>{
        console.log(box.innerHTML)
        navigator.clipboard.writeText(box.innerHTML)
        console.log("copied")
        toastr.success("now u can use it","copied to clipboard",{timeout:2000});
    });
}
const btn = document.querySelector('.btn')
const randomcolor = document.querySelectorAll('.box');

function RandomColorCode(){
    var chars ='1234567890abcdef';
    var colorLength = 6;
    var color= "";

    for(var i=0;i<colorLength;i++){
        var randomcolor =Math.floor(Math.random()*chars.length)
        color += chars.substring(randomcolor,randomcolor+1);
    }
    return '#' + color;
}

function addcolor(){
    randomcolor.forEach(e=>{
        var newColor = RandomColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML=newColor
    })
}