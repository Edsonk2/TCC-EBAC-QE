\# Testes Mobile - TCC EBAC QE



Projeto de automação mobile desenvolvido para o TCC de Engenheiro de Qualidade de Software da EBAC.



\## Escopo



O escopo deste projeto contempla a automação do Catálogo de Produtos do aplicativo EBAC Shop.



\## Plataforma



\- iOS

\- XCUITest

\- Appium

\- WebdriverIO

\- Mocha

\- Sauce Labs



\## Testing Pattern



Foi utilizado o padrão Page Object Model (POM), separando a interação com as telas da implementação dos casos de teste.



Estrutura principal:



\- `test/pageobjects/` - Page Objects das telas

\- `test/specs/` - casos de teste automatizados

\- `config/` - configurações de execução



\## Cenários automatizados



\### Catálogo de Produtos



1\. Deve visualizar os detalhes de um produto.

2\. Deve permitir pesquisar outro produto no catálogo.



Os cenários realizam pesquisa de produtos e validação das informações apresentadas na tela de detalhes.



\## Execução



A execução remota é configurada para utilizar o Sauce Labs.



A plataforma é definida pela variável de ambiente `PLATFORM`.



Para iOS, a configuração utiliza:



\- XCUITest

\- iPhone

\- Sauce Labs



\## Observação sobre o aplicativo



Os arquivos binários do aplicativo (`.ipa`, `.zip`, `.aab` e diretórios `.app`) não são versionados neste repositório.



A configuração de automação referencia o aplicativo disponibilizado no ambiente de execução remoto.



Arquivos de credenciais e chaves de assinatura também não são versionados.



\## Evidências



Os resultados da execução dos testes podem ser apresentados por meio dos relatórios gerados pelo WebdriverIO/Allure e pelas evidências do ambiente Sauce Labs.

