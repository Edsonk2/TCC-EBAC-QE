class ProductPage {
  visitar(produto = "aero-daily-fitness-tee") {
    cy.visit(`/product/${produto}/`);
  }

  selecionarTamanho(tamanho) {
    cy.get(`.button-variable-item-${tamanho}`).click();
  }

  selecionarCor(cor) {
    cy.get(`.button-variable-item-${cor}`).click();
  }

  definirQuantidade(quantidade) {
    cy.get("input.qty").clear().type(quantidade);
  }

  adicionarAoCarrinho() {
    cy.get(".single_add_to_cart_button").click();
  }

  abrirCarrinho() {
    cy.get(".woocommerce-message > .button")
      .should("be.visible")
      .and("contain", "Ver carrinho")
      .click();
  }

  mensagemCarrinho() {
    return cy.get(".woocommerce-message");
  }

  totalCarrinho() {
    return cy.get(".order-total .amount");
  }
}

export default new ProductPage();
