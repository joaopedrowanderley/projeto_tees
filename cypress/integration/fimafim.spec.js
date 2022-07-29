/// <reference types="cypress" />

describe("testes Fim a Fim", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("comprando normalmente", () => {
    //realizando cadastro
    cy.get("#signin2").click({ force: true });
    cy.get("#sign-username").type("jobs");
    cy.get("#sign-password").type("teste");
    cy.get("button[type=button]").contains("Sign up").click({ force: true });
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equals("Sign up successful.");
      cy.get('[name="alert"]').click();
    });

    //Realizando login
    cy.get("#login2").click({ force: true });
    cy.get("#loginusername").type("jobs");
    cy.get("#loginpassword").type("teste");
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //Escolhendo produto
    cy.get('[class="card-title"]').contains("Nexus").click({ force: true });
    cy.get('[class="col-sm-12 col-md-6 col-lg-6"]')
      .contains("Add to cart")
      .click({ force: true });

    //Finalizando compra
    cy.get("#cartur").click({ force: true });
    cy.get("button[type=button]")
      .contains("Place Order")
      .click({ force: true });
    cy.get("#name").type("Joao");
    cy.get("#country").type("Brasil");
    cy.get("#city").type("Pombal");
    cy.get("#card").type("1234");
    cy.get("#month").type("03");
    cy.get("#year").type("99");
    cy.get("button[type=button]").contains("Purchase").click({ force: true });
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.contain("Thank you");
      cy.get('[name="alert"]').click();
    });
  });
});
