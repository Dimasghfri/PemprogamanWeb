function performSum() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Mohon masukkan angka dengan benar!";
    } else {
        var sum = num1 + num2;
        document.getElementById("result").innerHTML = "Hasil: " + sum;
    }
}

function resetForm() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").innerHTML = "Hasil:";
}