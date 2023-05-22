function renderCadastroForm() {

    var col = $('<div class="cadatro"></div>');

    var title = $('<h2 class="text-center mt-4">Cadastro</h2>');
    var form = $('<form id="cadastroForm" class="mt-4"></form>');

    var nomeFormGroup = $('<div class="form-group"></div>');
    nomeFormGroup.append('<label for="nome">Nome:</label>');
    nomeFormGroup.append('<input type="text" class="form-control" id="nome" placeholder="Digite seu nome">');

    var emailFormGroup = $('<div class="form-group"></div>');
    emailFormGroup.append('<label for="email">E-mail:</label>');
    emailFormGroup.append('<input type="email" class="form-control" id="email" placeholder="Digite seu e-mail">');

    var senhaFormGroup = $('<div class="form-group"></div>');
    senhaFormGroup.append('<label for="senha">Senha:</label>');
    senhaFormGroup.append('<input type="password" class="form-control" id="senha" placeholder="Digite sua senha">');
    var senhaCofirmaFormGroup = $('<div class="form-group"></div>');
    senhaCofirmaFormGroup.append('<label for="senha">Comfirma Senha:</label>');
    senhaCofirmaFormGroup.append('<input type="password" class="form-control" id="Comfirmasenha" placeholder="Digite novamete sua senha">');

    form.append(nomeFormGroup);
    form.append(emailFormGroup);
    form.append(senhaFormGroup);
    form.append(senhaCofirmaFormGroup);
    form.append('<button type="submit" class="btn btn-primary">Cadastrar</button>');

    col.append(title);
    col.append(form);


    $('#redeLogin').append(col);
}
function renderLoginForm() {

    var col = $('<div class="login"></div>');

    var title = $('<h2 class="text-center mt-4">Login</h2>');
    var form = $('<form id="loginForm" class="mt-4"></form>');

    var usernameFormGroup = $('<div class="form-group"></div>');
    usernameFormGroup.append('<label for="username">Usuário:</label>');
    usernameFormGroup.append('<input type="text" class="form-control" id="username" placeholder="Digite seu usuário">');

    var passwordFormGroup = $('<div class="form-group"></div>');
    passwordFormGroup.append('<label for="password">Senha:</label>');
    passwordFormGroup.append('<input type="password" class="form-control" id="password" placeholder="Digite sua senha">');

    form.append(usernameFormGroup);
    form.append(passwordFormGroup);
    form.append('<button type="submit" class="btn btn-primary">Entrar</button>');

    col.append(title);
    col.append(form);
    $('#redeLogin').append(col);
}