const BASE_URL='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';
const dropdown=document.querySelectorAll('.dropdown select');
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


// dropdown.forEach((currency)=>{
//   console.log(currency)
// })
// for(code in countryList){
//   console.log(code)
// }

for(select of dropdown){
  // console.log(select)
  for(code in countryList){
    // console.log(code,countryList[code])
    let option=document.createElement('option');
    option.value=code;
    option.innerText=code;
    if(select.name=='from' && code=='USD'){
      option.selected='USD'
    }
    else if(select.name=='to' && code=='INR'){
      option.selected='INR'
    }
    select.append(option);
  }

  select.addEventListener('change',(event)=>{
    updateflag(event.target);
    // console.log(event.target);
  });
}

const updateflag=(target)=>{
        const flag=target.value
        // console.log(flag)
        const flagID=countryList[flag]
        // console.log(flagID)
        // const flagURL=`https://flagsapi.com/${flagID}/flat/64.png`
        const image=target.parentElement.querySelector('img');
        // image.src=flagURL;
        image.src=`https://flagsapi.com/${flagID}/flat/64.png`;
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  // console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  // console.log(response);
  let data = await response.json();
  //console.log(data);
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

btn.addEventListener("click", (evt) => {
  updateExchangeRate();
});
