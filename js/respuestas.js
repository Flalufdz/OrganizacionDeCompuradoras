function generarNro(){
  return Math.floor(Math.random() * 12);
}
function generarRandom(){
  let binarios =["1000100010010000","0000000000000000","1111111111111111","0101010101010101","1000010000000101",
                  "0100001111101000","1100000010000000","1010100010000000","1000000000001000", "0000000001000001",
                    "0100001001011100","0000000000000001"];
 alert('Random anda');
 document.getElementById('operator1').value=binarios[generarNro()];
 document.getElementById('operator2').value=binarios[generarNro()];
 document.getElementById('operator3').value=binarios[generarNro()];
 document.getElementById('operator4').value=binarios[generarNro()]; 
 document.getElementById('operator5').value=binarios[generarNro()]; 
 document.getElementById('operator6').value=binarios[generarNro()]; 
 document.getElementById('operator7').value=binarios[generarNro()]; 
 document.getElementById('operator8').value=binarios[generarNro()]; 
 document.getElementById('operator9').value=binarios[generarNro()]; 
 document.getElementById('operator10').value=binarios[generarNro()]; 
 document.getElementById('operator11').value=binarios[generarNro()]; 
 document.getElementById('operator12').value=binarios[generarNro()]; 
}
function corregirAnd(operator1,operator2,result) {
	alert("se ejecuto la funcion");
  var rtaOperacion=0;
  var operando1=0;
  var operando2=0;
  var operandos1=document.getElementById(operator1).value;
  var operandos2=document.getElementById(operator2).value; 
  var rtaAlumnos =document.getElementById(result); 
   operando1=parseInt(operandos1,2);
   operando2=parseInt(operandos2,2);
   rtaAlumno=parseInt(rtaAlumnos.value,2);
   rtaOperacion=operando1 & operando2;
   if(rtaAlumno == rtaOperacion){
     alert('bien');
    rtaAlumnos.classList.add('is-valid');
  }else{
    alert(mal);
    rtaAlumnos.classList.add('is-invalid');
  }
}

function corregirAllAnd(){
  corregirAnd('operator1','operator2','result1');
  corregirAnd('operator3','operator4','result2');
  corregirAnd('operator5','operator6','result3');
  corregirAnd('operator7', 'operator8','result4');
  corregirAnd('operator9', 'operator10','result5');
  corregirAnd('operator11', 'operator12','result6');
}
function corregirOr(operator1,operator2,result,msjOk,msjError) {
	alert("se ejecuto la funcion");
  var rtaOperacion=0;
  var operando1=0;
  var operando2=0;
  var operandos1=document.getElementById(operator1).value;
  var operandos2=document.getElementById(operator2).value; 
  var rtaAlumnos =document.getElementById(result).value; 
   operando1=parseInt(operandos1,2);
   operando2=parseInt(operandos2,2);
   rtaAlumno=parseInt(rtaAlumnos,2);
   alert("op1 "+operando1+", op2 "+operando2+" = "+rtaAlumnos);
   rtaOperacion=operando1 | operando2;
   alert(rtaAlumno+" = "+rtaOperacion);
  mostrarMensaje(rtaAlumno,rtaOperacion,msjOk,msjError);
}

function corregirAllOr(){
  corregirOr('operator1','operator2','result1','msjOk1','msjError1');
  corregirOr('operator3','operator4','result2','msjOk2','msjError2');
  corregirOr('operator5','operator6','result3','msjOk3','msjError3');
  corregirOr('operator7', 'operator8','result4','msjOk4','msjError4');
}