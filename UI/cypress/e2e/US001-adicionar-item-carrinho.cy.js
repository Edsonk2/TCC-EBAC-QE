
import ProductPage from "../pages/product.page";

describe("US-0001 - Adicionar item ao carrinho", () => {

  it("Deve adicionar o Aero Daily Fitness Tee tamanho M e cor Brown ao carrinho", () => {
    ProductPage.visitar();

    ProductPage.selecionarTamanho("M");
    ProductPage.selecionarCor("Brown");
    ProductPage.definirQuantidade(1);
    ProductPage.adicionarAoCarrinho();

    ProductPage.mensagemCarrinho()
      .should("be.visible")
      .and("contain", "Ver carrinho");
  });

  it("Deve adicionar o Aero Daily Fitness Tee tamanho S e cor Black ao carrinho", () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    ProductPage.visitar();

    ProductPage.selecionarTamanho("S");
    ProductPage.selecionarCor("Black");
    ProductPage.definirQuantidade(1);
    ProductPage.adicionarAoCarrinho();

    ProductPage.mensagemCarrinho()
      .should("be.visible")
      .and("contain", "Ver carrinho");
  });

  it("Não deve permitir adicionar mais de 10 unidades do mesmo produto", () => {
    ProductPage.visitar();

    ProductPage.selecionarTamanho("M");
    ProductPage.selecionarCor("Brown");
    ProductPage.definirQuantidade(11);
    ProductPage.adicionarAoCarrinho();

    ProductPage.abrirCarrinho();

    cy.contains("11 × Aero Daily Fitness Tee")
      .should("not.exist");
  });

  it("Deve aplicar 10% de desconto para compras entre R$200 e R$600", () => {
    ProductPage.visitar();

    ProductPage.selecionarTamanho("M");
    ProductPage.selecionarCor("Brown");
    ProductPage.definirQuantidade(9);
    ProductPage.adicionarAoCarrinho();

    ProductPage.abrirCarrinho();

    ProductPage.totalCarrinho()
      .should("contain", "R$194,40");
  });

  it("Deve aplicar 15% de desconto para compras acima de R$600", () => {
    ProductPage.visitar("ingrid-running-jacket");

    ProductPage.selecionarTamanho("S");
    ProductPage.selecionarCor("Red");
    ProductPage.definirQuantidade(8);
    ProductPage.adicionarAoCarrinho();

    ProductPage.abrirCarrinho();

    ProductPage.totalCarrinho()
      .should("contain", "R$571,20");
  });

});

