describe("US-0002 - Login na plataforma", () => {
  it("Deve realizar login com credenciais válidas", () => {
    cy.visit("/minha-conta/");

    cy.get("#username").type("edsonk2@gmail.com");

    cy.get("#password").type("teste@teste");

    cy.get('[name="login"]').click();

    cy.url().should("include", "/minha-conta/");
  });

  it("Não deve realizar login com senha inválida", () => {
    cy.visit("/minha-conta/");

    cy.get("#username").type("edsonk2@gmail.com");

    cy.get("#password").type("senha_incorreta");

    cy.get('[name="login"]').click();

    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("contain", "A senha fornecida para o e-mail");
  });

  it("Não deve realizar login sem informar a senha", () => {
    cy.visit("/minha-conta/");

    cy.get("#username").type("edsonk2@gmail.com");

    cy.get('[name="login"]').click();

    cy.get(".woocommerce-error").should("be.visible");
  });

  it("Não deve realizar login sem informar o usuário", () => {
  cy.visit("/minha-conta/");

  cy.get("#password")
    .type("teste@teste");

  cy.get('[name="login"]')
    .click();

  cy.get(".woocommerce-error")
    .should("be.visible")
    .and("contain", "Nome de usuário é obrigatório");
});


});
