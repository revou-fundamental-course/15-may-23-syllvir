function HitungLuas(){ //untuk menghitung luas persegi
  var sisi = document.getElementById("sisi-luas").value;

  document.getElementById("output_luas").style.visibility = "visible";
  
  var L = sisi * sisi;
  document.getElementById("sisi-L").innerHTML = '<span>' + sisi + 'x' + sisi + '</span>';
  document.getElementById("result-luas").innerHTML = '<span>' + L + '</span>';
}

function HitungKeliling(){//untuk menghitung keliling persegi
  var sisi = document.getElementById("sisi-keliling").value;

  document.getElementById("output_keliling").style.visibility = "visible";
  
  var K = 4 * sisi;
  document.getElementById("sisi-K").innerHTML = '<span>' + '4' + 'x' + sisi + '</span>';
  document.getElementById("result-keliling").innerHTML = '<span>' + K + '</span>';
}

function ResetLuas() {//untuk reset input & hide hasil luas persegi
  document.getElementById("sisi-luas").value = "";
  document.getElementById("output_luas").style.visibility = "hidden";
}

function ResetKeliling() {//untuk reset input & hide hasil keliling persegi
  document.getElementById("sisi-keliling").value = "";
  document.getElementById("output_keliling").style.visibility = "hidden";
}

function ShowLuas() {//untuk show/hide Form luas persegi
  var x = document.getElementById("Luas");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

function ShowKeliling() {//untuk show/hide Form keliling persegi
  var x = document.getElementById("Keliling");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}