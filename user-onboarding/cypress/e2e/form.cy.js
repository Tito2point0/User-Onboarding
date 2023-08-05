describe('settings page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    //my list of helpers
    const textInput = () => cy.get('input[name=UserName]');
    const electronicMailInput = () => cy.get('input[name=email]');
    const dontLook = () => cy.get('input[name=password]')
     const boxinput = () => cy.get('input[name=tos]')




    //element check 
    it("elements are changed", () => {
        textInput().should("exist");
        electronicMailInput().should("exist")
    })
    


    //so this is 

    it("grabbing name from dom", () => {
        textInput()
            .should("have.value", "")
            .type("Jorge george")
            .should("have.value", "Jorge george");

    })

 
 
    it("testing email", () => {
        electronicMailInput()
            .should("have.value", "")
            .type("gaga@gmail.com")
            .should("have.value", "gaga@gmail.com");

    })

    it("setting password", () => {
        dontLook()
            .should("have.value", "")
            .type("jasonjason")
            .should("have.value", "jasonjason");

    })

    it("checking box", () => {
        boxinput()
        .click()

    })


 

})