describe('Validates Body', () => {
    it('successfully Validate Body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').should((response) => {
          expect(response.body)
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
        })
      })
 })