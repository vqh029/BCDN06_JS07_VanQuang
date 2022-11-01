const btnNumN = document.getElementById("btn_b00");
const btnClear = document.getElementById("btn_clear");
var mangSoNguyen = [];

btnNumN.addEventListener("click", function (e) {
  e.preventDefault();
  const soN = parseInt(document.getElementById("b00-so-n").value);
  mangSoNguyen.push(soN);
  document.getElementById("value-rs0").innerHTML = mangSoNguyen;
});

btnClear.addEventListener("click", () => {
  mangSoNguyen = [];
  document.getElementById("value-rs0").innerHTML = mangSoNguyen;
});

// Bai 01
const btnTongSDuong = document.getElementById("btn_b01");

function TongSoDuong(array) {
  var S = 0;

  if (array.length == 0) {
    return "Mảng rỗng";
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      S += array[i];
    }
  }

  return S;
}

btnTongSDuong.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("value-rs1").innerHTML =
    "Tổng các số dương = " + TongSoDuong(mangSoNguyen);
});

//Bai 02
const btnSoDuong = document.getElementById("btn_b02");

function DemSoDuong(array) {
  var count = 0;

  if (array.length == 0) {
    return 0;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      count++;
    }
  }

  return count;
}

btnSoDuong.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("value-rs2").innerHTML =
    "Số số dương = " + DemSoDuong(mangSoNguyen);
});

//Bai 03
const btnSoNN = document.getElementById("btn_b03");

function TimSoNN(array) {
  var min = array[0];

  if (array.length == 0) {
    return "Mảng rỗng";
  }

  for (var i = 1; i < array.length; i++) {
    if(min > array[i]){
        min = array[i];
    }
  }

  return min;
}

btnSoNN.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("value-rs3").innerHTML =
    "Số nhỏ nhất = " + TimSoNN(mangSoNguyen);
});


//Bai 04
const btnSoDNN = document.getElementById("btn_b04");

function TimSoDNN(array) {
  var temp = [];
  var minD;

  if (array.length == 0) {
    return "Mảng rỗng";
  }

  for (var i = 0; i < array.length; i++) {
    if(array[i] >= 0){
        temp.push(array[i]);
    }
  }

  if(temp.length != 0){
    minD = temp[0];
  }
  else{
    return "Mảng toàn số nguyên âm"
  }

  for (var j = 1; j < temp.length; j++) {
    if(minD > temp[j]){
        minD = temp[j];
    }
  }

  return minD;
}

btnSoDNN.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("value-rs4").innerHTML =
    "Số dương nhỏ nhất = " + TimSoDNN(mangSoNguyen);
});

//Bai 05
const btnSoChanLast = document.getElementById("btn_b05");

function TimSoCL(array) {
  var lastEven;

  if (array.length == 0) {
    return "Mảng rỗng";
  }

  for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
        lastEven = array[i];
    }
  }

  return (lastEven == undefined? -1 : lastEven);
}

btnSoChanLast.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("value-rs5").innerHTML =
    "Số chẵn cuối cùng = " + TimSoCL(mangSoNguyen);
});


//Bai 06
const btnSwap = document.getElementById("btn_b06");

function SwapPos(vt1, vt2, array) {
  var temp;
  var arrayTemp = [];

  if (array.length == 0) {
    return "Mảng rỗng";
  }

  if(vt1 > array.length || vt2 > array.length){
    return "Invalid index";
  }

  for(var i = 0; i < array.length; i++){
    arrayTemp.push(array[i]);
  }

  temp = arrayTemp[vt1];
  arrayTemp[vt1] = arrayTemp[vt2];
  arrayTemp[vt2] = temp;

  return arrayTemp;
}

btnSwap.addEventListener("click", function (e) {
  e.preventDefault();

  const pos1 = parseInt(document.getElementById("b06-vt-1").value);
  const pos2 = parseInt(document.getElementById("b06-vt-2").value);

  document.getElementById("value-rs6").innerHTML =
    "Mảng sau khi đổi = " + SwapPos(pos1, pos2, mangSoNguyen);
});


//Bai 07
const btnSort = document.getElementById("btn_b07");

function SortAsc(array) {
    var temp;
    var arrayTemp = [];
    var arrayRs = [];
  
    if (array.length == 0) {
      return "Mảng rỗng";
    }

    for(var i = 0; i < array.length; i++){
        arrayTemp.push(array[i]);
    }

    for (var i = 0; i < arrayTemp.length; i++){
        for (var j = i + 1; j < arrayTemp.length; j++){
            if(arrayTemp[i] > array[j]){
                
            }
        }
    }

    return;
  }

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("value-rs7").innerHTML =
    "Mảng tăng dần = " + SortAsc(mangSoNguyen);
});