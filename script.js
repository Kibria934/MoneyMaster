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

        // Total expeses calculates        
                const sum = getValueAndFloat('food') + getValueAndFloat('rent') +  getValueAndFloat('cloths');
                 expensesText = sum;
        expenses.innerText = expensesText;
        console.log(expenses.innerText);
          // Total balance calculates
                const minusResult = parseFloat(income.value) - parseFloat(expenses.innerText);
        balance.innerText = minusResult;

        // --------------------Error problme------------------------------
        // Income box error
                if (typeof ((parseFloat(income.value))) != 'number' || isNaN(income.value) == true || income.value == '' || parseFloat(income.value) < 0) {
                balance.innerText = ''
                alert('Please valid number in income box')
        }
        // Input box error

        if (getValue('food') == '' || getValue('rent') == '' || getValue('cloths') == '') {
                expenses.innerText = '';
                balance.innerText = '';
                alert('Plese fill all input box')

        }  
                if (isNaN(getValueAndFloat('food')) == true || isNaN(getValueAndFloat('rent')) == true || isNaN(getValueAndFloat('cloths')) == true || (getValueAndFloat('food'))<0 || (getValueAndFloat('rent'))<0 || (getValueAndFloat('cloths'))<0) {
                expenses.innerText = '';
                balance.innerText = '';
                alert('Plese enter valid number in input field')
        }
        if (sum > income.value) {
                balance.innerText = '';
                expenses.innerText = '';
                                console.log(expenses.innerText);

                alert('Your cost is grater than your income')
        }
  
})
document.getElementById('save-btn').addEventListener('click', function () {
                let savingResult = parseFloat(income.value) * (parseFloat(save.value)) / 100;
        
        if (savingResult > balance.innerText ) {
                 alert('You have no enough balance')
                savingResult = '';
        }
        else if (typeof ((parseFloat(save.value))) != 'number' || isNaN(save.value)==true || save.value == ''|| parseFloat(save.value) <0) {
                savingAmount.innerText = '';
                remaining.innerText = '';
                alert('Please enter a valid number')
        } 
        else {
                
                savingAmount.innerText = savingResult;
                const finaleResult = balance.innerText - savingAmount.innerText;
                remaining.innerText = finaleResult;     
               
        }
        
        
        
})