const express = require("express");

const app = express();

app.use(express.json());

app.post("/coupons/apply", (req, res) => {
  const { total, coupon } = req.body;

  if (typeof total !== "number" || total < 0) {
    return res.status(400).json({
      error: "O total deve ser um número maior ou igual a zero.",
    });
  }

  if (coupon === "CUPOM10") {
    if (total >= 200 && total <= 600) {
      const discount = total * 0.1;
      return res.status(200).json({
        coupon: "CUPOM10",
        discountPercent: 10,
        discount,
        total: total - discount,
      });
    }

    return res.status(422).json({
      error:
        "O CUPOM10 só pode ser aplicado para valores entre R$ 200 e R$ 600.",
    });
  }

  if (coupon === "CUPOM15") {
    if (total > 600) {
      const discount = total * 0.15;
      return res.status(200).json({
        coupon: "CUPOM15",
        discountPercent: 15,
        discount,
        total: total - discount,
      });
    }

    return res.status(422).json({
      error: "O CUPOM15 só pode ser aplicado para valores acima de R$ 600.",
    });
  }

  return res.status(404).json({
    error: "Cupom inválido.",
  });
});

module.exports = app;
