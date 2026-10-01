describe("US-0001 - Adicionar item ao carrinho", () => {
  it("Deve adicionar um produto ao carrinho", () => {
    cy.visit("/product/aero-daily-fitness-tee/");

    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Brown").click();

    cy.get(".single_add_to_cart_button").click();

    cy.get(".woocommerce-message > .button")
      .should("be.visible")
      .and("contain", "Ver carrinho");
  });

  it("Deve adicionar o produto com outra combinação de opções", () => {
    cy.visit("/product/aero-daily-fitness-tee/");

    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Black").click();

    cy.get(".single_add_to_cart_button").click();

    cy.get(".woocommerce-message > .button")
      .should("be.visible")
      .and("contain", "Ver carrinho");
  });

  it("Não deve permitir adicionar mais de 10 unidades do mesmo produto", () => {
    cy.visit("/product/aero-daily-fitness-tee/");

    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Brown").click();

    cy.get("input.qty").clear().type("11");

    cy.get(".single_add_to_cart_button").click();

    cy.get(".woocommerce-message").should("not.contain", "11 ×");
  });

  it("Deve aplicar 10% de desconto para compras entre R$ 200 e R$ 600", () => {
    cy.visit("/product/aero-daily-fitness-tee/");

    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Brown").click();

    cy.get("input.qty").clear().type("9");

    cy.get(".single_add_to_cart_button").click();

    cy.get(".woocommerce-message > .button").should("be.visible").click();

    cy.contains("R$194,40").should("be.visible");
  });

  it("Deve aplicar 15% de desconto para compras acima de R$ 600", () => {
    cy.visit("/product/ingrid-running-jacket/");

    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Red").click();

    cy.get("input.qty").clear().type("8");

    cy.get(".single_add_to_cart_button").click();

    cy.get(".woocommerce-message > .button").should("be.visible").click();

    cy.contains("R$571,20").should("be.visible");
  });
});
