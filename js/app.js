const subtotalInput = document.getElementById("sub-input");
const tipPercentInput = document.getElementById("tip-perc");
const displayTip = document.getElementById("the-tip");
const afterTip = document.getElementById("after-tip");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener('click', function(){
    //get value from the subtotal input
    const subtotal = subtotalInput.value;

    //get value from the tip percent
    //convert the tip percent into a decimal
    const tipPercent = tipPercentInput.value / 100;

    //multiply the subtotal with the percent
    const tip = subtotal * tipPercent;
    // alert(tip);

    //display the tip into the tip text area
    displayTip.innerHTML = "$" + tip.toFixed(2);

    //display the tip + subtotal amount area
    const total = parseFloat(subtotal) + parseFloat(tip);
    // alert(total);
    afterTip.innerHTML = "$" + total.toFixed(2);
    // alert(total);
});


