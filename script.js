// Exibir aviso para telas maiores
$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() > 1024) {
            $('#screenSizeModal').modal('show');
        } else {
            $('#screenSizeModal').modal('hide');
        }
    }

    checkScreenSize();
    $(window).resize(checkScreenSize);
});

// Contagem regressiva
function countdown() {
    const eventDate = new Date('September 13, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').innerHTML = '0';
        document.getElementById('hours').innerHTML = '0';
        document.getElementById('minutes').innerHTML = '0';
        document.getElementById('seconds').innerHTML = '0';
    }
}

const countdownInterval = setInterval(countdown, 1000);

// Copiar chave PIX
function copyPix() {
    var copyText = document.getElementById("pixKey").innerText;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}
