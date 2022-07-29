/// <reference types="cypress" />

describe('testes de finalizar compra', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Efetuando compra normalmente", () => {
    
    //Acessando janela de finalização
    cy.get("#cartur").click({ force: true });
    cy.get("button[type=button]")
      .contains("Place Order")
      .click({ force: true });
    
    //Prenchendo os dados
    cy.get("#name").type("Joao");
    cy.get("#country").type("Brasil");
    cy.get("#city").type("Pombal");
    cy.get("#card").type("1234");
    cy.get("#month").type("03");
    cy.get("#year").type("99");
    cy.get("button[type=button]").contains("Purchase").click({ force: true });

    //Comprovante
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.contain("Thank you")
      cy.get('[name="alert"]').click();
    });
  });

  it("Efetuando compra sem informar o nome", () => {
    //Acessando janela de finalização
    cy.get("#cartur").click({ force: true });
    cy.get("button[type=button]")
      .contains("Place Order")
      .click({ force: true });

    //Prenchendo os dados
    cy.get("#country").type("Brasil");
    cy.get("#city").type("Pombal");
    cy.get("#card").type("1234");
    cy.get("#month").type("03");
    cy.get("#year").type("99");
    cy.get("button[type=button]").contains("Purchase").click({ force: true });

    //Menssagem de erro
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equals("Please fill out Name and Creditcard.");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("Efetuando compra sem informar pais", () => {
    //Acessando janela de finalização
    cy.get("#cartur").click({ force: true });
    cy.get("button[type=button]")
      .contains("Place Order")
      .click({ force: true });

    //Prenchendo os dados
    cy.get("#name").type("Joao");
    cy.get("#city").type("Pombal");
    cy.get("#card").type("1234");
    cy.get("#month").type("03");
    cy.get("#year").type("99");
    cy.get("button[type=button]").contains("Purchase").click({ force: true });

    //Comprovante
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.contain("Thank you");
      cy.get('[name="alert"]').click();
    });
  });

  it("Efetuando compra sem informar a cidade", () => {
    //Acessando janela de finalização
    cy.get("#cartur").click({ force: true });
    cy.get("button[type=button]")
      .contains("Place Order")
      .click({ force: true });

    //Prenchendo os dados
    cy.get("#name").type("Joao");
    cy.get("#country").type("Brasil");
    cy.get("#card").type("1234");
    cy.get("#month").type("03");
    cy.get("#year").type("99");
    cy.get("button[type=button]").contains("Purchase").click({ force: true });

    //Comprovante
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.contain("Thank you");
      cy.get('[name="alert"]').click();
    });
  });

  it("Efetuando compra sem informar o nome", () => {
    //Acessando janela de finalização
    cy.get("#cartur").click({ force: true });
    cy.get("button[type=button]")
      .contains("Place Order")
      .click({ force: true });

    //Prenchendo os dados
    cy.get("#name").type("Joao");
    cy.get("#country").type("Brasil");
    cy.get("#city").type("Pombal");
    cy.get("button[type=button]").contains("Purchase").click({ force: true });

    //Menssagem de erro
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equals("Please fill out Name and Creditcard.");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });
});
