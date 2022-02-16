

function makeValue(cost) {
        const input = document.getElementById(cost);
        const InputValue = input.value;
        return InputValue;
}
 const expenses = document.getElementById('total-expenses');
expensesText = expenses.innerText;
const balance = document.getElementById('balance');
const balanceText = balance.innerText;
const income = document.getElementById('income');
const incomeText = income.value;
const save = document.getElementById('saving-input');
const saveValue = save.value;
const savingAmount = document.getElementById('saving-amount');
const saveAmountText = savingAmount.innerText;
const remaining = document.getElementById('remaining');
const remainingBalance = remaining.innerText; 



document.getElementById('calculate-btn').addEventListener('click', function () {
        const food = makeValue('food-input');
        const rent = makeValue('rent-input');
        const cloths = makeValue('cloths-input');
        const foodValue = parseFloat(food);
        const rentValue = parseFloat(rent);
        const clothsValue = parseFloat(cloths);



        // expenses input box error hadlling

                const sum = foodValue + rentValue + clothsValue;
                //  let totalExpenses = sum;
                 expensesText = sum;
                 expenses.innerText = expensesText;
        
         const minusResult = parseFloat(income.value) - parseFloat(expenses.innerText);
        balance.innerText = minusResult;

})
document.getElementById('save-btn').addEventListener('click', function () {
        const savingResult = parseFloat(income.value) * (parseFloat(save.value)) / 100;
        savingAmount.innerText = savingResult;
        const finaleResult = balance.innerText - savingAmount.innerText;
        remaining.innerText = finaleResult;
        
})