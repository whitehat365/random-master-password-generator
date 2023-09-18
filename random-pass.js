var alertbox = document.querySelector('.alertbox')

function getPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() *  chars.length); //math.floor returns the largest integer less than or equal to a given number.
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value = password;
    alertbox.innerHTML = "New Password Copied: <br>" + password;
}
function copyPassword(){
    var copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertbox.classList.toggle('active');
    setTimeout(function(){
        alertbox.classList.toggle('active')
    },2000)

}