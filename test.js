//General
const input = document.querySelectorAll("input");
const text = document.querySelectorAll(".result");
var arr1 = [];
var arr2 = [];
var arr3 = [];

function getResult(result, i) {
  let div = document.createElement("div");
  text[i].after(div);
  div.className = "text";
  if (i < 2) {
    div.innerHTML += `[ ` + result + ` ]`;
  } else {
    div.innerHTML += result;
  }
}
//-----------------------------------------------------------------------------------------
//Task1
//const arr = [1, 3, 5, 4, 5, 7];
function setArr1() {
  var inp = input[0].value.split(',').map(item => Number(item));
  arr1 = inp;
  console.log("arr1", arr1);
  getTask1(arr1);
}

function getTask1(arr){
  if (arr.length<3) {
    result.push("Длина массива менше 3");
  } else {
    setResult1(arr);
  } 
}

function setResult1(arr){
  var result = [];
  for (let i=1; i<(arr.length - 1); i++) {
    if (((arr[i] > arr[i-1])&&(arr[i] > arr[i+1])) || ((arr[i] < arr [i-1])&&(arr[i] < arr [i+1]))) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  console.log ("result", result);
  getResult(result, 0);
}
//---------------------------------------------------------------------------------------------
//Task2
/* const matr = [
  [1, 2, 3, 2, 7],
  [4 ,5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];
 */
function setArr2() {
  var inp1 = input[1].value.split(',').map(item => Number(item));
  var inp2 = input[2].value.split(',').map(item => Number(item));
  var inp3 = input[3].value.split(',').map(item => Number(item));
  if ((inp1.length == inp2.length) && (inp1.length == inp3.length)) {
    arr2.push(inp1, inp2, inp3);
    getTask2(arr2);
  } else {
    let res = `Введите значения матрицы 3хN`;
    getResult(res, 1);
  }
}

function getTask2(matr) {
  var result=[];
  for (let n=0; n<(matr[0].length-2); n++) {
    var mas = [];
    for (let i=0; i<matr.length; i++) {
      mas.push(matr[i][n], matr[i][n+1], matr[i][n+2]);
    }
    console.log(mas);
    setResult2(mas);
    result.push(setResult2(mas));
  }
  console.log(result);
  getResult(result, 1);
}

function setResult2 (mas){
  for (let j=1; j<=9; j++) {
    if (mas.indexOf(j) == -1) {
      return false;
    }
  }
  return true;
}
//-------------------------------------------------------------------------------------------------
//Task3
/*const str = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "as"],
  ["He", "loves", "tacos"],
];
const form = ["LEFT", "RIGHT", "LEFT"];
const lim = 16;*/

function setArr3() {
  var inp1 = input[4].value.split(',').map(item => String(item));
  var inp2 = input[5].value.split(',').map(item => String(item));
  var inp3 = input[6].value.split(',').map(item => String(item));
  var form = input[7].value.toLocaleUpperCase().split(',').map(item => String(item));
  var lim = input[8].value;
  if (inp1.length && inp2.length && inp3.length &&form.length && lim) {
    arr3.push(inp1, inp2, inp3);
    console.log("arr3", arr3);
    console.log("form", form);
    console.log("lim", lim);
    getTask3(arr3, form, lim);
  } else {
    let res = `Введите текст`;
    getResult(res, 2);
  }
}

function getTask3(str, form, lim) {
  for (let i=0; i<str.length; i++) {
    let sum ="";
    for (let j=0; j<str[i].length; j++) {
      if((sum.length+str[i][j].length)<=lim){
        if (form[i] == "LEFT") {sum = sum + (str[i][j])+ ` `;} else {sum = sum + ` ` + (str[i][j]);}
      } else {
        setStr(sum, form[i], lim);
        if (form[i] == "LEFT") {sum = (str[i][j])+ ` `;} else {sum = (str[i][j]);}
      }
    }
    setStr(sum, form[i], lim);
  }
}

function setStr(sum, form, lim) {
  let res;
  let N = (lim - sum.length);
  let space = " ";
  let spstr = space.repeat(N);
  spstr.length = N;
  if (form == "LEFT") {
    res = `<pre>*` + sum + spstr + `*</pre>`;
  } else {
    res = `<pre>*` + spstr + sum + `*</pre>`;
  }
  getResult(res, 2);
  const str=[res, form];
  console.log("str",str);
}
