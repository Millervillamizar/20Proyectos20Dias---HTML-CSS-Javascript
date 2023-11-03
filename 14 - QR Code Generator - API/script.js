let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function isValidURL(url) {
    // Expresión regular para verificar si la cadena es una URL válida
    const urlPattern = /^(https?:\/\/)?([^\s.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return urlPattern.test(url);
}

function generateQR() {
    if (isValidURL(qrText.value)) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        alert("Please Enter a Valid URL");
    }
}

function clearInput() {
    qrText.value = ""; // Limpia el valor del campo de entrada
    qrImage.src = ""; // Limpia la imagen del QR
    imgBox.classList.remove("show-img"); // Oculta la imagen
}
