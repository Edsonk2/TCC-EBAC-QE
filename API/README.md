# API - US-0003 Cupons

Projeto de testes automatizados da User Story US-0003 - API de cupons, desenvolvido para o TCC de Engenheiro de Qualidade de Software da EBAC.

## Objetivo

Validar as regras de negócio relacionadas à aplicação de cupons de desconto.

## Tecnologias

- Node.js
- Express
- Supertest
- Mocha
- JavaScript

## Cenários automatizados

1. Aplicação de 10% de desconto para valores entre R$ 200 e R$ 600.
2. Aplicação de 15% de desconto para valores acima de R$ 600.
3. Rejeição do CUPOM15 para valores de até R$ 600.
4. Rejeição de cupom inválido.

## Execução dos testes

Na pasta `API`, execute:

```powershell
npm test
```
