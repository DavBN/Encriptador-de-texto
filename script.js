// Función de encriptación
function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

// Función de desencriptación
function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

// Función que verifica las mayúsculas y no dejar escribir con ellas
function hasUpperCase(text) {
    return /[A-Z]/.test(text);
}


function showAlert(message) {
    const alertModal = document.getElementById('alert-modal');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertModal.style.display = "block";


    document.getElementById('close-alert').onclick = function() {
        alertModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == alertModal) {
            alertModal.style.display = "none";
        }
    };
    setTimeout(function() {
        alertModal.style.display = "none";
    }, 3000);
}


document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    if (hasUpperCase(inputText)) {
        showAlert("Por favor, ingrese solo letras minúsculas.");
        return;
    }
    let encryptedText = encrypt(inputText.toLowerCase());
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    if (hasUpperCase(inputText)) {
        showAlert("Por favor, ingrese solo letras minúsculas.");
        return;
    }
    let decryptedText = decrypt(inputText.toLowerCase());
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    showAlert("Texto copiado");
});

