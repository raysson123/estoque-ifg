package br.edu.ifg.luziania.Model;

public enum TipoUsuario {
    ADMIN("Administrador"),
    GERENTE("Gerente"),
    USUARIO("Usuário"),
    VISITANTE("Visitante");

    private String descricao;

    TipoUsuario(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
