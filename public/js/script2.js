var email = document.getElementsByClassName( 'email ');

email[0].addEventListener( 'click', function() {
    var copyText = "jayden.wise@hotmail.com";

} );


var copyTextareaBtn = document.querySelector('.email-button');
var emailCopied = document.getElementById('email-confirmation');

emailCopied.addEventListener('click', function() {
})

copyTextareaBtn.addEventListener('click', function(event) {
    console.log("COpying text");
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    unfade(emailCopied);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});



function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
