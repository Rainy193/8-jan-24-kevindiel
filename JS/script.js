function square( )
{
var side,area;
side = parseInt(document.getElementById("first").value);
area = luas*luas; //Equation for Area of a square
document.getElementById("num").innerHTML="Luas Persegi adalah : "+area;
}

function keliling( )
{
var sisi,perimeter;
sisi = parseInt(document.getElementById("second").value);
perimeter = 4*sisi; //Equation for Perimeter of a squaredocument.getElementById("num1").innerHTML="Keliling Persegi adalah : "+perimeter;
document.getElementById("num1").innerHTML="Keliling Persegi adalah : "+perimeter;
}

function fun() {
    const first = document.querySelector('#first')
    first.value = null;
}

// Menangkap elemen-elemen HTML
const inputLuas = document.getElementById('luas');
const inputKeliling = document.getElementById('keliling');
const buttonHitungLuas = document.getElementById('HLuas');
const buttonHitungKeliling = document.getElementById('HKeliling');
const buttonResetLuas = document.getElementById('resetLuas');
const buttonResetKeliling = document.getElementById('resetKeliling');
const resultLuas = document.getElementById('resultLuas');
const resultKeliling = document.getElementById('resultKeliling');

// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    const sisi = parseFloat(inputLuas.value);
    if (!isNaN(sisi)) {
        const luas = sisi * sisi;
        resultLuas.textContent = `Luas Persegi: ${luas}`;
    } else {
        resultLuas.textContent = 'Masukkan nilai sisi yang valid.';
    }
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    const sisi = parseFloat(inputKeliling.value);
    if (!isNaN(sisi)) {
        const keliling = 4 * sisi;
        resultKeliling.textContent = `Keliling Persegi: ${keliling}`;
    } else {
        resultKeliling.textContent = 'Masukkan nilai sisi yang valid.';
    }
}

// Fungsi untuk mereset input dan hasil
function resetInputAndResult() {
    inputLuas.value = '';
    resultLuas.textContent = '';
    
    inputKeliling.value = '';
    resultKeliling.textContent = '';
}

// Menambahkan event listener pada tombol hitung luas
buttonHitungLuas.addEventListener('click', hitungLuas);

// Menambahkan event listener pada tombol hitung keliling
buttonHitungKeliling.addEventListener('click', hitungKeliling);

// Menambahkan event listener pada tombol reset luas
buttonResetLuas.addEventListener('click', resetInputAndResult);

// Menambahkan event listener pada tombol reset keliling
buttonResetKeliling.addEventListener('click', resetInputAndResult);
