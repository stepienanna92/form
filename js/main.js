/*jslint browser: true*/
/*global
jQuery, $
*/

$(document).ready(function () {
    $('#signup').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                rangelength: [6, 12]
            },
            confirm_password: {
                equalTo: '#password'
            },
            spam: "required"
        },
        messages: {
            email: {
                required: "Podaj adres e-mail.",
                email: "To nie jest prawidłowy adres e-mail."
            },
            password: {
                required: 'Wpisz hasło.',
                rangelength: 'Hasło musi mieć od 6 do 12 znaków.'
            },
            confirm_password: {
                equalTo: 'Podane hasła nie pasują do siebie.'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
});
