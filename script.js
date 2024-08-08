//contagem 
function countdown() {
    const eventDate = new Date('September 13, 2024 00:00:00').getTime(); // Data de término ajustada para meia-noite
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


//mensagem
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    $.ajax({
        type: 'POST',
        url: 'https://api.sendgrid.com/v3/mail/send',
        headers: {
            'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            personalizations: [{ to: [{ email: 'eliasjunio.ribeiro95@gmail.com' }] }],
            from: { email: 'youremail@example.com' },
            subject: 'Mensagem do site',
            content: [{ type: 'text/plain', value: `Nome: ${name}\nMensagem: ${message}` }]
        })
    }).done(function() {
        alert('Mensagem enviada com sucesso!');
    }).fail(function() {
        alert('Erro ao enviar mensagem.');
    });
});

//chave PIX
function copyPix() {
    var copyText = document.getElementById("pixKey").innerText;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}