let url="https://cat-fact.herokuapp.com/facts"
console.log(url); 
let button=document.querySelector('#but');
let para=document.querySelector('#text');
async function  getFacts(){
    let pro=await fetch(url)
    console.log(pro);
    let obj=await pro.json();
    para.innerText = obj[0].text;
}

button.addEventListener('click',getFacts);
