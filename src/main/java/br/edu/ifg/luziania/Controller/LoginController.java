package br.edu.ifg.luziania.Controller;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/login")
public class LoginController {
    @Inject
    Template login;

    @GET
    public TemplateInstance showLoginPage() {
        return login.instance().data("title", "Login");
    }
}