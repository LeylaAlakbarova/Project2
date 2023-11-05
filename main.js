let add = document.querySelector('.add');
let tasks = document.querySelector('#tasks');
let remove = document.querySelector('.cross-icon')
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('.button');
let clearIcon = document.querySelector('.clear');

clearIcon.addEventListener('click', () => {
    ul.innerHTML = ''
tasks.style.display = 'none'
        })

clearIcon.addEventListener("mouseover", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.src="assets/x2.png";
     }
})
clearIcon.addEventListener("mouseout", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.src="assets/x.png";
     }
})

function addFunction(){
    if (input.value !== '' && input.value !== ' ') {
        let li = document.createElement('li');
        li.innerText = input.value.trim();
        ul.append(li);
        li.innerHTML +='<img class="image" src="assets/x.png">' 
        tasks.style.display = "block";
    }else{
        alert('Please enter something.');
    }
    input.value="";
}
btn.addEventListener("click", () => {
    addFunction()
})
ul.addEventListener("mouseover", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.src="assets/x2.png";
     }
})
ul.addEventListener("mouseout", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.src="assets/x.png";
     }
})
ul.addEventListener("click", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        if(ul.innerHTML.trim()===""){
            tasks.style.display = "none";
        }
    }
})

let sort = document.getElementById('img1');
let count = 0;
let clc = true
sort.addEventListener("click", ()=>{
    let arr=[];
    let listOfLI = document.getElementsByTagName('li');
    for(let elem of listOfLI){
        arr.push(elem.outerHTML)
    }
    
    if (true) {
        if (!clc) {
            sort.src = 'assets/asagi.png'
        }
        else {
            sort.src = 'assets/yuxari.png'
            
        }
    }
    else {
        if (clc) {           
            sort.src = 'assets/ascending.png'
        }
        else {
            sort.src = 'assets/descending.png'
        }
        
    }
    clc = !clc;
    
    if(count%2===0){
        arr.sort(function (a, b){
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        });
    }
    else if(count%2===1){
        arr.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        }).reverse()
    }
    count += 1;

    ul.innerHTML="";
    arr.forEach((item)=>{
        ul.innerHTML+=item
    })
})
let overflow = document.getElementById('overflow');
overflow.addEventListener("click", ()=>{
    if(overflow.innerText==="Overflow"){
        ul.parentElement.style.overflowY="scroll"
        ul.style.height='200px'
        overflow.innerText="No overflow"
    }
    else if(overflow.innerText==="No overflow"){
        ul.parentElement.style.overflowY="hidden"
        ul.style.height='fit-content'
        overflow.innerText="Overflow"
    }
})
sort.addEventListener('mouseover',() =>{
    if(clc){
        sort.src = './assets/asagi.png'
    }else{
        sort.src = './assets/yuxari.png' 

    }
    console.log(sort.src)
})
sort.addEventListener('mouseout',() =>{
    if(clc){
        sort.src = './assets/ascending.png'
    }else{
        sort.src = './assets/descending.png' 
    }
    console.log(sort.src)
})
input.addEventListener('keydown', (event)=>{
    if(event.key=="Enter"){
        addFunction()
    }      
})