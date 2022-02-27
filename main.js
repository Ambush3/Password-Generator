// get the ID of pwd_txt and assign to password_ele
const password_ele = document.getElementById("pwd_txt");

// string of available letters
var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";
// special characters available
const special_chars = "@#$%^&*";

// grabbing the generate, clipboard, and slider ID's and assigning them
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
var pwd_length = document.getElementById("slider");

// click the generate button
generate.addEventListener('click', () => {
    let password = "";
    var checked = document.getElementById("checkbox").checked;
    var final_string = string;
    console.log(checked);
    // if checkbox is checked then add special characters 
    if (checked) {
        final_string += "@#$%^&*";
    }
    // i is assigned to 0, if i is less than pwd_length, then increment i
    for (var i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    password_ele.innerText = password;
    final_string = string;
});

// click the clipboard icon to copy password
clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(password_ele.innerText);
    alert("Password copied to clipboard");
});
