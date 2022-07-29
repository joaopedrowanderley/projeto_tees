/// <reference types="cypress" />

describe('testes de editar carrinho', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adcionando produto", () => {
    //clica no produto
    cy.get('[class="card-title"]').contains("Nokia").click({ force: true });

    //adcionando
    cy.get('[class="col-sm-12 col-md-6 col-lg-6"]')
      .contains("Add to cart")
      .click({ force: true });

    //verificando
    cy.get("#cartur").click({ force: true });
    cy.on("#tbodyid", (str) => {
      expect("str").to.equal("Nokia");
    });
  });

  it("Limpando carrinho", () => {
    //clica no produto
    cy.get('[class="card-title"]').contains("Nokia").click({ force: true });

    //adcionando
    cy.get('[class="col-sm-12 col-md-6 col-lg-6"]')
      .contains("Add to cart")
      .click({ force: true });

    //removendo
    cy.get("#cartur").click({ force: true });
    cy.get('[class="success"]').contains("Delete").click({ force: true });
    cy.on('[class="col-lg-1"]', (str) => {
      expect("str").to.equal("0");
    });
  });

  it("Saindo do carrinho", () => {
    //clica no produto
    cy.get('[class="card-title"]').contains("Nokia").click({ force: true });

    //adcionando
    cy.get('[class="col-sm-12 col-md-6 col-lg-6"]')
      .contains("Add to cart")
      .click({ force: true });

    //verificando
    cy.get("#cartur").click({ force: true });
    cy.go("back");

    //pagina inicial
    cy.on('[class="row"]', (str) => {
      expect("str").to.equal("CATEGORIES");
    });
  });

  it("Finalizando carrinho", () => {
    //clica no produto
    cy.get('[class="card-title"]').contains("Nokia").click({ force: true });

    //adcionando
    cy.get('[class="col-sm-12 col-md-6 col-lg-6"]')
      .contains("Add to cart")
      .click({ force: true });

    //verificando
    cy.get("#cartur").click({ force: true });
    
    //finalizando
    cy.get("button[type=button]").contains("Place Order").click({ force: true });
    cy.on('[class="modal-title"]', (str) => {
      expect("str").to.equal("Place Order");
    });

  });
});