$(document).ready(function () {
    renderCadastroForm();
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        var loginData = {
            email: username,
            senha: password
        };

        $.ajax({
            url: '/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            success: function (response) {
                alert('Login realizado com sucesso!');
            },
            error: function (error) {
                alert('Ocorreu um erro ao realizar o login.');
            }
        });
    });
});