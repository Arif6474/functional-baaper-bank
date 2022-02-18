function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value ='';
   
    return inputValue;
}
function updateTotal(updateField, amount){
    const updateTotalField = document.getElementById(updateField);
    const updateTotalvalue = parseFloat(updateTotalField.innerText);
    const totalValue = updateTotalvalue + amount; 
    updateTotalField.innerText = totalValue;
}
function updateBalance(amount, isAdd){
    const updateTotalBalance = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(updateTotalBalance.innerText);
    let totalBalance
    if(isAdd == true){

         totalBalance = previousBalanceTotal + amount;
    }else{
         totalBalance = previousBalanceTotal - amount;
    }


    updateTotalBalance.innerText = totalBalance;
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount );
    updateBalance(amount, true);
   
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
})