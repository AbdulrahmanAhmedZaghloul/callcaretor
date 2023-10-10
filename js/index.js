let calcw = document.getElementById("calc");

function display(unm) {
  calcw.value += unm;
}

function Clear() {
  calcw.value = "";
}

function Delete() {
  calcw.value = calcw.value.slice(0, -1);
}
function calc() {
  try {
    calcw.value = eval(calcw.value);
  } catch (error) {
    calcw.value = "Error";
  }
}
// function getoper(oper){
//     screen.value=(oper)

//     console.log(oper)
//     }
