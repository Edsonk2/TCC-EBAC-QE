class LoginPage {
  visitar() {
    cy.visit("/minha-conta/");
  }

  preencherUsuario(usuario) {
    cy.get("#username").type(usuario);
  }

  preencherSenha(senha) {
    cy.get("#password").type(senha);
  }

  clicarLogin() {
    cy.get('[name="login"]').click();
  }

  mensagemErro() {
    return cy.get(".woocommerce-error");
  }
}

export default new LoginPage();