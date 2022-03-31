function compute()
{
    var principal = document.getElementById("principal").value;

    /* Validation input. If the value entered by the user in principal
    is less than or equal to zero, the calculation does not execute */
    if (principal <= 0)
        alert("Enter a positive number");

    /*If the value entered by the user for principal is greater than zero,
     the calculation may be peformed */
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);

        // Convert the string values into Float
        var amount = parseFloat(principal) + parseFloat(interest);
        document.getElementById("result").innerHTML =
            "If you deposit " + "<mark>" + principal + "</mark>" +
            ",\<br\>at an interest rate of " + "<mark>" + rate +
            "%</mark>,\<br\>you will receive an amount of " + "<mark>" + amount +
            "</mark>" + ",\<br\>in the year " + year
    }
}

// Display rate dynamically
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        