/// <reference types="cypress" />

describe("testes de cadastro", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("nome de usuario nulo", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    //acessa modal de cadastro
    cy.get("#signin2").click({ force: true });

    //digita credenciais
    
    cy.get("#sign-password").type("teste");

    //clica no botao de inscrever-se
    cy.get("button[type=button]").contains("Sign up").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Please fill out Username and Password.");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("senha nula", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    //acessa modal de cadastro
    cy.get("#signin2").click({ force: true });

    //digita credenciais
    cy.get("#sign-username").type("jpsw");

    //clica no botao de inscrever-se
    cy.get("button[type=button]").contains("Sign up").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("Please fill out Username and Password.");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });

  it("inscrição não finalizada", () => {
    
    //acessa modal de cadastro
    cy.get("#signin2").click({ force: true });

    //digita credenciais
    cy.get("#sign-username").type("jpsw");
    cy.get("#sign-password").type("teste");
    
    //clica no botao de sair
    cy.get("button[type=button]").contains("Close").click({ force: true });

    //testando se o usuario foi cadastrado
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type("jpsw");
    cy.get("#loginpassword").type("teste");

    //clica no botao de login
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("User does not exist.");
      cy.get('[name="alert"]').click();
    });
  });
  it("inscrição realizada com sucesso", () => {
    //acessa modal de cadastro
    cy.get("#signin2").click({ force: true });

    //digita credenciais
    cy.get("#sign-username").type("jpsw");
    cy.get("#sign-password").type("teste");

    //clica no botao de increver-se
    cy.get("button[type=button]").contains("Sign up").click({ force: true });

    //testando se o usuario foi cadastrado
    cy.get("#login2").click({ force: true });

    //digita credenciais
    cy.get("#loginusername").type("jpsw");
    cy.get("#loginpassword").type("teste");

    //clica no botao de login
    cy.get("button[type=button]").contains("Log in").click({ force: true });

    //abre a pagina do usuario
    cy.on("#nameofuser", (str) => {
      expect("str").to.equal("jpsw");
    });
  });

  it("usuario existente", () => {

    //acessa modal de cadastro
    cy.get("#signin2").click({ force: true });

    //digita credenciais
    cy.get("#sign-username").type("jpsw");
    cy.get('#sign-password').type("teste")
    //clica no botao de inscrever-se
    cy.get("button[type=button]").contains("Sign up").click({ force: true });

    //recebe a mensagem de erro e clica em OK
    cy.on("window:alert", (str) => {
      //window:alert is the event which get fired on alert open
      expect(str).to.equal("This user already exist.");
      cy.get("button[type=button]").contains("OK").click({ force: true });
    });
  });  
});
