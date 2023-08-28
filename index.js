$(document).ready(function() {
    $("#ejecutar").click(function() {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var operacion = $("#operacion").val();
        var resultado = 0;

        switch (operacion) {
            case "add":
                resultado = num1 + num2;
                break;
            case "subtract":
                resultado = num1 - num2;
                break;
            case "multiply":
                resultado = num1 * num2;
                break;
            case "divide":
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    alert("ERROR.");
                    return;
                }
                break;
        }

        $("#result").val(resultado);
    });
});