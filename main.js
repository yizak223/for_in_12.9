//1
const SAME_CLASS=document.querySelectorAll(".sameClass")

for (let i = 0; i < SAME_CLASS.length; i++) {
    console.log(SAME_CLASS[i]);
}
//2
const CLASS2=document.querySelectorAll('.t2')
const COLOR_CHANGE=document.querySelectorAll('button')
    
COLOR_CHANGE[0].addEventListener('click',

function () { 
    for (let i = 0; i < CLASS2.length; i++) {
        CLASS2[i].style='color:red;'
        } 
})

COLOR_CHANGE[1].addEventListener('click',

function () { 
    for (let i = 0; i < CLASS2.length; i++) {
        CLASS2[i].innerHTML=
        `
        <p>hellow</p>
        `
        } 
})
//3
