it('this is an advanced test using tables and drop down selection',() => {
cy.visit('/')
cy.wait (3000)
cy.get('#advanced_example > .round-tabs > .glyphicon').click()
cy.get('.list-group > [href="./table-search-filter-demo.html"]').click()
cy.get('#task-table-filter').click()
cy.get('#task-table-filter').type('4')
cy.get('.btn').click() //this activates the filter button // not relative - cy.get('[disabled]').click({force: true}), { multiple: true }
cy.get('.filters > :nth-child(2) > .form-control').click()
cy.get('.filters > :nth-child(2) > .form-control').type('jacobs')
cy.wait (3000)
cy.visit('/')
cy.get('#advanced_example > .round-tabs > .glyphicon').click()
cy.get('.list-group > [href="./table-sort-search-demo.html"]').click()
cy.get('select').select([2]) //select an item from an array list, you do not use .clik in this case
cy.get('input').click()
cy.get('input').type('Software')
cy.wait (3000)
cy.visit('/')
cy.get('#advanced_example > .round-tabs > .glyphicon').click()
cy.get('.list-group > [href="./bootstrap-download-progress-demo.html"]').click()
cy.get('#cricle-btn').click()
cy.wait (3000)
cy.visit('/')
    
})

