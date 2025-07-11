document.getElementById('addMoney-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    // const ammount= document.getElementById("ammount").value;
    // const convertAmmount= parseFloat(ammount);
    const amount= getinputbyid("ammount")
    // const pin= document.getElementById("pin").value;
    // const convertPin= parseInt(pin);
    const pin= getinputbyid("pin")

    const mainBalance= document.getElementById("main-balance").innerText;
    const convertMainBalance=parseFloat(mainBalance);

    if(pin===1234){
        const sum= convertMainBalance + amount;
        document.getElementById('main-balance').innerText=sum;
    }
    else{
        alert("invalid pin")
    }
})