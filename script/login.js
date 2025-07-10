document.getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const pin = document.getElementById("pin").value;

    const convertAccountNumber = parseInt("accountNumber");
    const convertPinNumber = parseInt(pin);

    if (accountNumber.length === 11) {
      if (convertPinNumber === 1234) {
        window.location.href="./main.html"
      } else {
        alert("invalid pin number");
      }
    } else {
      alert("invalid account number");
    }
  });
