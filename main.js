document.querySelector('#button').addEventListener('click', showText);

function showText() {
    let message = document.querySelector('#textInput');
    let messageText = message.value;


    let output = document.querySelector('#output');
    output.textContent = messageText;
    
    document.getElementById('textInput').value = '';
}

