function generarNro(){
  return Math.floor(Math.random() * 12);
}
function generarRandom(){
  let binarios =["1000100010010000","0000000000000000","1111111111111111","0101010101010101","1000010000000101",
                  "0100001111101000","1100000010000000","1010100010000000","1000000000001000", "0000000001000001",
                    "0100001001011100","0000000000000001"];

 let operators= document.querySelectorAll('.operatorCalc')
 operators.forEach(function(element){
   element.value=binarios[generarNro()];
 })                
}

function calcAnd(operando1, operando2){
 return operando1 & operando2;
} 

function calcOr(operando1, operando2){
  return operando1 | operando2;
}


function corregir(operator1,operator2,result, calc) {
  var rtaOperacion=0;
  var operando1=0;
  var operando2=0;
  var operandos1=document.getElementById(operator1).value;
  var operandos2=document.getElementById(operator2).value; 
  var rtaAlumnos =document.getElementById(result); 
   operando1=parseInt(operandos1,2);
   operando2=parseInt(operandos2,2);
   rtaAlumno=parseInt(rtaAlumnos.value,2);
   rtaOperacion= calc(operando1, operando2);
   if(rtaAlumno == rtaOperacion){
    rtaAlumnos.classList.add('is-valid');
  }else{
    rtaAlumnos.classList.add('is-invalid');
  }
}

function corregirAll(calc){
  corregir('operator1','operator2','result1',calc);
  corregir('operator3','operator4','result2',calc);
  corregir('operator5','operator6','result3',calc);
  corregir('operator7', 'operator8','result4',calc);
  corregir('operator9', 'operator10','result5',calc);
  corregir('operator11', 'operator12','result6',calc);
}


function corregirAllOr(){
  corregirAll(calcOr);
  alert('Las respuestas marcadas en Verde son Correctas, las marcadas en Rojo incorrectas');
  if (window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
  }
}

function corregirAllAnd(){
  corregirAll(calcAnd);
  alert('Las respuestas marcadas en Verde son Correctas, las marcadas en Rojo incorrectas');
  if (window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
  }
}

function loadand(){
  document.getElementById('titulo').innerText="Ejercicios AND"
}

document.getElementById('ejerciciosand').onload="loadand()";


let results=document.querySelectorAll('.result');
results.forEach(function(element){
   element.addEventListener('keypress', function(event){
    var caracter = event.charCode || event.keyCode
    if((caracter < 48 || caracter > 49) || event.target.value.length >15){
      event.preventDefault();
    }
  }
  )
}
)

document.querySelector('.btn').addEventListener('click',function(e){
  e.preventDefault();
  corregirAllOr()

})
