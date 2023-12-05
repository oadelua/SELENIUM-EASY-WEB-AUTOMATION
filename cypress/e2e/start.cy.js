it('my first Selenium Demo Web Test', () => {
  cy.wait (3000)
    cy.visit('/')
cy.get ('#btn_basic_example').click ()
cy.get('.list-group > [href="./basic-first-form-demo.html"]').click()
cy.get('.form-group > #user-message').click()
cy.get('.form-group > #user-message').type('It really gets easy when you keep practising, right?')
cy.get('#get-input > .btn').click()
cy.get('#value1').click ()
cy.get('#value1').type(69)
cy.get('#value2').click
cy.get('#value2').type(41)
cy.wait (3000)
cy.get('#gettotal > .btn').click()

  })
