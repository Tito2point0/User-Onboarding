describe("settings page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //my list of helpers
  const textInput = () => cy.get("input[name=UserName]");
  const electronicMailInput = () => cy.get("input[name=email]");
  const dontLook = () => cy.get("input[name=password]");
  const boxinput = () => cy.get("input[name=tos]");
  const submitButton = () => cy.get("input[type=submit]");

  it("grabbing name from dom", () => {
    textInput()
      .should("have.value", "")
      .type("Jorge george")
      .should("have.value", "Jorge george");
  });

  it("testing email", () => {
    electronicMailInput()
      .should("have.value", "")
      .type("gaga@gmail.com")
      .should("have.value", "gaga@gmail.com");
  });

  it("setting password", () => {
    dontLook()
      .should("have.value", "")
      .type("jasonjason")
      .should("have.value", "jasonjason");
  });

  it("checking box", () => {
    boxinput().click();
  });

  it("full send", () => {
    textInput().should("have.value", "").type("Jorge george");
    electronicMailInput().should("have.value", "").type("gaga@gmail.com");
    dontLook()
      .should("have.value", "")
      .type("jasonjason")
      .should("have.value", "jasonjason")
    boxinput().click()
      submitButton()
          .click()
      
    
  });
    
    it("testing form validation", () => {
        textInput()
            .type("Jorge george")
            .clear()
        electronicMailInput()
            .should("have.value", "")
            .type("gag2@gmail.com")
            .clear()
        dontLook()
            .should("have.value", "")
            .type("jasonjason")
            .clear()
        boxinput()
            .click()
            .uncheck()


    })


 
});
