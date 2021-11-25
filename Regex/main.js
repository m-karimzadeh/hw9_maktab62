function passwordRegex(pass){
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\+\)\()])(?=.{8,})/;
    
    return pattern.test(pass);
}

function checkPassword(pass = ''){
    if(pass.length === 0){
        $('#passwordLabel, .passwordIcon').removeClass('colorRed colorGreen').addClass('colorBlue')
        $('#passwordHelp').text('Password input is empty').removeClass('colorRed colorGreen').addClass('text-secondary')

    }else if(passwordRegex(pass)){
        $('#passwordLabel, .passwordIcon').removeClass('colorRed colorBlue').addClass('colorGreen')
        $('#passwordHelp').text('Good :D').removeClass('colorRed text-secondary').addClass('colorGreen')

    }else{
        $('#passwordLabel, .passwordIcon').removeClass('colorGreen colorBlue').addClass('colorRed')
        $('#passwordHelp').text('Min 8 char with at insert one capital letter, a number and a special character').removeClass('colorGreen text-secondary').addClass('colorRed')
    }
}

checkPassword()

$(document).ready(function(){
    $('#passwordInput').on("keyup keydown keypress", function(){
        var thisPass = $(this).val();
        checkPassword(thisPass)
    });
    
    $('#hiddenPasswordIcon').click(function(){
        $('#hiddenPasswordIcon').hide();
        $('#showPasswordIcon').show();

        $('#passwordInput').attr('type', 'text');
    })

    $('#showPasswordIcon').click(function(){
        $('#showPasswordIcon').hide();
        $('#hiddenPasswordIcon').show();

        $('#passwordInput').attr('type', 'password');
    })
})
