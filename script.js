// common value set
function getValue(name) {
        const input = document.getElementById(name+'-input');
        const InputValue = input.value;    
        return InputValue;
}
//common value turn into float
function getValueAndFloat(cost) {
        const InputValue = getValue(cost);
        const floatInput = parseFloat(InputValue);
        return floatInput;
}

 const expenses = document.getElementById('total-expenses');
expensesText = expenses.innerText;
const balance = document.getElementById('balance');
 balanceText = balance.innerText;
const income = document.getElementById('income');
const incomeText = income.value;
const save = document.getElementById('saving-input');
const saveValue = save.value;
const savingAmount = document.getElementById('saving-amount');
const saveAmountText = savingAmount.innerText;
const remaining = document.getElementById('remaining');
const remainingBalance = remaining.innerText; 



document.getElementById('calculate-btn').addEventListener('click', function () {

                if (typeof(getValueAndFloat('food')) != 'number' || isNaN((getValue('food'))) == true || income.value == '' || getValueAndFloat('food') < 0) {
                balance.innerText = '';
                        alert('Please valid number in income box')
                console.log('This is hapend');        
        }
        // Total expeses calculates        
                const sum = getValueAndFloat('food') + getValueAndFloat('rent') +  getValueAndFloat('cloths');
                 expensesText = sum;
                expenses.innerText = expensesText;
        // Total balance calculates
                const minusResult = parseFloat(income.value) - parseFloat(expenses.innerText);
        balance.innerText = minusResult;
        // console.log(typeof (parseFloat(income.value)));
        
        if (typeof ((parseFloat(income.value))) != 'number' || isNaN(income.value) == true || income.value == '' || parseFloat(income.value) < 0) {
                balance.innerText = '';
                alert('Please valid number in income box')
            
        }

        // console.log(isNaN(getValue('food')));
        
})
document.getElementById('save-btn').addEventListener('click', function () {
                let savingResult = parseFloat(income.value) * (parseFloat(save.value)) / 100;
        
        if (savingResult > balance.innerText ) {
                 alert('sorry')
                savingResult = '';
        }
        else if (typeof ((parseFloat(save.value))) != 'number' || isNaN(save.value)==true || save.value == ''|| parseFloat(save.value) <0) {
                savingAmount.innerText = '';
                remaining.innerText = '';
                alert('Plese enter valid number')
        }
        else {
                
                savingAmount.innerText = savingResult;
                const finaleResult = balance.innerText - savingAmount.innerText;
                remaining.innerText = finaleResult;     
               
        }
        
        
        
})