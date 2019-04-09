var pos=null;
var total=0;
var arreglo = {};

function validarnumero(numero, pos){
    if (!/^([0-9])*$/.test(numero)) {
        alert("ingrese solo numeros")
        if (pos==1) {
            document.getElementById("precio").value = ""
            document.getElementById("precio").focus();
        } else {
            document.getElementById("cantidad").value = ""
            document.getElementById("cantidad").focus();
        }
        
    }



}


function iniciar(){
    if (document.getElementById("cliente").value == "" || document.getElementById("dni").value == "" || document.getElementById("precio").value == ""
    || document.getElementById("cantidad").value == "") {
        alert("falta ingresar datos");
    }else{
        var arreglo = leerdatos();
            registrarcliente(arreglo);
            registrarplato(arreglo);
            pagar();
            limpiar();
            document.getElementById("cliente").focus();
    }

}

function leerdatos(){


    var p = parseInt(document.getElementById("precio").value);
    var c = parseInt(document.getElementById("cantidad").value);
    importe = p*c;
    total += importe;

    
    arreglo["ticket"] = "001";
    arreglo["mesa"] = document.getElementById("mesa").value;
    arreglo["cliente"] = document.getElementById("cliente").value;
    arreglo["dni"] = document.getElementById("dni").value;
    arreglo["plato"] = document.getElementById("plato").value;
    arreglo["precio"] = document.getElementById("precio").value;
    arreglo["cantidad"] = document.getElementById("cantidad").value;
    arreglo["importe"] = importe;
    
    return arreglo;

}

function registrarcliente(arreglo){
   
   
    
    var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    var newRow = tabla.insertRow(tabla.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = arreglo.ticket;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = arreglo.mesa;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = arreglo.cliente;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = arreglo.dni;
}

/*function validarcliente(arreglo){

    areglos.forEach(validfuntion);
    arreglo.cliente.forEach(item, index,){
        if (arreglo.cliente == arr) {
        
        } else {
            
        }
    };
    
    array.forEach(element => {
        
    });
}*/

function registrarplato(arreglo){
    var tabla1 = document.getElementById("tabla2").getElementsByTagName('tbody')[0];
    var newRow1 = tabla1.insertRow(tabla1.length);

    cell1 = newRow1.insertCell(0);
    cell1.innerHTML = arreglo.plato;
    cell2 = newRow1.insertCell(1);
    cell2.innerHTML = arreglo.precio;
    cell3 = newRow1.insertCell(2);
    cell3.innerHTML = arreglo.cantidad;
    cell4 = newRow1.insertCell(3);
    cell4.innerHTML = arreglo.importe;
    cell5 = newRow1.insertCell(4);
    cell5.innerHTML = '<td><button onclick="remove(this)">remove</button> </td>';
}

function remove(td){
    var resta;
    if (confirm("Desea eliminar?")) {
        row = td.parentElement.parentElement;
        document.getElementById("tabla2").deleteRow(row.rowIndex);
        resta= parseInt(row.cells[3].innerHTML);
        total -= resta;
        pagar();
        
    }   
}
function pagar(){

    document.getElementById("pagar1").value = total;

}

function limpiar(){
    
    document.getElementById("cliente").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    
}



