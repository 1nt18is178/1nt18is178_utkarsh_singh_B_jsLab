const b1 = document.getElementById("b-1");
const b2 = document.getElementById("b-2");
const b3 = document.getElementById("b-3");
const b4 = document.getElementById("b-4");
const b5 = document.getElementById("b-5");

let flag = false;

b1.addEventListener('mouseenter', ()=>{
    console.log("City");
});

b2.addEventListener('mouseenter', ()=>{
    console.log("Town");
});

b3.addEventListener('mouseenter', ()=>{
    console.log("garden area");
});

b4.addEventListener('mouseenter', ()=>{
    console.log("you have entered the castle");
});

b5.addEventListener('mouseenter', ()=>{
    console.log("Inner Castle, you will die for some reason");
});

b5.addEventListener('click', ()=>{
    flag = true;
   
})

b5.addEventListener('mouseleave', ()=>{
    if(!flag)
    {
        console.log("You Died.");
    }
    else{
        console.log("You're still alive! Good job.");
        flag=false;
    }
})