describe('Validates Body', () => {

 it ('Update user', () => {
  var abilities = {
      "name": 'limber',
      "job": 'Engineering Manager'
  } 
  cy.request('https://pokeapi.co/api/v2/ability/7/', abilities).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.name).to.eq(abilities.name)
  })
})
})