const request = require("supertest");
const app = require("../src/server");

describe("US-0003 - API de cupons", () => {
  it("Deve aplicar 10% de desconto entre R$ 200 e R$ 600", async () => {
    const response = await request(app).post("/coupons/apply").send({
      total: 216,
      coupon: "CUPOM10",
    });

    if (response.statusCode !== 200) {
      throw new Error(`Status inesperado: ${response.statusCode}`);
    }

    if (response.body.discountPercent !== 10) {
      throw new Error("Desconto de 10% não aplicado.");
    }

    if (response.body.total !== 194.4) {
      throw new Error("Total calculado incorretamente.");
    }
  });

  it("Deve aplicar 15% de desconto acima de R$ 600", async () => {
    const response = await request(app).post("/coupons/apply").send({
      total: 672,
      coupon: "CUPOM15",
    });

    if (response.statusCode !== 200) {
      throw new Error(`Status inesperado: ${response.statusCode}`);
    }

    if (response.body.discountPercent !== 15) {
      throw new Error("Desconto de 15% não aplicado.");
    }

    if (response.body.total !== 571.2) {
      throw new Error("Total calculado incorretamente.");
    }
  });

  it("Não deve aplicar CUPOM15 para valores de até R$ 600", async () => {
    const response = await request(app).post("/coupons/apply").send({
      total: 600,
      coupon: "CUPOM15",
    });

    if (response.statusCode !== 422) {
      throw new Error(`Status esperado: 422. Recebido: ${response.statusCode}`);
    }
  });

  it("Deve rejeitar cupom inválido", async () => {
    const response = await request(app).post("/coupons/apply").send({
      total: 216,
      coupon: "CUPOM_INVALIDO",
    });

    if (response.statusCode !== 404) {
      throw new Error(`Status esperado: 404. Recebido: ${response.statusCode}`);
    }

    if (response.body.error !== "Cupom inválido.") {
      throw new Error("Mensagem de erro incorreta.");
    }
  });
});
