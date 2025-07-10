document.getElementById('addMoney-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const ammount= document.getElementById("ammount").value;
    const convertAmmount= parseFloat(ammount);
    const pin= document.getElementById("pin").value;
    const convertPin= parseInt(pin);
    const mainBalance= document.getElementById("main-balance").innerText;
    const convertMainBalance=parseFloat(mainBalance);

    if(convertPin===1234){
        const sum= convertMainBalance + convertAmmount;
        document.getElementById('main-balance').innerText=sum;
    }
    else{
        alert("invalid pin")
    }
})