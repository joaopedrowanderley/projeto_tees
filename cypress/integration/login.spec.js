/// <reference types="cypress" />

describe('testes de login', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('credenciais invalidas', () => {
    //acessa modal de login
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type("usuario invalido");
    cy.get("#loginpassword").type("senha invalida");

    //clica no botao de login
    cy.get("button[type=button]").contains('Log in').click({force:true});

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("User does not exist.");
      cy.get('[name="alert"]').click();
    });
  });

  it("nome de usuario invalido", () => {
    //acessa modal de login
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type("usuario invalido");
    cy.get("#loginpassword").type("test");

    //clica no botao de login
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("User does not exist.");
      cy.get('[name="alert"]').click();
    });
  });

  it("senha invalida", () => {
    //acessa modal de login
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type("teste1234567");
    cy.get("#loginpassword").type("senha invalida");

    //clica no botao de login
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Wrong password.");
      cy.get('[name="alert"]').click();
    });
  });

  it("senha e nome vazios", () => {
    //acessa modal de login
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type(" ");
    cy.get("#loginpassword").type(" ");

    //clica no botao de login
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Please fill out Username and Password.");
      cy.get('[name="alert"]').click();
    });
  });

  it("senha e nome validos", () => {
    //acessa modal de login
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type("teste1234567");
    cy.get("#loginpassword").type("test");

    //clica no botao de login
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //abre a pagina do usuario
    cy.on("#nameofuser", (str) => {
      expect("str").to.equal("Bem-vindo teste1234567");
    });
  });
});