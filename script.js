

function expensesvalue(cost) {
        const input = document.getElementById(cost);
        const InputValue = input.value;
        return InputValue;
}
function expenses() {
         const totalExpenses = document.getElementById('total-expenses');
        const totalExpensesText = totalExpenses.innerText;
        return totalExpensesText;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
        const food = expensesvalue('food-input');
        const rent = expensesvalue('rent-input');
        const cloths = expensesvalue('cloths-input');
        const foodValue = parseFloat(food);
        const rentValue = parseFloat(rent);
        const clothsValue = parseFloat(cloths);
        let totalExpenses = expenses();
        
        // expenses input box error hadlling
        if (isNaN(food) == true || food<0 || isNaN(rent)==true || rent <0 || isNaN(cloths)==true || cloths<0) {
                alert('Plese enter valid number')
        } if (food == '' && rent != '' && cloths != '') {
               alert('Please fill up food input box')
       }
         if (food != '' && rent == '' && cloths != '') {
               alert('Please fill up rent input box')
       }
         if (food != '' && rent != '' && cloths == '') {
               alert('Please fill up cloths input box')
        } if (food == '' && rent == '' && cloths == '' || (food == '' && rent == '' && cloths != '') || (food == '' && rent != '' && cloths == '') || (food != '' && rent == '' && cloths == '')) {
                 alert('please fill these input box')
         }
         else {
                const sum = foodValue + rentValue + clothsValue;
                //  let totalExpenses = sum;
                 const expenses = document.getElementById('total-expenses');
                 expensesText= expenses.innerText;
                 expensesText = sum;
                 expenses.innerText = expensesText;
       }
})