/// <reference types="cypress" />

describe('testes de contato', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("contato realizado corretamente", () => {
    //acessa modal de contato
    cy.get(":nth-child(2) > .nav-link").click({ force: true });

    //digita informações
    cy.get("#recipient-email").type("joaopedrowanderley1@gmail.com");
    cy.get("#recipient-name").type("joao pedro");
    cy.get("#message-text").type("Ola")

    //clica no botao de enviar menssagem
    cy.get("button[type=button]").contains("Send message").click({ force: true });

    //recebe a mensagem de confirmação
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Thanks for the message!!");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("contato realizado com email invalido", () => {
    //acessa modal de contato
    cy.get(":nth-child(2) > .nav-link").click({ force: true });

    //digita informações
    cy.get("#recipient-email").type("teste@gmail.com");
    cy.get("#recipient-name").type("joao pedro");
    cy.get("#message-text").type("Ola");

    //clica no botao de enviar menssagem
    cy.get("button[type=button]")
      .contains("Send message")
      .click({ force: true });

    //recebe a mensagem de confirmação
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Thanks for the message!!");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("contato realizado com o campo de email nulo", () => {
    //acessa modal de contato
    cy.get(":nth-child(2) > .nav-link").click({ force: true });

    //digita informações
    cy.get("#recipient-name").type("joao pedro");
    cy.get("#message-text").type("Ola");

    //clica no botao de enviar menssagem
    cy.get("button[type=button]")
      .contains("Send message")
      .click({ force: true });

    //recebe a mensagem de confirmação
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Thanks for the message!!");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("contato realizado com campo de nome nulo", () => {
    //acessa modal de contato
    cy.get(":nth-child(2) > .nav-link").click({ force: true });

    //digita informações
    cy.get("#recipient-email").type("joaopedrowanderley1@gmail.com");
    cy.get("#message-text").type("Ola");

    //clica no botao de enviar menssagem
    cy.get("button[type=button]")
      .contains("Send message")
      .click({ force: true });

    //recebe a mensagem de confirmação
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Thanks for the message!!");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("contato realizado com campo de texto nulo", () => {
    //acessa modal de contato
    cy.get(":nth-child(2) > .nav-link").click({ force: true });

    //digita informações
    cy.get("#recipient-email").type("joaopedrowanderley1@gmail.com");
    cy.get("#recipient-name").type("joao pedro");

    //clica no botao de enviar menssagem
    cy.get("button[type=button]")
      .contains("Send message")
      .click({ force: true });

    //recebe a mensagem de confirmação
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Thanks for the message!!");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });
});