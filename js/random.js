let randomColor=()=>{
    let r= Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
let buttons=document.querySelectorAll("button");

for(button of buttons){
    button.addEventListener("click",colorize)
}


let h1s=document.querySelectorAll("h1");

for(h1 of h1s){
    h1.addEventListener("click",colorize)
}

function colorize(){
    this.style.backgroundColor=randomColor();
    this.style.color=randomColor();
}


// RAINBOW 

//Using Callbacks
/*
const delayedColorChange = (newColor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
        doNext && doNext();
    },delay)
}


delayedColorChange("red",1000,() =>{
    delayedColorChange("orange",1000,()=>{
        delayedColorChange("yellow",1000,()=>{
            delayedColorChange("green",1000,()=>{
                delayedColorChange("blue",1000,()=>{
                    delayedColorChange("indigo",1000,()=>{
                        delayedColorChange("violet",1000,()=>{
        
                        })
                    })
                })
            })
        })
    })
});
*/




// Using async

let delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

async function rainbow(){
    await delayedColorChange("red",1000)
    await delayedColorChange("orange",1000)
    await delayedColorChange("yellow",1000)
    await delayedColorChange("green",1000)
    await delayedColorChange("blue",1000)
    await delayedColorChange("indigo",1000)
    await delayedColorChange("violet",1000)
    return "All done"
}
rainbow().then(()=> console.log("end of rainbow"))



