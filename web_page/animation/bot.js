var token = "5505793604:AAHW286PZbfqekol0-b16yf_igrSzPNKWJk";
var chat_id = -1001883265854;
var url = 'https://api.telegram.org/bot'+token+'/sendMessage';

document.getElementById('mail-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.querySelector('input[name="email"]').value;
    let message = "<b>Email: </b>";
    message += email;

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    }) 
        
    .then((res) => {
        this.mail.value = ''
    })
        
    .catch((error) => {
        warn.log(error);
    })

});