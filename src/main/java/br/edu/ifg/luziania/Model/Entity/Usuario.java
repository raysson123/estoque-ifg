package br.edu.ifg.luziania.Model.Entity;

import br.edu.ifg.luziania.Model.TipoUsuario;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String senha;
    private String nomeUsuario;
    private TipoUsuario tipoUsuario;

    // Construtores, getters e setters

    public Usuario() {
    }

    public Usuario(String email, String senha, String nomeUsuario, TipoUsuario tipoUsuario) {
        this.email = email;
        this.senha = senha;
        this.nomeUsuario = nomeUsuario;
        this.tipoUsuario = tipoUsuario;
    }

    // Métodos getters e setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public TipoUsuario getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(TipoUsuario tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
}
