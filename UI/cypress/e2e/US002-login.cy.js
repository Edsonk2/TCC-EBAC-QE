import LoginPage from "../pages/login.page";

describe("US-0002 - Login na plataforma", () => {

  it("Deve realizar login com credenciais válidas", () => {
    LoginPage.visitar();

    LoginPage.preencherUsuario("edsonk2@gmail.com");
    LoginPage.preencherSenha("teste@teste");
    LoginPage.clicarLogin();

    cy.url().should("include", "/minha-conta/");
  });

  it("Não deve realizar login com senha inválida", () => {
    LoginPage.visitar();

    LoginPage.preencherUsuario("edsonk2@gmail.com");
    LoginPage.preencherSenha("senha_incorreta");
    LoginPage.clicarLogin();

    LoginPage.mensagemErro()
      .should("be.visible")
      .and("contain", "A senha fornecida para o e-mail");
  });

  it("Não deve realizar login sem informar a senha", () => {
    LoginPage.visitar();

    LoginPage.preencherUsuario("edsonk2@gmail.com");
    LoginPage.clicarLogin();

    LoginPage.mensagemErro()
      .should("be.visible");
  });

  it("Não deve realizar login sem informar o usuário", () => {
    LoginPage.visitar();

    LoginPage.preencherSenha("teste@teste");
    LoginPage.clicarLogin();

    LoginPage.mensagemErro()
      .should("be.visible")
      .and("contain", "Nome de usuário é obrigatório");
  });

});