document.getElementById("add-money").style.display = "block";
document.getElementById("cash-out").style.display = "none";
document.getElementById("Transfer-Money").style.display = "none";
document.getElementById("Get-Bonus").style.display = "none";
document.getElementById("Pay-Bill").style.display = "none";
document.getElementById("Transactions-History").style.display = "none";

document.getElementById("addMoney-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
});

document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("add-money").style.display = "none";
});

document.getElementById
