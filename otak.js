
function masuk() {
    var masuk = document.getElementById("masuk");
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    if (masuk) {
        login.style.display = "block";
        register.style.display = "none";
    }
}
function daftar() {
    var masuk = document.getElementById("masuk");
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    if (masuk) {
        login.style.display = "none";
        register.style.display = "block";
    }
}
function simpan() {
    
    var data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
    };
    localStorage.setItem("data", JSON.stringify(data));
    if (data.email == "" || data.username == "" || data.password == "") {
        alert("Data tidak boleh kosong");
    }
    else {
        alert("Data berhasil disimpan silahkan login !!");
    }
}  

let data = JSON.parse(localStorage.getItem("data"));
let conten = document.getElementById("conten");
conten.textContent=`Selamat datang ${data.username} terimakasih telah berkunjung di web gabut.com semoga harimu menyneangkan dan bahgia`;
conten.style.color = "white";
conten.style.textAlign = "center";
conten.style.fontFamily = "Arial, sans-serif";
conten.style.boxSizing = "border-box";

function login(event) {
    event.preventDefault();

    var data = JSON.parse(localStorage.getItem("data"));
    if (!data) {
        alert("Data tidak ditemukan. Silakan registrasi dulu.");
        return;
    }

    var username = document.getElementById("nama").value;
    var password = document.getElementById("pw").value;

    if (data.username === username && data.password === password) {
        setTimeout(() => {
            window.location.href = "conten.html";
        }, 2000);
    }
    else if (data.username !== username) {
        alert("Username tidak ditemukan");
    }
     else {
        alert("Username atau Password salah");
    }
}


