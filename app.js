// https://api.telegram.org/bot5153582861:AAHkFNFmvgNamLBhCq7EuESN1kMENmrGp-Q/getUpdates

// https://api.telegram.org/bot5153582861:AAHkFNFmvgNamLBhCq7EuESN1kMENmrGp-Q/sendMessage?chat_id=545470180&text=h1_im_a_bot
// https://api.telegram.org/bot5153582861:AAHkFNFmvgNamLBhCq7EuESN1kMENmrGp-Q/sendMessage?chat_id=932551831&text=Abubakir aka qalesiz
// https://api.telegram.org/bot5153582861:AAHkFNFmvgNamLBhCq7EuESN1kMENmrGp-Q/sendMessage?chat_id=932551831&text=Abubakir aka qachon kelasizlar

// https://api.telegram.org/bot5153582861:AAHkFNFmvgNamLBhCq7EuESN1kMENmrGp-Q/
// getUpdates 

document.querySelector('button').onclick = function () {
    let message = document.querySelector('.message').value;
    const token = '5153582861:AAHkFNFmvgNamLBhCq7EuESN1kMENmrGp-Q';
     url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-528812606&text='
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url+message, true);
    xhttp.send();
} 
