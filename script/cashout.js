document.getElementById("cashout-btn").addEventListener('click',function(event){
    event.preventDefault()
    const cashOutAmount= document.getElementById('cash-out-amount').value;
    const convertedAmount = parseFloat(cashOutAmount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)
    const mainBlance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBlance);

        if(convertedPin===1234){
            const minusAmount =convertedAmount - convertedMainBalance;
            document.getElementById('main-balance').innerText = minusAmount;
        }
        else{
            alert("Please enter valid pin")
        }
})