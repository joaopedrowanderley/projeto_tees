/// <reference types="cypress" />

describe('testes de escolher produto', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Escolher um celular', () => {
    //filtra produto
    cy.get('[class="list-group"]').contains("Phones").click({ force: true });

    //clica no produto
    cy.get('[class="card-title"]').contains("Nokia").click({ force: true });

    //detalhes do produto
    cy.on('[class="name"]', (str) => {
      expect("str").to.equal("Nokia");
    });
  });
  it("Escolher um notebook", () => {
    //filtra produto
    cy.get('[class="list-group"]').contains("Laptops").click({ force: true });

    //clica no produto
    cy.get('[class="card-title"]')
      .contains("MacBook Pro")
      .click({ force: true });
    //detalhes do produto
    cy.on('[class="name"]', (str) => {
      expect("str").to.equal("MacBook Pro");
    });
  });

  it("Escolher um monitor", () => {
    //filtra produto
    cy.get('[class="list-group"]').contains("Monitors").click({ force: true });

    //clica no produto
    cy.get('[class="card-title"]').contains("Apple").click({ force: true });

    //detalhes do produto
    cy.on('[class="name"]', (str) => {
      expect("str").to.equal("Apple");
    });
  });

  it("Escolher um produto e voltar atras", () => {

    //clica no produto
    cy.get('[class="card-title"]').contains("Nexus").click({ force: true });

    //voltando
    cy.go('back')

    //pagina inicial
    cy.on('[class="row"]', (str) => {
      expect("str").to.equal("CATEGORIES");
    });
  });

  it("Escolher um produto e adcionar ao carrinho", () => {
    //clica no produto
    cy.get('[class="card-title"]').contains("Nexus").click({ force: true });

    //adcionando
    cy.get('[class="col-sm-12 col-md-6 col-lg-6"]')
      .contains("Add to cart")
      .click({ force: true });

    //recebe menssagem de confirmação
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Product added");
      cy.get('[name="alert"]').click();
    });
    
  });

});