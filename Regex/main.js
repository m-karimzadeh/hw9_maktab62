function passwordRegex(pass){
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\+\)\()])(?=.{8,})/;
    
    return pattern.test(pass);
}

function checkPassword(pass = ''){
    if(pass.length === 0){
        $('#passwordLabel').removeClass('text-danger text-success').addClass('text-primary')
        $('#passwordHelp').text('Password input is empty').removeClass('text-danger text-success').addClass('text-secondary')

    }else if(passwordRegex(pass)){
        $('#passwordLabel').removeClass('text-danger text-primary').addClass('text-success')
        $('#passwordHelp').text('Good :D').removeClass('text-danger text-secondary').addClass('text-success')

    }else{
        $('#passwordLabel').removeClass('text-success text-primary').addClass('text-danger')
        $('#passwordHelp').text('Min 8 char with at insert one capital letter, a number and a special character').removeClass('text-success text-secondary').addClass('text-danger')
    }
}

checkPassword()

$(document).ready(function(){
    $('#passwordInput').on("keyup keydown keypress", function(){
        var thisPass = $(this).val();
        checkPassword(thisPass)
    });
})
